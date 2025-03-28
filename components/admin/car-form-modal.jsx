"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component
import { Textarea } from "@/components/ui/textarea" // UI textarea component
import { ChevronUp, ChevronDown } from "lucide-react" // Icon components for incrementing/decrementing

// Car form modal component for adding or editing cars
// Props: car (car data for editing, optional), isEdit (boolean to determine if editing),
// onClose (function to close modal), onSave (function to save changes)
export default function CarFormModal({ car, isEdit = false, onClose, onSave }) {
  // State for form fields with default values or values from car prop
  const [carName, setCarName] = useState(car?.name || "Car ni Diwata") // Car name
  const [carType, setCarType] = useState(car?.type?.toLowerCase() || "") // Car type
  const [transmission, setTransmission] = useState(car?.transmission?.toLowerCase() || "") // Transmission type
  const [fuelType, setFuelType] = useState(car?.fuel?.toLowerCase() || "") // Fuel type
  const [seats, setSeats] = useState(car?.seats || 3) // Number of seats
  const [price, setPrice] = useState(car?.price || 3) // Price per day
  const [plateNumber, setPlateNumber] = useState(car?.plateNumber || "DIWATA009") // Plate number
  const [year, setYear] = useState(car?.year || "2024") // Year
  const [description, setDescription] = useState(car?.description || "") // Description
  const [carImage, setCarImage] = useState(
    car?.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-ZVwQBWhyKSqELzA36dx1DjrGF3sdr9.png",
  ) // Car image URL

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior

    // Call the onSave function with the form data
    onSave &&
      onSave({
        name: carName,
        type: carType,
        transmission,
        fuel: fuelType,
        seats,
        price,
        plateNumber,
        year,
        description,
        image: carImage,
      })

    // Close the modal
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Car Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column: Car image and basic details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Car image preview */}
              <div className="mb-4">
                <Image
                  src={carImage || "/placeholder.svg"}
                  alt="Car Preview"
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Image upload button */}
              <Button variant="outline" className="w-full mb-4">
                Upload Image
              </Button>

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
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="">Select Car Type</option>
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
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                  >
                    <option value="">Select Transmission Type</option>
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
                          size="icon"
                          className="h-6 rounded-none rounded-tr-md border-b"
                          onClick={() => setSeats(seats + 1)} // Increment seats
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
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
                          size="icon"
                          className="h-6 rounded-none rounded-tr-md border-b"
                          onClick={() => setPrice(price + 1)} // Increment price
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
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

            {/* Right column: Additional details */}
            <div>
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
                    placeholder="Enter short description here"
                    className="min-h-[150px]"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-2 mt-6">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSubmit}>
                    {isEdit ? "Save Changes" : "Add"} {/* Button text changes based on isEdit prop */}
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

