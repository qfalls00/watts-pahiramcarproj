"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import { Input } from "@/components/ui/input" // UI input component
import { Button } from "@/components/ui/button" // UI button component
import BookingModal from "@/components/admin/booking-modal" // Booking modal component
import PaymentModal from "@/components/admin/payment-modal" // Payment modal component

// Sample reservation data for demonstration
// In a real app, this would come from an API or database
const reservationData = [
  {
    id: "R001",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    reservationDate: "May 01, 2025",
    expirationDate: "May 08, 2025",
    status: "active",
  },
  {
    id: "R002",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    reservationDate: "May 02, 2025",
    expirationDate: "May 09, 2025",
    status: "active",
  },
  {
    id: "R003",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    reservationDate: "May 03, 2025",
    expirationDate: "May 10, 2025",
    status: "active",
  },
  {
    id: "R004",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    reservationDate: "May 04, 2025",
    expirationDate: "May 11, 2025",
    status: "expired",
  },
]

// Admin reservations page component
export default function AdminReservations() {
  // State for modal visibility, selected reservation, and search
  const [showBookingModal, setShowBookingModal] = useState(() => false) // Booking modal visibility
  const [showPaymentModal, setShowPaymentModal] = useState(() => false) // Payment modal visibility
  const [selectedReservation, setSelectedReservation] = useState(() => null) // Selected reservation
  const [searchTerm, setSearchTerm] = useState(() => "") // Search term for filtering

  // Function to handle "Book Now" button click
  const handleBookNow = (reservation) => {
    setSelectedReservation(reservation) // Set the selected reservation
    setShowBookingModal(true) // Show the booking modal
  }

  // Function to handle closing the booking modal and opening the payment modal
  const handleCloseBookingModal = () => {
    setShowBookingModal(false) // Close the booking modal
    setShowPaymentModal(true) // Show the payment modal
  }

  // Filter reservations based on search term
  const filteredReservations = reservationData.filter((reservation) =>
    reservation.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Render the admin reservations page
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <p className="text-gray-500">View and manage car reservations</p>
      </div>

      {/* Search input */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Input
            type="search"
            placeholder="Search name"
            className="pl-10 py-2 border rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Reservations table */}
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Reservation ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Customer</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Car</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Reservation Date</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Expiration Date</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through filtered reservations and render each as a table row */}
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id} className="border-t">
                <td className="px-6 py-4 text-sm">{reservation.id}</td>
                <td className="px-6 py-4 text-sm">{reservation.customer}</td>
                <td className="px-6 py-4 text-sm">{reservation.car}</td>
                <td className="px-6 py-4 text-sm">{reservation.reservationDate}</td>
                <td className="px-6 py-4 text-sm">{reservation.expirationDate}</td>
                <td className="px-6 py-4 text-sm">
                  {/* Show "Book Now" button for active reservations, "Expired" label for expired ones */}
                  {reservation.status === "active" ? (
                    <Button
                      className="bg-black text-white hover:bg-gray-800 text-xs px-4 py-1 rounded-md"
                      onClick={() => handleBookNow(reservation)}
                    >
                      Book Now
                    </Button>
                  ) : (
                    <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-300 text-gray-700">Expired</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Modal - only rendered when showBookingModal is true and a reservation is selected */}
      {showBookingModal && selectedReservation && (
        <BookingModal reservation={selectedReservation} onClose={() => setShowBookingModal(false)} />
      )}

      {/* Payment Modal - only rendered when showPaymentModal is true and a reservation is selected */}
      {showPaymentModal && selectedReservation && (
        <PaymentModal booking={selectedReservation} onClose={() => setShowPaymentModal(false)} />
      )}
    </div>
  )
}

