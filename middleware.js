// Import NextResponse from Next.js middleware
import { NextResponse } from "next/server"

// Middleware function that runs on every request
// This handles authentication and route protection
export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define paths that are considered public (accessible without authentication)
  const isPublicPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/" ||
    path === "/about" ||
    path === "/contact" ||
    path.startsWith("/api/")

  // Check if user is authenticated by looking for the isLoggedIn cookie
  const isAuthenticated = request.cookies.has("isLoggedIn")

  // If the path is not public and the user is not authenticated, redirect to login
  if (!isPublicPath && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the user is authenticated and trying to access login/signup, redirect to dashboard
  if (isAuthenticated && (path === "/login" || path === "/signup")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Continue with the request if no redirects are needed
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
// This matcher pattern excludes static files and assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.svg|.*\\.png$).*)"],
}

