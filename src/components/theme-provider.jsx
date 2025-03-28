"use client" // Indicates this is a client-side component that uses client-side features

import { createContext, useContext, useEffect, useState } from "react" // Import necessary React hooks and context API

// Create a context for theme data
// This will be used to share theme state across components
const ThemeContext = createContext(undefined)

// ThemeProvider component that wraps the application to provide theme context
// Props: children (React nodes), defaultTheme (initial theme), storageKey (localStorage key)
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme" }) {
  // State to store the current theme with initial value from localStorage or defaultTheme
  const [theme, setTheme] = useState(() => {
    // Try to get theme from localStorage first
    const storedTheme = localStorage.getItem(storageKey)
    // Return stored theme if it exists, otherwise use defaultTheme
    return storedTheme || defaultTheme
  })

  // Effect hook to apply theme changes to the document
  useEffect(() => {
    // Get the root HTML element
    const root = window.document.documentElement

    // Remove any existing theme classes
    root.classList.remove("light", "dark")

    // If theme is set to "system", use the system preference
    if (theme === "system") {
      // Check if system prefers dark mode
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      // Apply the system theme
      root.classList.add(systemTheme)
    } else {
      // Apply the selected theme
      root.classList.add(theme)
    }

    // Save the theme to localStorage for persistence
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey]) // Re-run when theme or storageKey changes

  // Create the context value object
  const value = {
    theme, // Current theme
    setTheme: (newTheme) => setTheme(newTheme), // Function to update theme
  }

  // Provide the theme context value to all child components
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export const useTheme = () => {
  // Get the context value
  const context = useContext(ThemeContext)
  // Throw an error if the hook is used outside of a ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  // Return the context value
  return context
}

