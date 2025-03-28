// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary components and hooks
import Link from "next/link" // For client-side navigation
import Image from "next/image" // For optimized image loading
import { useRouter } from "next/navigation" // For programmatic navigation
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Avatar components
import { useAuth } from "@/components/auth/auth-provider" // Authentication hook
import {
  DropdownMenu, // Dropdown menu component
  DropdownMenuContent, // Content of dropdown menu
  DropdownMenuItem, // Individual menu item
  DropdownMenuSeparator, // Separator line in dropdown
  DropdownMenuTrigger, // Trigger element for dropdown
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut } from "lucide-react" // Icon components

// Admin header component
export default function AdminHeader() {
  // Get the router for programmatic navigation
  const router = useRouter()
  // Get the logout function from auth context
  const { logout } = useAuth()

  // Function to handle logout
  const handleLogout = () => {
    logout() // Call the logout function from auth context
    router.push("/") // Redirect to home page
  }

  // Render the admin header
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b bg-white">
      {/* Logo and site name */}
      <div className="flex items-center">
        <Link href="/admin" className="flex items-center">
          <Image src="/logo.svg" alt="PahiramCar Logo" width={60} height={60} className="mr-2" />
          <span className="text-xl font-bold">PahiramCar</span>
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex items-center gap-6">
        <Link href="/admin" className="font-medium">
          Dashboard
        </Link>
        <Link href="/about" className="font-medium">
          About
        </Link>
        <Link href="/contact" className="font-medium">
          Contact
        </Link>

        {/* User dropdown menu */}
        <DropdownMenu>
          {/* Avatar as dropdown trigger */}
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer bg-gray-200">
              <AvatarImage src="/placeholder.svg" alt="Admin" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          {/* Dropdown menu content */}
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push("/admin")} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/admin/settings")} className="cursor-pointer">
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
      </nav>
    </header>
  )
}

