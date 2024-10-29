import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const token = (await cookies(request)).get('__Secure-next-auth.session-token'); // Ensure this matches your cookie key
    const pathname = request.nextUrl.pathname;

    console.log("Token:", token);
    console.log("Pathname:", pathname);

    if (pathname.includes('api')) {
        return NextResponse.next();
    }

    if (!token) {
        console.log("Redirecting to login...");
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/my-bookings/:path*', '/services/:path*'],
};
