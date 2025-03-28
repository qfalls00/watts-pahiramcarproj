"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Link from "next/link" // For client-side navigation
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Users, Gauge, Fuel } from "lucide-react" // Icon components
import CarDetailsModal from "@/components/car-details-modal" // Car details modal component

// Sample car data for demonstration with different statuses
// In a real app, this would come from an API or database
const rentedCars = [
  {
    id: "1",
    name: "2016 Toyota Camry",
    type: "Sedan",
    price: 4500,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    image: "/placeholder.svg?height=225&width=400",
    status: "ongoing", // Currently rented
    returnDate: "May 05, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
  },
  {
    id: "2",
    name: "2016 Toyota Camry",
    type: "Sedan",
    price: 4500,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    image: "/placeholder.svg?height=225&width=400",
    status: "due", // Past due date
    returnDate: "May 05, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
  },
  {
    id: "3",
    name: "2016 Toyota Camry",
    type: "Sedan",
    price: 4500,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    image: "/placeholder.svg?height=225&width=400",
    status: "returned", // Already returned
    returnDate: "May 05, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
  },
]

// Rented cars page component
export default function RentedCars() {
  // State for selected car and modal visibility
  const [selectedCar, setSelectedCar] = useState(null) // Currently selected car
  const [showModal, setShowModal] = useState(false) // Modal visibility toggle

  // Function to handle showing car details
  const handleShowDetails = (car) => {
    setSelectedCar(car) // Set the selected car
    setShowModal(true) // Show the modal
  }

  // Function to get status badge based on car status
  const getStatusBadge = (status) => {
    switch (status) {
      case "ongoing":
        return (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            Return before {rentedCars[0].returnDate}
          </div>
        )
      case "due":
        return (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Return before {rentedCars[1].returnDate}
          </div>
        )
      case "returned":
        return (
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            Returned at {rentedCars[2].returnDate}
          </div>
        )
      default:
        return null
    }
  }

  // Function to get status text based on car status
  const getStatusText = (status) => {
    switch (status) {
      case "ongoing":
        return <span className="text-green-600 font-medium">Ongoing</span>
      case "due":
        return <span className="text-orange-600 font-medium">Due already</span>
      case "returned":
        return <span className="text-red-600 font-medium">With Penalty</span>
      default:
        return null
    }
  }

  // Render the rented cars page
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Back link */}
      <Link href="/cars" className="flex items-center text-gray-600 mb-6">
        ← Go back to the Available Cars
      </Link>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Rented Cars</h1>
        <p className="text-gray-600">Browse your ongoing rented cars</p>
      </div>

      {/* Rented cars grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through rented cars and render each as a card */}
        {rentedCars.map((car, index) => (
          <div key={index} className="border rounded-md overflow-hidden bg-white">
            {/* Car image with status badge */}
            <div className="relative">
              {getStatusBadge(car.status)}
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
                  <Fuel className="h-5 w-5 mb-1" />
                  <span className="text-xs">{car.fuel}</span>
                </div>
              </div>

              {/* Status and details button */}
              <div className="flex justify-between items-center mb-4">
                {getStatusText(car.status)}
                <Button variant="outline" onClick={() => handleShowDetails(car)}>
                  Details
                </Button>
              </div>
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

