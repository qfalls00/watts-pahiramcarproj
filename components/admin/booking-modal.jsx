// Mark this component as a client component to enable client-side interactivity
"use client"

// Import necessary hooks and components
import { useState } from "react" // For state management
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component
import { Users, Gauge, Fuel } from "lucide-react" // Icon components

// Booking modal component
export default function BookingModal({ reservation, onClose }) {
  // State for form fields
  const [renterName, setRenterName] = useState(() => "Diwata Pares Overcook") // Renter's name
  const [contactNumber, setContactNumber] = useState(() => "63912-345-6789") // Contact number
  const [licenseID, setLicenseID] = useState(() => "1234 5678 9123") // License ID
  const [startDate, setStartDate] = useState(() => "01/24/2024 10:00 AM") // Start date
  const [endDate, setEndDate] = useState(() => "01/24/2024 10:00 AM") // End date
  const [paymentMethod, setPaymentMethod] = useState(() => "") // Payment method
  const [validIDImage, setValidIDImage] = useState(() => null) // Valid ID image
  const [contractImage, setContractImage] = useState(() => null) // Contract image

  // Function to handle proceeding to payment
  const handleProceed = () => {
    // In a real app, you would handle the booking process here
    onClose()
  }

  // Render the booking modal
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Car details section */}
          <div className="bg-gray-50 p-6">
            <div className="w-full h-48 mb-4 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=225&width=400"
                alt="2016 Toyota Camry"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold">2016 Toyota Camry</h3>
            <p className="text-sm text-gray-500 mb-4">Sedan</p>

            <div className="flex justify-between mb-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">4 Seats</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <Gauge className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">Automatic</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <Fuel className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">Gasoline</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Plate Number</span>
                <span>DIWATA009</span>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Start Date & Time</label>
                <Input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-center my-2">
                <span className="text-sm">to</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">End Date & Time</label>
                <Input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full" />
              </div>
            </div>
          </div>

          {/* Booking form section */}
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Renter's Full Name</label>
                <Input value={renterName} onChange={(e) => setRenterName(e.target.value)} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <Input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Driver's License ID number</label>
                <Input value={licenseID} onChange={(e) => setLicenseID(e.target.value)} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">License Image</label>
                <Button variant="outline" className="w-full">
                  Upload Image
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Signed Contract Image</label>
                <Button variant="outline" className="w-full">
                  Upload Image
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select Payment Method</label>
                <select
                  className="w-full px-3 py-2 border rounded-md"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="debit">Debit Card</option>
                  <option value="credit">Credit Card</option>
                </select>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600 italic">Amount Due</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>₱ 4500 x 7 days</span>
                    <span className="font-bold">₱ 31,500.00</span>
                  </div>
                  {paymentMethod && (
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span>Payment Method</span>
                      <span className="capitalize">{paymentMethod}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleProceed}>
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

