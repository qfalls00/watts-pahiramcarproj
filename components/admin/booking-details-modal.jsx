// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary hooks and components
import { useState } from "react" // For state management
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component
import { Users, Gauge, Fuel } from "lucide-react" // Icon components
import ImagePreviewModal from "./image-preview-modal" // Image preview modal component

// Booking details modal component
export default function BookingDetailsModal({ booking, onClose }) {
  // State for image preview modal
  const [showImagePreview, setShowImagePreview] = useState(false) // Image preview modal visibility
  const [previewImageUrl, setPreviewImageUrl] = useState(null) // URL of image to preview

  // Function to handle image click for preview
  const handleImageClick = (imageUrl) => {
    setPreviewImageUrl(imageUrl) // Set the image URL to preview
    setShowImagePreview(true) // Show the image preview modal
  }

  // Function to get status badge based on booking status
  const getStatusBadge = (status) => {
    switch (status) {
      case "ongoing":
        return <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-600 text-white">Ongoing</span>
      case "due":
        return <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600 text-white">Due already</span>
      case "completed":
        return <span className="px-3 py-1 text-xs font-medium rounded-full bg-black text-white">Completed</span>
      default:
        return null
    }
  }

  // Render the booking details modal
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Bookings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Car details section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-trsUKF4qqlNNV91kgNJjP26UEgemr5.png"
                  alt="2016 Toyota Camry"
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover mb-4"
                />

                <h3 className="text-xl font-bold">2016 Toyota Camry</h3>
                <p className="text-sm text-gray-500 mb-4">Sedan</p>

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

              {/* Renter details section */}
              <div>
                <div className="space-y-4">
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
                    <div
                      className="p-2 border rounded bg-gray-50 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleImageClick(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-dLFCw7n2MsemWSA6KOLJqXxDHYocid.png",
                        )
                      }
                    >
                      validIDimage.jpeg
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Signed Contract Image</label>
                    <div
                      className="p-2 border rounded bg-gray-50 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleImageClick(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-dLFCw7n2MsemWSA6KOLJqXxDHYocid.png",
                        )
                      }
                    >
                      signedcontract.jpeg
                    </div>
                  </div>

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

                  <div className="flex justify-end mt-6">
                    <Button className="bg-black text-white hover:bg-gray-800" onClick={onClose}>
                      Go Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {showImagePreview && <ImagePreviewModal imageUrl={previewImageUrl} onClose={() => setShowImagePreview(false)} />}
    </>
  )
}

