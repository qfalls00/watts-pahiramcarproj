"use client" // Indicates this is a client-side component that uses client-side features

// Import icon components
import { CreditCard, Calendar, Car } from "lucide-react"

// Admin dashboard page component
export default function AdminDashboard() {
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Manage your car rental business</p>
      </div>

      {/* Stats cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Revenue stats card */}
        <div className="bg-white border rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Total Revenue</p>
              <h2 className="text-2xl font-bold">₱ 123,456.78</h2>
              <p className="text-xs text-green-600">+30.1% from last week</p>
            </div>
            <div className="p-2 rounded-full bg-gray-100">
              <CreditCard className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Active bookings stats card */}
        <div className="bg-white border rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Bookings</p>
              <h2 className="text-2xl font-bold">24</h2>
              <p className="text-xs text-green-600">+3 from last week</p>
            </div>
            <div className="p-2 rounded-full bg-gray-100">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Available cars stats card */}
        <div className="bg-white border rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Available Cars</p>
              <h2 className="text-2xl font-bold">43</h2>
              <p className="text-xs text-green-600">+3 new cars added</p>
            </div>
            <div className="p-2 rounded-full bg-gray-100">
              <Car className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent bookings table */}
      <div className="bg-white border rounded-lg overflow-hidden">
        {/* Table header */}
        <div className="p-6">
          <h2 className="text-lg font-semibold">Recent Bookings</h2>
          <p className="text-sm text-gray-500">View recent customer bookings</p>
        </div>

        {/* Table with horizontal scrolling */}
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
            <tbody>
              {/* Ongoing booking row */}
              <tr className="border-t cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">B001</td>
                <td className="px-6 py-4 text-sm">Diwata Pares</td>
                <td className="px-6 py-4 text-sm">2016 Toyota Camry</td>
                <td className="px-6 py-4 text-sm">May 05, 2025</td>
                <td className="px-6 py-4 text-sm">May 12, 2025</td>
                <td className="px-6 py-4 text-sm">₱ 24,000.00</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-600 text-white">Ongoing</span>
                </td>
              </tr>
              {/* Due already booking row */}
              <tr className="border-t cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">B002</td>
                <td className="px-6 py-4 text-sm">Diwata Pares</td>
                <td className="px-6 py-4 text-sm">2016 Toyota Camry</td>
                <td className="px-6 py-4 text-sm">May 04, 2025</td>
                <td className="px-6 py-4 text-sm">May 12, 2025</td>
                <td className="px-6 py-4 text-sm">₱ 24,000.00</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600 text-white">Due already</span>
                </td>
              </tr>
              {/* Completed booking row */}
              <tr className="border-t cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">B003</td>
                <td className="px-6 py-4 text-sm">Diwata Pares</td>
                <td className="px-6 py-4 text-sm">2016 Toyota Camry</td>
                <td className="px-6 py-4 text-sm">May 03, 2025</td>
                <td className="px-6 py-4 text-sm">May 12, 2025</td>
                <td className="px-6 py-4 text-sm">₱ 24,000.00</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-black text-white">Completed</span>
                </td>
              </tr>
              {/* Another completed booking row */}
              <tr className="border-t cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">B004</td>
                <td className="px-6 py-4 text-sm">Diwata Pares</td>
                <td className="px-6 py-4 text-sm">2016 Toyota Camry</td>
                <td className="px-6 py-4 text-sm">May 01, 2025</td>
                <td className="px-6 py-4 text-sm">May 12, 2025</td>
                <td className="px-6 py-4 text-sm">₱ 24,000.00</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-black text-white">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

