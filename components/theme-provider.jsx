// Mark this component as a client component to enable client-side interactivity
"use client"
// Import the ThemeProvider from next-themes and rename it to NextThemesProvider
// This is to avoid naming conflicts with our own ThemeProvider component
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Create a wrapper component for the NextThemesProvider
// This component handles theme switching functionality (light/dark mode)
export function ThemeProvider({ children, ...props }) {
  return (
    // NextThemesProvider is the actual theme provider from next-themes
    // enableSystem={false} prevents the system preference check which can cause hydration errors
    // {...props} passes all other props to NextThemesProvider (like attribute and defaultTheme)
    <NextThemesProvider {...props} enableSystem={false}>
      {/* Render all child components with theme context */}
      {children}
    </NextThemesProvider>
  )
}

