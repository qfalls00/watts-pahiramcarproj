// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary components and hooks
import Link from "next/link" // For client-side navigation
import Image from "next/image" // For optimized image loading
import { usePathname } from "next/navigation" // For getting current path
import { LayoutDashboard, Car, CalendarClock, CalendarDays, Settings } from "lucide-react" // Icon components

// Admin sidebar component
export default function AdminSidebar() {
  // Get the current pathname for highlighting active links
  const pathname = usePathname()

  // Helper function to check if a link is active
  const isActive = (path) => {
    return pathname === path
  }

  // Render the admin sidebar
  return (
    <div className="w-48 min-h-screen border-r bg-gray-50">
      {/* Logo section at the top */}
      <div className="p-4 border-b">
        <Link href="/admin" className="flex items-center">
          <Image src="/logo.svg" alt="PahiramCar Logo" width={40} height={40} className="mr-2" />
          <span className="font-bold">PahiramCar</span>
        </Link>
      </div>

      {/* Navigation menu */}
      <nav className="p-2">
        <ul className="space-y-1">
          {/* Dashboard link */}
          <li>
            <Link
              href="/admin"
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive("/admin") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* Cars link */}
          <li>
            <Link
              href="/admin/cars"
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive("/admin/cars") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <Car size={20} />
              <span>Cars</span>
            </Link>
          </li>
          {/* Reservations link */}
          <li>
            <Link
              href="/admin/reservations"
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive("/admin/reservations") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <CalendarClock size={20} />
              <span>Reservations</span>
            </Link>
          </li>
          {/* Bookings link */}
          <li>
            <Link
              href="/admin/bookings"
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive("/admin/bookings") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <CalendarDays size={20} />
              <span>Bookings</span>
            </Link>
          </li>
          {/* Settings link */}
          <li>
            <Link
              href="/admin/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive("/admin/settings") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

