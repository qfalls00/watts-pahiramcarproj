"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Link from "next/link" // For client-side navigation
import { useRouter } from "next/navigation" // For programmatic navigation
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component
import { Card, CardContent, CardHeader } from "@/components/ui/card" // Card components
import { Eye, EyeOff } from "lucide-react" // Icon components for password visibility
import { useAuth } from "@/components/auth/auth-provider" // Authentication hook

// Login page component
export default function Login() {
  // Get the router for programmatic navigation
  const router = useRouter()
  // Get the login function from auth context
  const { login } = useAuth()

  // State for form fields and UI state
  const [email, setEmail] = useState("") // Email input state
  const [password, setPassword] = useState("") // Password input state
  const [showPassword, setShowPassword] = useState(false) // Toggle password visibility
  const [isLoading, setIsLoading] = useState(false) // Loading state during login
  const [error, setError] = useState("") // Error message state

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault() // Prevent default form submission
    setError("") // Clear any previous errors
    setIsLoading(true) // Set loading state

    try {
      // Attempt to login with provided credentials
      const success = await login(email, password)

      if (success) {
        // The redirect will be handled in the useEffect in the Header component
        // based on the user role
        router.refresh() // Refresh the page to trigger the redirect
      } else {
        // Show error if login failed
        setError("Invalid email or password")
      }
    } catch (err) {
      // Handle any unexpected errors
      setError("An error occurred during login")
      console.error(err)
    } finally {
      // Reset loading state regardless of outcome
      setIsLoading(false)
    }
  }

  // Render the login form
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-gray-500">Enter your credentials to access your account</p>

          {/* Demo account information */}
          <div className="mt-2 p-3 bg-gray-100 rounded-md text-sm">
            <p className="font-medium mb-1">Demo Accounts:</p>
            <p>
              <strong>User:</strong> user@example.com / password123
            </p>
            <p>
              <strong>Admin:</strong> admin@example.com / admin123
            </p>
          </div>
        </CardHeader>
        <CardContent>
          {/* Show error message if there is one */}
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">{error}</div>}

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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password input field with show/hide toggle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>

            {/* Sign up link */}
            <div className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

