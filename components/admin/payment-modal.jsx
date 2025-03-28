"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component

// Payment modal component
// Props: booking (the booking data), onClose (function to close the modal)
export default function PaymentModal({ booking, onClose }) {
  // State for payment form
  const [paymentMethod, setPaymentMethod] = useState("") // Payment method
  const [cashAmount, setCashAmount] = useState("4500") // Cash amount
  const [cardNumber, setCardNumber] = useState("") // Card number
  const [nameOnCard, setNameOnCard] = useState("") // Name on card
  const [expiryDate, setExpiryDate] = useState("") // Expiry date
  const [securityCode, setSecurityCode] = useState("") // Security code
  const [showCardDetails, setShowCardDetails] = useState(false) // Toggle for card details form

  // Function to handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value) // Update payment method
    // Show card details form if credit or debit card is selected
    if (e.target.value === "debit" || e.target.value === "credit") {
      setShowCardDetails(true)
    } else {
      setShowCardDetails(false)
    }
  }

  // Function to handle payment submission
  const handlePay = () => {
    // In a real app, you would process the payment here
    onClose() // Close the modal
  }

  // Render the payment modal
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-auto">
        <div className="p-6">
          {!showCardDetails ? (
            <>
              {/* Payment summary */}
              <div className="mb-6">
                <h2 className="text-xl font-bold">Booking Summary</h2>
                <div className="mt-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600 italic">Amount Due</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>₱ 4500 x 7 days</span>
                    <span className="font-bold">₱ 31,500.00</span>
                  </div>
                </div>
              </div>

              {/* Payment method selection */}
              <div className="mb-6">
                <label className="block mb-2">Select Payment Method</label>
                <select
                  className="w-full px-3 py-2 border rounded-md"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="debit">Debit Card</option>
                  <option value="credit">Credit Card</option>
                </select>
              </div>

              {/* Cash payment form - only shown when cash is selected */}
              {paymentMethod === "cash" && (
                <div className="mb-6">
                  <label className="block mb-2">Cash Amount</label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-gray-100">
                      ₱
                    </div>
                    <input
                      type="text"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-r-md"
                    />
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex justify-end">
                <Button
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={paymentMethod === "cash" ? handlePay : () => setShowCardDetails(true)}
                >
                  Pay
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Card payment form - shown when card details should be displayed */}
              <div className="mb-6">
                <h2 className="text-xl font-bold">Booking Summary</h2>
                <div className="mt-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600 italic">Amount Due</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>₱ 4500 x 7 days</span>
                    <span className="font-bold">₱ 31,500.00</span>
                  </div>
                </div>
              </div>

              {/* Card number input */}
              <div className="mb-4">
                <label className="block mb-2">Card Number</label>
                <Input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 456"
                />
              </div>

              {/* Name on card input */}
              <div className="mb-4">
                <label className="block mb-2">Name on Card</label>
                <Input
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="Diwata Pares Overcook"
                />
              </div>

              {/* Expiry date and security code inputs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2">Expiry Date</label>
                  <Input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="01/19"
                  />
                </div>
                <div>
                  <label className="block mb-2">Security Code</label>
                  <Input
                    type="password"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    placeholder="* * *"
                  />
                </div>
              </div>

              {/* Action button */}
              <div className="flex justify-end">
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handlePay}>
                  Pay
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

