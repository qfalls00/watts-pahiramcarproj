"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import { Input } from "@/components/ui/input" // UI input component
import BookingDetailsModal from "@/components/admin/booking-details-modal" // Booking details modal component

// Sample booking data for demonstration
// In a real app, this would come from an API or database
const bookingData = [
  {
    id: "B001",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    startDate: "May 05, 2025",
    endDate: "May 12, 2025",
    total: 24000,
    status: "ongoing",
  },
  {
    id: "B002",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    startDate: "May 04, 2025",
    endDate: "May 12, 2025",
    total: 24000,
    status: "due",
  },
  {
    id: "B003",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    startDate: "May 03, 2025",
    endDate: "May 12, 2025",
    total: 24000,
    status: "completed",
  },
  {
    id: "B004",
    customer: "Diwata Pares",
    car: "2016 Toyota Camry",
    startDate: "May 01, 2025",
    endDate: "May 12, 2025",
    total: 24000,
    status: "completed",
  },
]

// Admin bookings page component
export default function AdminBookings() {
  // State for modal visibility and selected booking
  const [showDetailsModal, setShowDetailsModal] = useState(false) // Details modal visibility
  const [selectedBooking, setSelectedBooking] = useState(null) // Selected booking

  // Function to handle viewing booking details
  const handleViewDetails = (booking) => {
    setSelectedBooking(booking) // Set the selected booking
    setShowDetailsModal(true) // Show the details modal
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

  // Render the admin bookings page
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <p className="text-gray-500">View and manage customer bookings</p>
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
          <Input type="search" placeholder="Search booking ID" className="pl-10 py-2 border rounded-md w-full" />
        </div>
      </div>

      {/* Bookings table */}
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Booking ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Customer</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Car</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Start Date</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">End Date</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Total</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through booking data and render each as a table row */}
            {bookingData.map((booking) => (
              <tr
                key={booking.id}
                className="border-t cursor-pointer hover:bg-gray-50"
                onClick={() => handleViewDetails(booking)} // Open details modal when row is clicked
              >
                <td className="px-6 py-4 text-sm">{booking.id}</td>
                <td className="px-6 py-4 text-sm">{booking.customer}</td>
                <td className="px-6 py-4 text-sm">{booking.car}</td>
                <td className="px-6 py-4 text-sm">{booking.startDate}</td>
                <td className="px-6 py-4 text-sm">{booking.endDate}</td>
                <td className="px-6 py-4 text-sm">₱ {booking.total.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm">{getStatusBadge(booking.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Details Modal - only rendered when showDetailsModal is true and a booking is selected */}
      {showDetailsModal && selectedBooking && (
        <BookingDetailsModal booking={selectedBooking} onClose={() => setShowDetailsModal(false)} />
      )}
    </div>
  )
}

