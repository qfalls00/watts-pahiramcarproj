"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import { Users, Gauge, Fuel } from "lucide-react" // Import icons from lucide-react

// Define the BookingModal component for creating a booking from a reservation
// Props: reservation (the reservation data), onClose (function to close the modal)
export default function BookingModal({ reservation, onClose }) {
  // State for form fields with default values
  const [renterName, setRenterName] = useState("Diwata Pares Overcook") // Renter's name
  const [contactNumber, setContactNumber] = useState("63912-345-6789") // Contact number
  const [licenseID, setLicenseID] = useState("1234 5678 9123") // Driver's license ID
  const [paymentMethod, setPaymentMethod] = useState("") // Selected payment method
  const [showPaymentDetails, setShowPaymentDetails] = useState(false) // Toggle for payment details section

  // Payment method specific states
  const [cardNumber, setCardNumber] = useState("") // Credit/debit card number
  const [nameOnCard, setNameOnCard] = useState("") // Name on card
  const [expiryDate, setExpiryDate] = useState("") // Card expiry date
  const [securityCode, setSecurityCode] = useState("") // Card security code
  const [cashAmount, setCashAmount] = useState("4500") // Cash amount

  // Function to handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value) // Update the payment method
    setShowPaymentDetails(true) // Show the payment details section
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    // In a real app, you would handle the form submission here
    onClose() // Close the modal after submission
  }

  // Function to render payment details based on selected payment method
  const renderPaymentDetails = () => {
    if (!showPaymentDetails) return null // Don't render anything if payment details shouldn't be shown

    if (paymentMethod === "cash") {
      // Render cash payment details
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Cash Amount</label>
            <div className="flex">
              <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-gray-100">₱</div>
              <input
                type="text"
                value={cashAmount}
                onChange={(e) => setCashAmount(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-r-md"
              />
            </div>
          </div>
        </div>
      )
    }

    if (paymentMethod === "debit" || paymentMethod === "credit") {
      // Render credit/debit card payment details
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 456"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name on Card</label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              placeholder="Diwata Pares Overcook"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="01/19"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Security Code</label>
              <input
                type="password"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                placeholder="* * *"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      )
    }

    return null // Return null for other payment methods or if none selected
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        {!showPaymentDetails ? (
          // First step: Booking details form
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column: Car details */}
            <div className="bg-gray-50 p-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cV89qyaPt8bPVAjfU9iC0hAgUQMBV4.png"
                alt="2016 Toyota Camry"
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

            {/* Right column: Booking form */}
            <div className="p-8">
              <div className="space-y-4">
                {/* Renter's name input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Renter's Full Name</label>
                  <input
                    type="text"
                    value={renterName}
                    onChange={(e) => setRenterName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {/* Contact number input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Number</label>
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {/* License ID input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Driver's License ID number</label>
                  <input
                    type="text"
                    value={licenseID}
                    onChange={(e) => setLicenseID(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {/* Valid ID image upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">Valid ID Image</label>
                  <button className="w-full px-3 py-2 border rounded-md">Upload Image</button>
                </div>

                {/* Signed contract image upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">Signed Contract Image</label>
                  <button className="w-full px-3 py-2 border rounded-md">Upload Image</button>
                </div>

                {/* Payment method selection */}
                <div>
                  <label className="block text-sm font-medium mb-1">Select Payment Method</label>
                  <select
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="cash">Cash</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
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
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-2 mt-6">
                  <button className="px-4 py-2 border rounded-md" onClick={onClose}>
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    onClick={() => setShowPaymentDetails(true)}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Second step: Payment details
          <div className="p-8">
            <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
            <div className="space-y-4">
              {/* Payment summary */}
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Amount Due</div>
                <div className="flex justify-between">
                  <span>₱ 4500 x 7 days</span>
                  <span className="font-bold">₱ 31,500.00</span>
                </div>
              </div>

              {/* Payment method selection */}
              <div>
                <label className="block text-sm font-medium mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {/* Render payment details based on selected method */}
              {renderPaymentDetails()}

              {/* Action buttons */}
              <div className="flex justify-end gap-2 mt-6">
                <button className="px-4 py-2 border rounded-md" onClick={() => setShowPaymentDetails(false)}>
                  Back
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" onClick={handleSubmit}>
                  Pay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

