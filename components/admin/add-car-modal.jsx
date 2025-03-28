"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function AddCarModal({ onClose }) {
  const [carName, setCarName] = useState("Car ni Diwata")
  const [carType, setCarType] = useState("")
  const [transmission, setTransmission] = useState("")
  const [fuelType, setFuelType] = useState("")
  const [seats, setSeats] = useState(3)
  const [price, setPrice] = useState(3)
  const [plateNumber, setPlateNumber] = useState("DIWATA009")
  const [year, setYear] = useState("2024")
  const [description, setDescription] = useState("")
  const [carImage, setCarImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would handle the form submission here
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 p-6">
            <div className="mb-4 flex items-center justify-center h-48 bg-gray-100 rounded-lg">
              {carImage ? (
                <Image
                  src={carImage || "/placeholder.svg"}
                  alt="Car Preview"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-ZBnprZGHkE5q7CjxhXtOCsQmiQYVZf.png"
                  alt="Car Preview"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Car Name</label>
                <Input value={carName} onChange={(e) => setCarName(e.target.value)} placeholder="Car ni Diwata" />
              </div>

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

          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <Input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2024" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Plate Number</label>
                <Input value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} placeholder="DIWATA009" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter short description here"
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSubmit}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

