"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary components
import { Button } from "@/components/ui/button" // UI button component
import Image from "next/image" // For optimized image loading
import { Calendar, Users, Gauge } from "lucide-react" // Icon components

// Car details modal component
// Props: car (the car data to display), onClose (function to close the modal), onReserve (function to handle reservation)
export default function CarDetailsModal({ car, onClose, onReserve }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
        {/* Car image with availability badge */}
        <div className="relative">
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">Available</div>
          <Image
            src={car.image || "/placeholder.svg?height=450&width=800"}
            alt={car.name}
            width={800}
            height={450}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-6">
          {/* Car name, type, and price */}
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

          {/* Car features */}
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

          {/* Car description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">3 days</h3>
            <p className="text-gray-700">{car.description}</p>
          </div>

          {/* Action buttons */}
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

