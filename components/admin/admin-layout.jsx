"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary components and hooks
import Image from "next/image" // For optimized image loading
import Link from "next/link" // For client-side navigation
import { usePathname } from "next/navigation" // For getting current path
import { LayoutDashboard, Car, CalendarClock, CalendarDays, Settings } from "lucide-react" // Icon components
import { useAuth } from "@/components/auth/auth-provider" // Authentication hook

// Admin layout component that provides the layout structure for admin pages
// Props: children (the main content to render)
export default function AdminLayout({ children }) {
  // Get the current pathname for highlighting active links
  const pathname = usePathname()
  // Get the current user from auth context
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <div className="w-64 border-r bg-white">
        {/* Logo and site name */}
        <div className="p-4 border-b">
          <Link href="/admin" className="flex items-center">
            <Image src="/logo.svg" alt="PahiramCar Logo" width={40} height={40} className="mr-2" />
            <span className="font-bold text-xl">PahiramCar</span>
          </Link>
        </div>

        {/* Navigation menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {/* Dashboard link */}
            <li>
              <Link
                href="/admin"
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  pathname === "/admin" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <LayoutDashboard size={20} className="text-gray-500" />
                <span>Dashboard</span>
              </Link>
            </li>
            {/* Cars link */}
            <li>
              <Link
                href="/admin/cars"
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  pathname === "/admin/cars" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <Car size={20} className="text-gray-500" />
                <span>Cars</span>
              </Link>
            </li>
            {/* Reservations link */}
            <li>
              <Link
                href="/admin/reservations"
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  pathname === "/admin/reservations" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <CalendarClock size={20} className="text-gray-500" />
                <span>Reservations</span>
                {/* Notification badge - only shown on reservations page */}
                {pathname === "/admin/reservations" && (
                  <span className="ml-auto bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                )}
              </Link>
            </li>
            {/* Bookings link */}
            <li>
              <Link
                href="/admin/bookings"
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  pathname === "/admin/bookings" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <CalendarDays size={20} className="text-gray-500" />
                <span>Bookings</span>
              </Link>
            </li>
            {/* Settings link */}
            <li>
              <Link
                href="/admin/settings"
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  pathname === "/admin/settings" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <Settings size={20} className="text-gray-500" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        {/* Header with user avatar */}
        <header className="h-16 border-b bg-white flex items-center justify-end px-6">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt={user?.name || "User"}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

