import { NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
    const localeCookie = request.cookies.get('Next-Locale')?.value;
    if (!localeCookie) {
        const url = request.nextUrl.clone();
        url.pathname = `/en${url.pathname !== '/' ? url.pathname : ''}`;
        const response = NextResponse.redirect(url);
        response.cookies.set('Next-Locale', 'en', { path: '/' });
        return response;
    }
    return I18nMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
