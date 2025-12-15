import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Check if the CSRF token cookie exists
  if (!request.cookies.has('csrf_token')) {
    // Generate a new token
    const token = crypto.randomUUID();
    
    // Set the cookie
    response.cookies.set('csrf_token', token, {
      httpOnly: true, // Not accessible via JavaScript
      secure: process.env.NODE_ENV === 'production', // Only sent over HTTPS in production
      sameSite: 'lax', // Protects against CSRF
      path: '/',
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logos (public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logos).*)',
  ],
};
