"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import { Link, useNavigate } from "react-router-dom" // Import Link for navigation and useNavigate hook
import { useAuth } from "../components/auth/auth-provider" // Import the authentication hook
import { Eye, EyeOff } from "lucide-react" // Import icons for password visibility toggle
import MainLayout from "../layouts/MainLayout" // Import the main layout component
import { Button } from "../components/ui/button" // Import Button UI component
import { Input } from "../components/ui/input" // Import Input UI component

export default function Login() {
  const navigate = useNavigate() // Initialize the navigate function for programmatic navigation
  const { login } = useAuth() // Get the login function from the auth context
  const [email, setEmail] = useState("") // State for email input
  const [password, setPassword] = useState("") // State for password input
  const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility
  const [isLoading, setIsLoading] = useState(false) // State to track loading status during login
  const [error, setError] = useState("") // State to store and display error messages

  // Function to handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault() // Prevent default form submission behavior
    setError("") // Clear any previous errors
    setIsLoading(true) // Set loading state to true

    try {
      // Attempt to log in with the provided credentials
      const success = await login(email, password)

      if (success) {
        // If login is successful, get the user data from localStorage
        const user = JSON.parse(localStorage.getItem("user"))
        // Redirect based on user role
        if (user.role === "admin") {
          navigate("/admin") // Navigate to admin dashboard if user is an admin
        } else {
          navigate("/dashboard") // Navigate to user dashboard if user is not an admin
        }
      } else {
        // If login failed, show an error message
        setError("Invalid email or password")
      }
    } catch (err) {
      // Handle any exceptions that occur during login
      setError("An error occurred during login")
      console.error(err) // Log the error to the console for debugging
    } finally {
      // Regardless of success or failure, set loading state to false
      setIsLoading(false)
    }
  }

  return (
    <MainLayout>
      {" "}
      {/* Wrap the login page in the main layout */}
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Login</h1> {/* Page title */}
            <p className="text-gray-500">Enter your credentials to access your account</p> {/* Subtitle */}
            {/* Demo account information section */}
            <div className="mt-2 p-3 bg-gray-100 rounded-md text-sm">
              <p className="font-medium mb-1">Demo Accounts:</p>
              <p>
                <strong>User:</strong> user@example.com / password123
              </p>
              <p>
                <strong>Admin:</strong> admin@example.com / admin123
              </p>
            </div>
          </div>
          <div className="p-6">
            {/* Display error message if there is one */}
            {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">{error}</div>}

            {/* Login form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email input field */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="diwatapares@overcook.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state on change
                  required
                />
              </div>

              {/* Password input field with show/hide toggle */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"} // Toggle between text and password type
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state on change
                    required
                  />
                  {/* Button to toggle password visibility */}
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" /> // Show "hide" icon when password is visible
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" /> // Show "show" icon when password is hidden
                    )}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <Button
                type="submit"
                className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
                disabled={isLoading} // Disable button during login process
              >
                {isLoading ? "Logging in..." : "Log In"} {/* Change button text based on loading state */}
              </Button>

              {/* Sign up link */}
              <div className="text-center mt-4">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="font-medium underline">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

