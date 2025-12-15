import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';


// TODO: PUBLIC 및 PROTECTED 경로들 추후 추가 및 수정 필요
const PUBLIC_ONLY = ['/login', '/signup']; 
const PROTECTED_PREFIXES = ['/mypage']; 

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get('accessToken')?.value;

  const isAuthed = Boolean(accessToken); 

  if (PUBLIC_ONLY.includes(pathname) && isAuthed) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  if (isProtected && !isAuthed) {
    const url = new URL('/login', request.url);
    url.searchParams.set('next', pathname); 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// TODO: 추후 추가 될 예정, matcher는 "미들웨어가 실행될 경로"만 최소로 걸기
export const config = {
  matcher: [
    '/login',
    '/signup',
    '/mypage/:path*',
  ],
};
