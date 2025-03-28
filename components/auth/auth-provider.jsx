// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary React hooks and context API
import { createContext, useContext, useState, useEffect } from "react"

// Create a context for authentication data
// This will be used to share auth state across components
const AuthContext = createContext(undefined)

// Predefined accounts for demo purposes
// In a real application, these would come from a database
const DEMO_ACCOUNTS = [
  {
    id: "user1", // Unique identifier for the user
    name: "Diwata Pares", // User's display name
    email: "user@example.com", // User's email for login
    password: "password123", // User's password (would be hashed in a real app)
    role: "user", // User's role (regular user)
  },
  {
    id: "admin1", // Unique identifier for the admin
    name: "Admin User", // Admin's display name
    email: "admin@example.com", // Admin's email for login
    password: "admin123", // Admin's password (would be hashed in a real app)
    role: "admin", // Admin's role (administrator)
  },
]

// AuthProvider component that wraps the application to provide auth context
export function AuthProvider({ children }) {
  // State to store the currently logged in user
  const [user, setUser] = useState(null)
  // State to track if authentication is still loading
  const [isLoading, setIsLoading] = useState(true)

  // Effect hook to check if user is already logged in when the app loads
  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      // If user data exists in localStorage, parse and set it to state
      setUser(JSON.parse(storedUser))
    }
    // Set loading to false after checking
    setIsLoading(false)
  }, []) // Empty dependency array means this runs once on component mount

  // Function to handle user login
  const login = async (email, password) => {
    try {
      // Find matching account from demo accounts
      const account = DEMO_ACCOUNTS.find((acc) => acc.email === email && acc.password === password)

      // If no matching account is found, return false
      if (!account) {
        return false
      }

      // Create user object (without password for security)
      const loggedInUser = {
        id: account.id,
        name: account.name,
        email: account.email,
        role: account.role,
      }

      // Save to localStorage for persistence across page refreshes
      localStorage.setItem("user", JSON.stringify(loggedInUser))
      localStorage.setItem("isLoggedIn", "true")

      // Update state with the logged in user
      setUser(loggedInUser)
      return true
    } catch (error) {
      // Log any errors during login
      console.error("Login failed:", error)
      return false
    }
  }

  // Function to handle user logout
  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user")
    localStorage.removeItem("isLoggedIn")

    // Update state to reflect logged out status
    setUser(null)
  }

  // Provide the auth context value to all child components
  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth() {
  // Get the context value
  const context = useContext(AuthContext)
  // Throw an error if the hook is used outside of an AuthProvider
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  // Return the context value
  return context
}

