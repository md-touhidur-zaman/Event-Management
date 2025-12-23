import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken"


type UserRole = "USER" | "ADMIN" | "HOST"

type RouteConfig = {
    exact: string[],
    patterns: RegExp[]
}

const authRoutes = ["/login", "/register"]

const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile"],
    patterns: []
}

const userProtectedRoutes: RouteConfig ={
    exact: [],
    patterns: [/^\/dashboard/]
}

const hostProtectedRoutes: RouteConfig = {
    exact: [],
    patterns: [/^\/host/]
}

const adminProtectedRoutes: RouteConfig = {
    exact: [],
    patterns: [/^\/admin/]
}

const isAuthRoute = (pathname: string)=>{
    return authRoutes.some((route)=> route === pathname)
}
 
const isRouteMatches = (pathname: string, routes: RouteConfig) =>{
    if(routes.exact.includes(pathname)){
        return true
    }
    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname))
}

const getRouteOwner = (pathname: string) : "USER" |"HOST"|"ADMIN"|"COMMON"|"PUBLIC" =>{
    if(isRouteMatches(pathname, userProtectedRoutes)){
        return "USER"
    }

    if(isRouteMatches(pathname,hostProtectedRoutes )){
        return "HOST"
    }

    if(isRouteMatches(pathname, adminProtectedRoutes)){
        return "ADMIN"
    }

    if(isRouteMatches(pathname, commonProtectedRoutes)){
        return "COMMON"
    }

    return "PUBLIC"
}


const getDefaultDashboardRoutes = (role: string) =>{
    if(role==="USER"){
        return "/dashboard"
    }
    if(role==="ADMIN"){
        return "/admin/dashboard"
    }
    if(role==="HOST"){
        return "/host/dashboard"
    }
    return "/"
}
 

export async function proxy(request: NextRequest) {
    const cookieStore = await cookies()
    const pathname = request.nextUrl.pathname 
    
    const accessToken = request.cookies.get("accessToken")?.value || null

    let userRole: UserRole| null = null 

    if(accessToken){
        const verifiedToken: JwtPayload | string = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY as string)
        if(typeof verifiedToken === "string"){
            cookieStore.delete("accessToken")
            cookieStore.delete("refreshToken")
            return NextResponse.redirect(new URL("/login", request.url))
        }

        userRole = verifiedToken.role
    }

    const isAuth = isAuthRoute(pathname)

    if(accessToken && isAuth){
        return NextResponse.redirect(new URL(getDefaultDashboardRoutes(userRole as string), request.url))
    }

  return NextResponse.next()
}
 

 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}