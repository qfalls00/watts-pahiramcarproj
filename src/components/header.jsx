"use client" // Indicates this is a client-side component that uses client-side features

import { useState, useEffect } from "react" // Import React hooks for state and side effects
import { Link, useLocation, useNavigate } from "react-router-dom" // Import routing components and hooks
import { useAuth } from "./auth/auth-provider" // Import the authentication hook
import { User, Settings, LogOut } from "lucide-react" // Import icon components

export default function Header() {
  const location = useLocation() // Get current location/route
  const navigate = useNavigate() // Get navigation function for programmatic routing
  const { user, logout } = useAuth() // Get user and logout function from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State to control user dropdown visibility

  // Effect to update login status when user changes
  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(!!user) // Convert user object to boolean
  }, [user]) // Re-run when user changes

  // Function to handle logout
  const handleLogout = () => {
    logout() // Call logout function from auth context
    navigate("/") // Navigate to home page
    setIsDropdownOpen(false) // Close the dropdown
  }

  // Function to handle dashboard navigation
  const handleDashboard = () => {
    if (user?.role === "admin") {
      navigate("/admin") // Navigate to admin dashboard if user is admin
    } else {
      navigate("/dashboard") // Navigate to user dashboard otherwise
    }
    setIsDropdownOpen(false) // Close the dropdown
  }

  // If we're on the admin page, don't show the regular header
  if (location.pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-10">
      {/* Logo and site name */}
      <Link to="/" className="flex items-center">
        <img src="/logo.svg" alt="PahiramCar Logo" width={60} height={60} className="mr-2" />
        <span className="text-xl font-bold">PahiramCar</span>
      </Link>

      {/* Navigation links */}
      <nav className="flex items-center gap-6">
        {/* Show these links if not on dashboard */}
        {!location.pathname.startsWith("/dashboard") && (
          <>
            <Link to="/cars" className="font-medium">
              Browse Cars
            </Link>
            <Link to="/about" className="font-medium">
              About
            </Link>
            <Link to="/contact" className="font-medium">
              Contact
            </Link>
          </>
        )}

        {/* Show these links if on dashboard */}
        {location.pathname.startsWith("/dashboard") && (
          <>
            <Link to="/dashboard" className="font-medium">
              Dashboard
            </Link>
            <Link to="/about" className="font-medium">
              About
            </Link>
            <Link to="/contact" className="font-medium">
              Contact
            </Link>
          </>
        )}

        {/* User menu or login/signup buttons */}
        {isLoggedIn ? (
          <div className="relative">
            {/* User avatar/button that toggles dropdown */}
            <div
              className="h-10 w-10 cursor-pointer bg-gray-200 rounded-full flex items-center justify-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {user?.name?.substring(0, 2).toUpperCase() || "U"} {/* Show first 2 letters of name or "U" */}
            </div>

            {/* Dropdown menu - only shown when isDropdownOpen is true */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                <button
                  onClick={handleDashboard}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    navigate("/settings")
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
        ) : (
          // Login and signup buttons for non-logged in users
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button className="px-4 py-2 border rounded-md">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Sign Up</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

