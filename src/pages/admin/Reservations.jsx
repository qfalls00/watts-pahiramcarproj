"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import AdminLayout from "../../layouts/AdminLayout" // Import the admin layout component
import BookingModal from "../../components/admin/booking-modal" // Import the booking modal component

// Sample reservation data for demonstration purposes
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

export default function AdminReservations() {
  // State for controlling the booking modal visibility
  const [showBookingModal, setShowBookingModal] = useState(false)
  // State for storing the selected reservation for booking
  const [selectedReservation, setSelectedReservation] = useState(null)
  // State for the search term to filter reservations
  const [searchTerm, setSearchTerm] = useState("")

  // Function to handle the "Book Now" button click
  const handleBookNow = (reservation) => {
    setSelectedReservation(reservation) // Set the selected reservation
    setShowBookingModal(true) // Show the booking modal
  }

  // Filter reservations based on the search term (customer name)
  const filteredReservations = reservationData.filter((reservation) =>
    reservation.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AdminLayout>
      {" "}
      {/* Wrap the page content in the admin layout */}
      <div className="mt-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Reservations</h1> {/* Page title */}
          <p className="text-gray-500">View and manage car reservations</p> {/* Page description */}
        </div>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search name"
            className="px-4 py-2 border rounded-md max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
        </div>

        {/* Reservations table */}
        <div className="bg-white border rounded-md overflow-hidden">
          <div className="overflow-x-auto">
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
              <tbody className="divide-y">
                {/* Map through filtered reservations and render each as a table row */}
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td className="px-6 py-4 text-sm">{reservation.id}</td>
                    <td className="px-6 py-4 text-sm">{reservation.customer}</td>
                    <td className="px-6 py-4 text-sm">{reservation.car}</td>
                    <td className="px-6 py-4 text-sm">{reservation.reservationDate}</td>
                    <td className="px-6 py-4 text-sm">{reservation.expirationDate}</td>
                    <td className="px-6 py-4 text-sm">
                      {/* Show "Book Now" button for active reservations, "Expired" label for expired ones */}
                      {reservation.status === "active" ? (
                        <button
                          className="bg-black text-white hover:bg-gray-800 text-xs px-3 py-1 rounded"
                          onClick={() => handleBookNow(reservation)}
                        >
                          Book Now
                        </button>
                      ) : (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800">
                          Expired
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booking Modal - only rendered when showBookingModal is true and a reservation is selected */}
        {showBookingModal && selectedReservation && (
          <BookingModal reservation={selectedReservation} onClose={() => setShowBookingModal(false)} />
        )}
      </div>
    </AdminLayout>
  )
}

