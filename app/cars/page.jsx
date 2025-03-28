"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Checkbox } from "@/components/ui/checkbox" // UI checkbox component
import { Input } from "@/components/ui/input" // UI input component
import { Label } from "@/components/ui/label" // UI label component
import { Calendar, Users, Gauge } from "lucide-react" // Icon components
import CarDetailsModal from "@/components/car-details-modal" // Car details modal component

// Sample car data for demonstration
// In a real app, this would come from an API or database
const carData = Array(6).fill({
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

// Cars page component
export default function Cars() {
  // State for selected car and modal visibility
  const [selectedCar, setSelectedCar] = useState(null) // Currently selected car
  const [showModal, setShowModal] = useState(false) // Modal visibility toggle

  // Function to handle showing car details
  const handleShowDetails = (car) => {
    setSelectedCar(car) // Set the selected car
    setShowModal(true) // Show the modal
  }

  // Function to handle car reservation
  const handleReserve = (car) => {
    // In a real app, you would handle the reservation here
    alert(`Car ${car.name} reserved successfully!`)
  }

  // Render the cars page
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header with title and calendar icon */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Available Cars</h1>
          <p className="text-gray-600">Browse our selection of cars for rent</p>
        </div>
        <div>
          <Image src="/placeholder.svg" alt="Calendar" width={40} height={40} className="border rounded-md p-2" />
        </div>
      </div>

      {/* Main content with filters and car listings */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 bg-gray-50 p-4 rounded-md">
          {/* Car type filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Car Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="suv" />
                <Label htmlFor="suv" className="ml-2">
                  SUV
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="sedan" />
                <Label htmlFor="sedan" className="ml-2">
                  Sedan
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="hatchback" />
                <Label htmlFor="hatchback" className="ml-2">
                  Hatchback
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="luxury" />
                <Label htmlFor="luxury" className="ml-2">
                  Luxury
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="sports" />
                <Label htmlFor="sports" className="ml-2">
                  Sports
                </Label>
              </div>
            </div>
          </div>

          {/* Transmission filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Transmission</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="automatic" />
                <Label htmlFor="automatic" className="ml-2">
                  Automatic
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="manual" />
                <Label htmlFor="manual" className="ml-2">
                  Manual
                </Label>
              </div>
            </div>
          </div>

          {/* Fuel type filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Fuel Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="gasoline" />
                <Label htmlFor="gasoline" className="ml-2">
                  Gasoline
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="diesel" />
                <Label htmlFor="diesel" className="ml-2">
                  Diesel
                </Label>
              </div>
            </div>
          </div>

          {/* Seats filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Seats</h3>
            <div className="flex items-center gap-2">
              <Input id="min-seats" placeholder="Min" className="w-20" />
              <span>-</span>
              <Input id="max-seats" placeholder="Max" className="w-20" />
            </div>
          </div>

          {/* Price range filter */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center gap-2">
              <span>₱</span>
              <Input id="min-price" placeholder="Min" className="w-20" />
              <span>-</span>
              <span>₱</span>
              <Input id="max-price" placeholder="Max" className="w-20" />
            </div>
          </div>
        </div>

        {/* Car listings grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through car data and render each as a card */}
          {carData.map((car, index) => (
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

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => handleShowDetails(car)}>
                    Details
                  </Button>
                  <Button className="flex-1 bg-black text-white hover:bg-gray-800" onClick={() => handleReserve(car)}>
                    Reserve
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Details Modal - only rendered when showModal is true and a car is selected */}
      {showModal && selectedCar && (
        <CarDetailsModal
          car={selectedCar}
          onClose={() => setShowModal(false)}
          onReserve={() => {
            handleReserve(selectedCar)
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

