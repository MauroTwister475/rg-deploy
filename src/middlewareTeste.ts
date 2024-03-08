import { privateRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT, apiAuthPrefix } from "@/app/routes";
import { NextRequest } from "next/server";
import { cookies } from 'next/headers'

export function middleware(req: NextRequest) {
  let isLoggedIn = null; 
  const token = cookies().get('SG.Token');

  token ? isLoggedIn = true : isLoggedIn = false;

  const isApiAuthRoute: boolean = req.nextUrl?.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute: boolean = publicRoutes.includes(req.nextUrl?.pathname);
  const isAuthRoute: boolean = privateRoutes.includes(req.nextUrl?.pathname);

  if (isApiAuthRoute) return null;

  if(isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req?.nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", req?.nextUrl));
  } 
  return null;
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};