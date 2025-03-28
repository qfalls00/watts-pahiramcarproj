"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Calendar, Users, Gauge } from "lucide-react"
import MainLayout from "../layouts/MainLayout"

// Sample car data
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

function CarDetailsModal({ car, onClose, onReserve }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
        <div className="relative">
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">Available</div>
          <img
            src={car.image || "/placeholder.svg?height=450&width=800"}
            alt={car.name}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{car.name}</h2>
                <p className="text-gray-500">{car.type}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">₱ {car.price}</div>
                <div className="text-sm text-gray-500">per day</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{car.fuel}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">3 days</h3>
            <p className="text-gray-700">{car.description}</p>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
            <Button className="flex-1 bg-black text-white hover:bg-gray-800" onClick={onReserve}>
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cars() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleShowDetails = (car) => {
    setSelectedCar(car)
    setShowModal(true)
  }

  const handleReserve = (car) => {
    // In a real app, you would handle the reservation here
    alert(`Car ${car.name} reserved successfully!`)
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Available Cars</h1>
            <p className="text-gray-600">Browse our selection of cars for rent</p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="Calendar" width={40} height={40} className="border rounded-md p-2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 bg-gray-50 p-4 rounded-md">
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

            <div className="mb-6">
              <h3 className="font-medium mb-2">Seats</h3>
              <div className="flex items-center gap-2">
                <Input id="min-seats" placeholder="Min" className="w-20" />
                <span>-</span>
                <Input id="max-seats" placeholder="Max" className="w-20" />
              </div>
            </div>

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

          {/* Car listings */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carData.map((car, index) => (
              <div key={index} className="border rounded-md overflow-hidden bg-white">
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">Available</div>
                  <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold">{car.name}</h3>
                    <div className="text-right">
                      <div className="font-bold">₱ {car.price}</div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{car.type}</p>

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

        {/* Car Details Modal */}
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
    </MainLayout>
  )
}

