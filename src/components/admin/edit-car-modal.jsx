"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import { Button } from "../ui/button" // Import Button UI component
import { Input } from "../ui/input" // Import Input UI component
import { Textarea } from "../ui/textarea" // Import Textarea UI component
import { ChevronUp, ChevronDown } from "lucide-react" // Import icon components

// Define the EditCarModal component for editing an existing car
// Props: car (the car data to edit), onClose (function to close the modal)
export default function EditCarModal({ car, onClose }) {
  // State for form fields initialized with car data
  const [carName, setCarName] = useState(car.name) // Car name
  const [carType, setCarType] = useState(car.type.toLowerCase()) // Car type
  const [transmission, setTransmission] = useState(car.transmission.toLowerCase()) // Transmission type
  const [fuelType, setFuelType] = useState(car.fuel.toLowerCase()) // Fuel type
  const [seats, setSeats] = useState(car.seats) // Number of seats
  const [price, setPrice] = useState(car.price) // Price per day
  const [plateNumber, setPlateNumber] = useState(car.plateNumber) // Plate number
  const [year, setYear] = useState("2024") // Year
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ) // Description

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    // In a real app, you would handle the form submission here
    onClose() // Close the modal after submission
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column: Car image and basic details */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs">
              {/* Car image preview */}
              <img
                src={car.image || "/placeholder.svg?height=225&width=400"}
                alt={car.name}
                className="w-full h-48 object-cover mb-4"
              />

              {/* Car details form */}
              <div className="space-y-4">
                {/* Car name input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Car Name</label>
                  <Input value={carName} onChange={(e) => setCarName(e.target.value)} />
                </div>

                {/* Car type select */}
                <div>
                  <label className="block text-sm font-medium mb-1">Car Type</label>
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="luxury">Luxury</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>

                {/* Transmission type select */}
                <div>
                  <label className="block text-sm font-medium mb-1">Transmission Type</label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>

                {/* Seats and price inputs with increment/decrement buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Seats input */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Number of Seats</label>
                    <div className="flex">
                      <Input
                        type="number"
                        value={seats}
                        onChange={(e) => setSeats(Number.parseInt(e.target.value))}
                        className="rounded-r-none"
                      />
                      <div className="flex flex-col border border-l-0 rounded-r-md">
                        <Button
                          variant="ghost"
                          className="h-6 rounded-none rounded-tr-md border-b"
                          onClick={() => setSeats(seats + 1)} // Increment seats
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="h-6 rounded-none rounded-br-md"
                          onClick={() => setSeats(Math.max(1, seats - 1))} // Decrement seats (minimum 1)
                        >
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Price input */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Price per day</label>
                    <div className="flex">
                      <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-gray-100">
                        ₱
                      </div>
                      <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number.parseInt(e.target.value))}
                        className="rounded-l-none"
                      />
                      <div className="flex flex-col border border-l-0 rounded-r-md">
                        <Button
                          variant="ghost"
                          className="h-6 rounded-none rounded-tr-md border-b"
                          onClick={() => setPrice(price + 1)} // Increment price
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="h-6 rounded-none rounded-br-md"
                          onClick={() => setPrice(Math.max(1, price - 1))} // Decrement price (minimum 1)
                        >
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Additional details */}
          <div className="p-8">
            <div className="space-y-4">
              {/* Year input */}
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <Input value={year} onChange={(e) => setYear(e.target.value)} />
              </div>

              {/* Plate number input */}
              <div>
                <label className="block text-sm font-medium mb-1">Plate Number</label>
                <Input value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
              </div>

              {/* Description textarea */}
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

