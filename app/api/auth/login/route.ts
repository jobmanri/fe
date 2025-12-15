import { NextRequest, NextResponse } from "next/server";

import { HTTPError } from "ky";

import { apiServer } from "@/shared/lib/apiServer";
import { BaseResponse } from "@/shared/types/api";

import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from "../constants";

export type LoginSuccessResponse = BaseResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await apiServer.post("auth/login", { json: body }).json<LoginSuccessResponse>();

    const { accessToken, refreshToken } = result.data ?? {};

    if (!accessToken || !refreshToken) {
      return NextResponse.json({ message: "토큰이 응답에 없습니다." }, { status: 502 });
    }

    const res = NextResponse.json({ message: result.message ?? "로그인 성공" }, { status: 200 });

    const isProd = process.env.NODE_ENV === "production";

    res.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: ACCESS_TOKEN_MAX_AGE,
    });

    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: REFRESH_TOKEN_MAX_AGE,
    });

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      const status = error.response.status;
      const errorData = await error.response.json().catch(() => ({}) as Record<string, unknown>);

      return NextResponse.json({ message: errorData.message || "로그인 실패" }, { status });
    }

    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
  }
}
