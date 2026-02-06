import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: "Logged out successfully" });

    // strictly clear the auth_token cookie
    response.cookies.set('auth_token', '', {
        path: '/',
        maxAge: 0,
        expires: new Date(0),
    });

    return response;
}
