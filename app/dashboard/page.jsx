"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useEffect } from "react" // For side effects
import { useRouter } from "next/navigation" // For programmatic navigation
import { useAuth } from "@/components/auth/auth-provider" // Authentication hook
import { Card } from "@/components/ui/card" // UI card component
import { Button } from "@/components/ui/button" // UI button component
import Link from "next/link" // For client-side navigation
import { Car, Calendar } from "lucide-react" // Icon components

// User dashboard page component
export default function UserDashboard() {
  // Get the router for programmatic navigation
  const router = useRouter()
  // Get authentication state
  const { user, isLoading } = useAuth()

  // Effect to handle authentication state changes
  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!isLoading && !user) {
      router.push("/login")
    }
    // If not loading and user is admin, redirect to admin dashboard
    else if (!isLoading && user?.role === "admin") {
      router.push("/admin")
    }
  }, [user, isLoading, router]) // Re-run when these dependencies change

  // Show loading state while checking authentication
  if (isLoading || !user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  // Render the user dashboard
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600">Welcome back, Diwata Pares</p>
      </div>

      {/* Dashboard cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Browse cars card */}
        <Card className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Browse Cars</h3>
            </div>
            <p className="text-gray-600 mb-4">Explore our wide selection of vehicles for any occasion.</p>
            <Link href="/cars">
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-md">Browse Cars</Button>
            </Link>
          </div>
        </Card>

        {/* My reservations card */}
        <Card className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <h3 className="text-lg font-semibold">My Reservations</h3>
            </div>
            <p className="text-gray-600 mb-4">View and manage your current car reservations.</p>
            <Link href="/reserved-cars">
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-md">View Reservations</Button>
            </Link>
          </div>
        </Card>

        {/* My rented cars card */}
        <Card className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <h3 className="text-lg font-semibold">My Rented Cars</h3>
            </div>
            <p className="text-gray-600 mb-4">View your currently rented and past rental cars.</p>
            <Link href="/rented-cars">
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-md">View Rented Cars</Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Recent activity section */}
      <div className="bg-white border rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-500">You have no recent activity.</p>
      </div>
    </div>
  )
}

