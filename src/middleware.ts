import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/play/notionn/Analytics") {
    const url = request.nextUrl.clone();
    url.pathname = "/play/notionn/analytics";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/play/notionn/Analytics"],
};
