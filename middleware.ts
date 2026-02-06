import { protectDashboard } from '@/lib/auth-middleware';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    return protectDashboard(request);
}

// Configure which paths the middleware runs on
export const config = {
    matcher: '/dashboard/:path*',
}
