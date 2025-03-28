"use client" // Indicates this is a client-side component that uses client-side features

import { Navigate } from "react-router-dom" // Import Navigate component for redirection
import { useAuth } from "./auth-provider" // Import the authentication hook from auth-provider

// Define the AdminRoute component that wraps admin-only content
// It takes children as props which represent the admin content to render
const AdminRoute = ({ children }) => {
  // Use the useAuth hook to get the current user and loading state
  const { user, isLoading } = useAuth()

  // If the authentication state is still loading, show a loading indicator
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  // If there's no authenticated user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace /> // replace=true replaces the current entry in history
  }

  // If user is authenticated but not an admin, redirect to the dashboard
  if (user.role !== "admin") {
    return <Navigate to="/dashboard" replace />
  }

  // If user is authenticated and is an admin, render the admin content (children)
  return children
}

// Export the AdminRoute component as the default export
export default AdminRoute

