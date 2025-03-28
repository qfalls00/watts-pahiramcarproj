"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Link from "next/link" // For client-side navigation
import { useRouter } from "next/navigation" // For programmatic navigation
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component
import { Card, CardContent, CardHeader } from "@/components/ui/card" // Card components
import { Eye, EyeOff } from "lucide-react" // Icon components for password visibility

// Signup page component
export default function Signup() {
  // Get the router for programmatic navigation
  const router = useRouter()

  // State for form fields and UI state
  const [fullName, setFullName] = useState("") // Full name input state
  const [email, setEmail] = useState("") // Email input state
  const [password, setPassword] = useState("") // Password input state
  const [confirmPassword, setConfirmPassword] = useState("") // Confirm password input state
  const [showPassword, setShowPassword] = useState(false) // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) // Toggle confirm password visibility
  const [isLoading, setIsLoading] = useState(false) // Loading state during signup
  const [error, setError] = useState("") // Error message state

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault() // Prevent default form submission behavior

    // In a real app, you would validate and create account here
    // For this demo, we'll just redirect to the login page
    router.push("/login")
  }

  // Render the signup form
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-gray-500">Enter your information to create an account</p>

          {/* Demo account information */}
          <div className="mt-2 p-3 bg-gray-100 rounded-md text-sm">
            <p>For this demo, please use the pre-configured accounts:</p>
            <p>
              <strong>User:</strong> user@example.com / password123
            </p>
            <p>
              <strong>Admin:</strong> admin@example.com / admin123
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full name input field */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="font-medium">
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Diwata Pares"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

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
              <label htmlFor="password" className="font-medium">
                Password
              </label>
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

            {/* Confirm password input field with show/hide toggle */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Signup button */}
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Sign up
            </Button>

            {/* Login link */}
            <div className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="font-medium underline">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

