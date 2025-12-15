import { NextRequest, NextResponse } from 'next/server';
import { HTTPError } from 'ky';
import { apiServer } from '@/shared/lib/apiServer';

interface SignupPhase2Response {
  status: string;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const signupToken = req.cookies.get('signupToken')?.value;

    if (!signupToken) {
      return NextResponse.json(
        { message: 'signupToken이 없습니다. 1단계를 먼저 진행하세요.' },
        { status: 401 }
      );
    }

    // TODO: 백엔드가 signupToken을 받는 방식에 맞춰 수정
    const result = await apiServer.post('auth/signup/phase2', {
      json: { ...body, signupToken },
    }).json<SignupPhase2Response>();

    const { accessToken, refreshToken } = result.data ?? {};
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: '토큰이 응답에 없습니다.' },
        { status: 502 }
      );
    }

    const res = NextResponse.json(
      { message: result.message ?? '회원가입 완료' },
      { status: 201 }
    );

    const isProd = process.env.NODE_ENV === 'production';

    res.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15, // TODO: 15분 (백엔드와 동일하게)
    });

    res.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 14, // TODO: 14일 (백엔드와 동일하게)
    });

    res.cookies.delete('signupToken');

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      const status = error.response.status;
      const errorData = await error.response.json().catch(() => ({} as Record<string, unknown>));
      return NextResponse.json(
        { message: errorData.message || '회원가입 2단계 실패' },
        { status }
      );
    }
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
