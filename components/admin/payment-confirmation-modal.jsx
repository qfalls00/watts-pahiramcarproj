"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary components
import { Button } from "@/components/ui/button" // UI button component

// Payment confirmation modal component
// Props: onClose (function to close the modal)
export default function PaymentConfirmationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-auto">
        <div className="p-6">
          {/* Car information */}
          <h2 className="text-xl font-bold mb-4">Car Name</h2>
          <p className="text-lg font-bold mb-6">Toyota Camary</p>

          {/* Booking summary */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-bold mb-2">Booking Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 italic">Amount Due</span>
              </div>
              <div className="flex justify-between items-center">
                <span>₱ 4500 x 7 days</span>
                <span className="font-bold">₱ 31,500.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cash</span>
              </div>
            </div>
          </div>

          {/* Pay button */}
          <div className="flex justify-end mt-6">
            <Button className="bg-black text-white hover:bg-gray-800" onClick={onClose}>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

