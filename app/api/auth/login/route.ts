import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            return NextResponse.json({ message: "API URL not configured" }, { status: 500 });
        }


        const response = await axios.post(`${apiUrl}/google_login`, body, {
            validateStatus: () => true
        });

        const data = response.data;
        const status = response.status;


        const nextResponse = NextResponse.json(data, { status });


        const setCookie = response.headers['set-cookie'];
        if (setCookie) {
            nextResponse.headers.set('Set-Cookie', setCookie.join(', '));
        }

        return nextResponse;

    } catch (error: any) {
        console.error("Proxy Login Error:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
