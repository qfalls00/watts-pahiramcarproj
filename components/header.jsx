// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary components and hooks
import Link from "next/link" // For client-side navigation
import Image from "next/image" // For optimized image loading
import { usePathname, useRouter } from "next/navigation" // For routing information and navigation
import { Button } from "@/components/ui/button" // UI button component
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Avatar components
import { useState, useEffect } from "react" // React hooks
import { useAuth } from "@/components/auth/auth-provider" // Authentication hook
import {
  DropdownMenu, // Dropdown menu component
  DropdownMenuContent, // Content of dropdown menu
  DropdownMenuItem, // Individual menu item
  DropdownMenuSeparator, // Separator line in dropdown
  DropdownMenuTrigger, // Trigger element for dropdown
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut } from "lucide-react" // Icon components

// Header component for the application
export default function Header() {
  // Get the current pathname for conditional rendering
  const pathname = usePathname()
  // Get the router for programmatic navigation
  const router = useRouter()
  // Get authentication state and functions
  const { user, logout } = useAuth()
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Effect to handle authentication state changes
  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(!!user)

    // Redirect to appropriate dashboard if logged in
    if (user) {
      if (pathname === "/login" || pathname === "/signup") {
        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
      }
    }
  }, [user, pathname, router]) // Re-run when these dependencies change

  // Function to handle logout
  const handleLogout = () => {
    logout()
    router.push("/")
  }

  // Function to handle dashboard navigation
  const handleDashboard = () => {
    if (user?.role === "admin") {
      router.push("/admin")
    } else {
      router.push("/dashboard")
    }
  }

  // If we're on the admin page, don't show the regular header
  if (pathname.startsWith("/admin")) {
    return null
  }

  // Render the header component
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-10">
      {/* Logo and site name */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="PahiramCar Logo" width={60} height={60} className="mr-2" />
        <span className="text-xl font-bold">PahiramCar</span>
      </Link>

      {/* Navigation links */}
      <nav className="flex items-center gap-6">
        {/* Show these links if not on dashboard */}
        {!pathname.startsWith("/dashboard") && (
          <>
            <Link href="/cars" className="font-medium">
              Browse Cars
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </>
        )}

        {/* Show these links if on dashboard */}
        {pathname.startsWith("/dashboard") && (
          <>
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </>
        )}

        {/* User menu or login/signup buttons */}
        {isLoggedIn ? (
          <DropdownMenu>
            {/* Avatar as dropdown trigger */}
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer bg-gray-200">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "U"}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            {/* Dropdown menu content */}
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleDashboard} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")} className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          // Login and signup buttons for non-logged in users
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" className="rounded-md">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-md">Sign Up</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

