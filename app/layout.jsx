import { Inter } from "next/font/google"
// Import global CSS styles that apply to the entire application
import "./globals.css"
// Import the Header component that appears on all pages
import Header from "@/components/header"
// Import the ThemeProvider component for dark/light mode functionality
import { ThemeProvider } from "@/components/theme-provider"
// Import the AuthProvider for user authentication state management
import { AuthProvider } from "@/components/auth/auth-provider"

// Initialize the Inter font with Latin character subset
// This creates a font object that can be applied to elements
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the application (used for SEO and browser tabs)
export const metadata = {
  title: "PahiramCar - Car Rental Service", // Title that appears in browser tabs
  description: "Rent your perfect car today with PahiramCar", // Description for search engines
  generator: "pahiramcar", // Generator tag indicating the platform
}

// Root layout component that wraps all pages in the application
// This is a server component by default in Next.js App Router
export default function RootLayout({ children }) {
  return (
    // HTML element with language set to English
    // suppressHydrationWarning prevents errors when server and client rendering differ
    <html lang="en" suppressHydrationWarning>
      {/* Body element with the Inter font class applied */}
      <body className={inter.className}>
        {/* AuthProvider wraps the app to provide authentication context to all components */}
        <AuthProvider>
          {/* ThemeProvider enables theme switching with default theme set to light */}
          <ThemeProvider attribute="class" defaultTheme="light">
            {/* Global header component for navigation */}
            <Header />
            {/* Main content area that will contain page-specific content */}
            <main>{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'