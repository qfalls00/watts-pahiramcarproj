"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Gauge, Fuel } from "lucide-react"
import AddCarModal from "@/components/admin/add-car-modal"
import EditCarModal from "@/components/admin/edit-car-modal"

// Sample car data for demonstration
// In a real app, this would come from an API or database
const carData = Array(3).fill({
  id: "1",
  name: "2016 Toyota Camry",
  type: "Sedan",
  price: 4500,
  seats: 4,
  transmission: "Automatic",
  fuel: "Gasoline",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-XjAalIT2gW1aqYcq9n94e6AH6KqbCH.png",
  plateNumber: "DIWATA009",
})

// Admin cars page component
export default function AdminCars() {
  // State for modal visibility and selected car
  const [showAddModal, setShowAddModal] = useState(false) // Add car modal visibility
  const [showEditModal, setShowEditModal] = useState(false) // Edit car modal visibility
  const [selectedCar, setSelectedCar] = useState(null) // Currently selected car for editing

  // Function to handle editing a car
  const handleEdit = (car) => {
    setSelectedCar(car) // Set the selected car
    setShowEditModal(true) // Show the edit modal
  }

  // Render the admin cars page
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Car Management</h1>
        <p className="text-gray-500">View and manage your car inventory</p>
      </div>

      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
        {/* Search input */}
        <div className="relative w-full max-w-md">
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
          <Input type="search" placeholder="Search cars..." className="pl-10 py-2 border rounded-md w-full" />
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Car type filter */}
          <select className="px-4 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right">
            <option>All Car Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Luxury</option>
            <option>Sports</option>
          </select>

          {/* Transmission type filter */}
          <select className="px-4 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right">
            <option>All Transmission Types</option>
            <option>Automatic</option>
            <option>Manual</option>
          </select>

          {/* Fuel type filter */}
          <select className="px-4 py-2 border rounded-md appearance-none bg-white pr-8 bg-no-repeat bg-right">
            <option>All Fuel Types</option>
            <option>Gasoline</option>
            <option>Diesel</option>
          </select>
        </div>

        {/* Add new car button */}
        <Button className="bg-black text-white hover:bg-gray-800 ml-auto" onClick={() => setShowAddModal(true)}>
          Add New Car
        </Button>
      </div>

      {/* Additional filters for seats and price */}
      <div className="flex items-center gap-4 mb-6">
        {/* Seats filter */}
        <div className="flex items-center gap-2">
          <span>Seats</span>
          <Input placeholder="Min" className="w-16" />
          <span>-</span>
          <Input placeholder="Max" className="w-16" />
        </div>

        {/* Price range filter */}
        <div className="flex items-center gap-2">
          <span>Price Range</span>
          <span>₱</span>
          <Input placeholder="Min" className="w-16" />
          <span>-</span>
          <span>₱</span>
          <Input placeholder="Max" className="w-16" />
        </div>
      </div>

      {/* Car grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through car data and render each as a card */}
        {carData.map((car, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
            {/* Car image */}
            <div className="relative">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              {/* Car name, type, and price */}
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">₱ {car.price}</div>
                  <div className="text-xs text-gray-500">per day</div>
                </div>
              </div>

              {/* Car features */}
              <div className="flex justify-between my-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs mt-1">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <span className="text-xs mt-1">{car.transmission}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Fuel className="h-5 w-5" />
                  </div>
                  <span className="text-xs mt-1">{car.fuel}</span>
                </div>
              </div>

              {/* Edit button */}
              <button
                onClick={() => handleEdit(car)}
                className="w-full py-2 border border-gray-300 rounded-md text-center hover:bg-gray-100 transition-colors"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Car Modal - only rendered when showAddModal is true */}
      {showAddModal && <AddCarModal onClose={() => setShowAddModal(false)} />}

      {/* Edit Car Modal - only rendered when showEditModal is true and a car is selected */}
      {showEditModal && selectedCar && <EditCarModal car={selectedCar} onClose={() => setShowEditModal(false)} />}
    </div>
  )
}

