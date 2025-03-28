"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management
import AdminLayout from "../../layouts/AdminLayout" // Import the admin layout component
import BookingDetailsModal from "../../components/admin/booking-details-modal" // Import the booking details modal component
import { Input } from "../../components/ui/input" // Import the Input UI component

// Sample booking data for demonstration purposes
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

export default function AdminBookings() {
  // State for controlling the booking details modal visibility
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  // State for storing the selected booking for viewing details
  const [selectedBooking, setSelectedBooking] = useState(null)

  // Function to handle the view details action
  const handleViewDetails = (booking) => {
    setSelectedBooking(booking) // Set the selected booking
    setShowDetailsModal(true) // Show the details modal
  }

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
    <AdminLayout>
      {" "}
      {/* Wrap the page content in the admin layout */}
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Bookings</h1> {/* Page title */}
          <p className="text-gray-500">View and manage customer bookings</p> {/* Page description */}
        </div>

        {/* Search input */}
        <div className="mb-6">
          <Input placeholder="Search booking ID" className="max-w-xs" />
        </div>

        {/* Bookings table */}
        <div className="bg-white border rounded-md overflow-hidden">
          <div className="overflow-x-auto">
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
              <tbody className="divide-y">
                {/* Map through booking data and render each as a table row */}
                {bookingData.map((booking) => (
                  <tr
                    key={booking.id}
                    className="cursor-pointer hover:bg-gray-50"
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
        </div>

        {/* Booking Details Modal - only rendered when showDetailsModal is true and a booking is selected */}
        {showDetailsModal && selectedBooking && (
          <BookingDetailsModal booking={selectedBooking} onClose={() => setShowDetailsModal(false)} />
        )}
      </div>
    </AdminLayout>
  )
}

