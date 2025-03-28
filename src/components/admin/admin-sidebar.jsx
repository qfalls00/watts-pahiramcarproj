import { Link, useLocation } from "react-router-dom" // Import routing components and hooks
import { LayoutDashboard, Car, CalendarClock, CalendarDays, Settings } from "lucide-react" // Import icon components

export default function AdminSidebar() {
  const location = useLocation() // Get current location/route

  // Function to check if a link is active based on the current path
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="w-48 min-h-screen border-r bg-gray-50">
      {/* Logo section */}
      <div className="p-4 border-b">
        <Link to="/admin" className="flex items-center">
          <img src="/logo.svg" alt="PahiramCar Logo" width={40} height={40} className="mr-2" />
          <span className="font-bold">PahiramCar</span>
        </Link>
      </div>

      {/* Navigation menu */}
      <nav className="p-2">
        <ul className="space-y-1">
          {/* Dashboard link */}
          <li>
            <Link
              to="/admin"
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
              to="/admin/cars"
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
              to="/admin/reservations"
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
              to="/admin/bookings"
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
              to="/admin/settings"
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

