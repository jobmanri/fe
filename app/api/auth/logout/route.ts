import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ message: '로그아웃 성공' }, { status: 200 });

  res.cookies.delete('accessToken');
  res.cookies.delete('refreshToken');

  // TODO: 2-phase 임시 토큰 삭제 (일단 삭제 로직에 포함)
  res.cookies.delete('signupToken');

  return res;
}
