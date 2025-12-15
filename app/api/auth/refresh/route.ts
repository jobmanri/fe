import { NextRequest, NextResponse } from "next/server";

import { HTTPError } from "ky";

import { apiServer } from "@/shared/lib/apiServer";
import { BaseResponse } from "@/shared/types/api";

import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from "../constants";

export type RefreshSuccessResponse = BaseResponse<{
  accessToken: string;
  refreshToken?: string;
}>;

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ message: "refreshToken이 없습니다." }, { status: 401 });
    }

    const result = await apiServer
      .post("auth/refresh", { json: { refreshToken } })
      .json<RefreshSuccessResponse>();

    const newAccessToken = result.data?.accessToken;
    const newRefreshToken = result.data?.refreshToken;

    if (!newAccessToken) {
      return NextResponse.json({ message: "accessToken이 응답에 없습니다." }, { status: 502 });
    }

    const res = NextResponse.json(
      { message: result.message ?? "토큰 재발급 성공" },
      { status: 200 },
    );

    const isProd = process.env.NODE_ENV === "production";

    res.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: ACCESS_TOKEN_MAX_AGE,
    });

    if (newRefreshToken) {
      res.cookies.set("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: REFRESH_TOKEN_MAX_AGE,
      });
    }

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      const status = error.response.status;
      const errorData = await error.response.json().catch(() => ({}) as Record<string, unknown>);

      return NextResponse.json({ message: errorData.message || "토큰 재발급 실패" }, { status });
    }

    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
  }
}
