"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import { Link, useNavigate } from "react-router-dom" // Import routing components and hooks
import { useAuth } from "../auth/auth-provider" // Import the authentication hook
import { User, Settings, LogOut } from "lucide-react" // Import icon components

export default function AdminHeader() {
  const navigate = useNavigate() // Get navigation function for programmatic routing
  const { logout } = useAuth() // Get logout function from auth context
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State to control user dropdown visibility

  // Function to handle logout
  const handleLogout = () => {
    logout() // Call logout function from auth context
    navigate("/") // Navigate to home page
    setIsDropdownOpen(false) // Close the dropdown
  }

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b bg-white">
      {/* Logo and site name */}
      <div className="flex items-center">
        <Link to="/admin" className="flex items-center">
          <img src="/logo.svg" alt="PahiramCar Logo" width={60} height={60} className="mr-2" />
          <span className="text-xl font-bold">PahiramCar</span>
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex items-center gap-6">
        <Link to="/admin" className="font-medium">
          Dashboard
        </Link>
        <Link to="/about" className="font-medium">
          About
        </Link>
        <Link to="/contact" className="font-medium">
          Contact
        </Link>

        {/* Admin user dropdown */}
        <div className="relative">
          {/* Admin avatar/button that toggles dropdown */}
          <div
            className="h-10 w-10 cursor-pointer bg-gray-200 rounded-full flex items-center justify-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            A {/* "A" for Admin */}
          </div>

          {/* Dropdown menu - only shown when isDropdownOpen is true */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
              <button
                onClick={() => {
                  navigate("/admin")
                  setIsDropdownOpen(false)
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => {
                  navigate("/admin/settings")
                  setIsDropdownOpen(false)
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </button>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

