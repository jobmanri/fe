import { NextRequest, NextResponse } from "next/server";

import { HTTPError } from "ky";

import { apiServer } from "@/shared/lib/apiServer";
import { BaseResponse } from "@/shared/types/api";

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
      maxAge: 60 * 15, // TODO: 15분 (백엔드와 동일하게)
    });

    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14, // TODO: 14일 (백엔드와 동일하게)
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
