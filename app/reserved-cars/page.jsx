"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Link from "next/link" // For client-side navigation
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Calendar, Users, Gauge } from "lucide-react" // Icon components
import CarDetailsModal from "@/components/car-details-modal" // Car details modal component

// Sample car data for demonstration
// In a real app, this would come from an API or database
const reservedCars = Array(3).fill({
  id: "1",
  name: "2016 Toyota Camry",
  type: "Sedan",
  price: 4500,
  seats: 4,
  transmission: "Automatic",
  fuel: "Gasoline",
  image: "/placeholder.svg?height=225&width=400",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
})

// Reserved cars page component
export default function ReservedCars() {
  // State for selected car and modal visibility
  const [selectedCar, setSelectedCar] = useState(null) // Currently selected car
  const [showModal, setShowModal] = useState(false) // Modal visibility toggle

  // Function to handle showing car details
  const handleShowDetails = (car) => {
    setSelectedCar(car) // Set the selected car
    setShowModal(true) // Show the modal
  }

  // Render the reserved cars page
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Back link */}
      <Link href="/cars" className="flex items-center text-gray-600 mb-6">
        ← Go back to the Available Cars
      </Link>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Reserved Cars</h1>
        <p className="text-gray-600">Browse your reserved cars</p>
      </div>

      {/* Reserved cars grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through reserved cars and render each as a card */}
        {reservedCars.map((car, index) => (
          <div key={index} className="border rounded-md overflow-hidden bg-white">
            {/* Car image with availability badge */}
            <div className="relative">
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">Available</div>
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              {/* Car name, type, and price */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{car.name}</h3>
                <div className="text-right">
                  <div className="font-bold">₱ {car.price}</div>
                  <div className="text-xs text-gray-500">per day</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{car.type}</p>

              {/* Car features */}
              <div className="flex justify-between mb-4">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 mb-1" />
                  <span className="text-xs">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center">
                  <Gauge className="h-5 w-5 mb-1" />
                  <span className="text-xs">{car.transmission}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="h-5 w-5 mb-1" />
                  <span className="text-xs">{car.fuel}</span>
                </div>
              </div>

              {/* Details button */}
              <Button variant="outline" className="w-full" onClick={() => handleShowDetails(car)}>
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Car Details Modal - only rendered when showModal is true and a car is selected */}
      {showModal && selectedCar && (
        <CarDetailsModal car={selectedCar} onClose={() => setShowModal(false)} onReserve={() => setShowModal(false)} />
      )}
    </div>
  )
}

