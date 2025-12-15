import { NextRequest, NextResponse } from 'next/server';
import { HTTPError } from 'ky';
import { apiServer } from '@/shared/lib/apiServer';

interface SignupPhase1Response {
  status: string;
  message: string;
  data: {
    signupToken: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // TODO: 백엔드 엔드포인트명 맞추기
    const result = await apiServer
      .post('auth/signup/phase1', { json: body })
      .json<SignupPhase1Response>();

    const signupToken = result.data?.signupToken;

    if (!signupToken) {
      return NextResponse.json(
        { message: 'signupToken이 응답에 없습니다.' },
        { status: 502 }
      );
    }

    const res = NextResponse.json(
      { message: result.message ?? '회원가입 phase1 완료' },
      { status: 201 }
    );

    const isProd = process.env.NODE_ENV === 'production';

    // TODO: signupToken 쿠키에 저장 (추후 백엔드 회원가입 로직에 맞춰 수정 필요)
    res.cookies.set('signupToken', signupToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 10, // TODO: 10분 (백엔드와 동일하게 설정할 필요)
    });

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      const status = error.response.status;
      const errorData = await error.response.json().catch(() => ({} as Record<string, unknown>));
      return NextResponse.json(
        { message: errorData.message || '회원가입 phase1 실패' },
        { status }
      );
    }
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
