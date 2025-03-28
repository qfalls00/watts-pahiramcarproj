// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary hooks and components
import { useState } from "react" // For state management
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component
import { Textarea } from "@/components/ui/textarea" // UI textarea component
import { ChevronUp, ChevronDown } from "lucide-react" // Icon components

// Edit car modal component
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
    e.preventDefault() // Prevent default form submission
    // In a real app, you would handle the form submission here
    onClose() // Close the modal
  }

  // Render the edit car modal
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Car Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Car image and basic details section */}
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center">
              <div className="w-full">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-VwQSBPTz8x4XO1ChoBaMjIauhcKlvP.png"
                    alt={car.name}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Car Name</label>
                    <Input value={carName} onChange={(e) => setCarName(e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Car Type</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right"
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                    >
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="luxury">Luxury</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Transmission Type</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right"
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                    >
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                            size="icon"
                            className="h-6 rounded-none rounded-tr-md border-b"
                            onClick={() => setSeats(seats + 1)}
                          >
                            <ChevronUp className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 rounded-none rounded-br-md"
                            onClick={() => setSeats(Math.max(1, seats - 1))}
                          >
                            <ChevronDown className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

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
                            size="icon"
                            className="h-6 rounded-none rounded-tr-md border-b"
                            onClick={() => setPrice(price + 1)}
                          >
                            <ChevronUp className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 rounded-none rounded-br-md"
                            onClick={() => setPrice(Math.max(1, price - 1))}
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

            {/* Additional details section */}
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Year</label>
                  <Input value={year} onChange={(e) => setYear(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Plate Number</label>
                  <Input value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>

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
    </div>
  )
}

