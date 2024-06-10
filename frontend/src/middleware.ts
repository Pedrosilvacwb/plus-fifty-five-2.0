import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "./services/AuthService";

export async function middleware(request: NextRequest) {
  // const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  // if (currentPath.startsWith("/payment") && user.ok === false) {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  return NextResponse.next();
}
