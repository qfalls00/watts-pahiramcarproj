"use client" // Indicates this is a client-side component that uses client-side features

import { Users, Gauge, Fuel } from "lucide-react" // Import icons from lucide-react

// Define the BookingDetailsModal component for viewing booking details
// Props: booking (the booking data), onClose (function to close the modal)
export default function BookingDetailsModal({ booking, onClose }) {
  // Function to generate status badge based on booking status
  const getStatusBadge = (status) => {
    switch (status) {
      case "ongoing":
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Ongoing</span>
      case "due":
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Due already</span>
      case "completed":
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-900 text-white">Completed</span>
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column: Car details */}
          <div className="bg-gray-50 p-8">
            <img
              src="/placeholder.svg?height=225&width=400"
              alt={booking.car}
              className="w-full h-48 object-cover mb-4"
            />

            <h3 className="text-xl font-bold">2016 Toyota Camry</h3>
            <p className="text-sm text-gray-500 mb-4">Sedan</p>

            {/* Car features */}
            <div className="flex justify-between mb-4">
              <div className="flex flex-col items-center">
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs">4 Seats</span>
              </div>
              <div className="flex flex-col items-center">
                <Gauge className="h-5 w-5 mb-1" />
                <span className="text-xs">Automatic</span>
              </div>
              <div className="flex flex-col items-center">
                <Fuel className="h-5 w-5 mb-1" />
                <span className="text-xs">Gasoline</span>
              </div>
            </div>

            {/* Car details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Plate Number</span>
                <span>DIWATA009</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Start Date & Time</span>
                <span>01/24/2024 10:00 AM</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">End Date & Time</span>
                <span>01/24/2024 10:00 AM</span>
              </div>
            </div>
          </div>

          {/* Right column: Booking details */}
          <div className="p-8">
            <div className="space-y-4">
              {/* Renter's information (read-only) */}
              <div>
                <label className="block text-sm font-medium mb-1">Renter's Full Name</label>
                <div className="p-2 border rounded bg-gray-50">Diwata Pares Overcook</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <div className="p-2 border rounded bg-gray-50">63912-345-6789</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Driver's License ID number</label>
                <div className="p-2 border rounded bg-gray-50">1234 5678 9123</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Valid ID Image</label>
                <div className="p-2 border rounded bg-gray-50">validIDimage.jpeg</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Signed Contract Image</label>
                <div className="p-2 border rounded bg-gray-50">signedcontract.jpeg</div>
              </div>

              {/* Booking summary */}
              <div className="mt-6 p-4 border rounded-md bg-gray-50">
                <h4 className="font-medium mb-2">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount Due</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₱ 4500 x 7 days</span>
                    <span className="font-bold">₱ 31,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span>Cash</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Status</span>
                    {getStatusBadge(booking.status)}
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="flex justify-end gap-2 mt-6">
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" onClick={onClose}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

