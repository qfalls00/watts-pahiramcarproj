"use client"

import { useState } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Users, Gauge, Fuel } from "lucide-react"
import AddCarModal from "../../components/admin/add-car-modal"
import EditCarModal from "../../components/admin/edit-car-modal"

// Sample car data for demonstration purposes
const carData = Array(3).fill({
  id: "1",
  name: "2016 Toyota Camry",
  type: "Sedan",
  price: 4500,
  seats: 4,
  transmission: "Automatic",
  fuel: "Gasoline",
  image: "/placeholder.svg?height=225&width=400",
  plateNumber: "DIWATA009",
})

export default function AdminCars() {
  // State for controlling modal visibility
  const [showAddModal, setShowAddModal] = useState(false) // Add car modal visibility
  const [showEditModal, setShowEditModal] = useState(false) // Edit car modal visibility
  const [selectedCar, setSelectedCar] = useState(null) // Selected car for editing

  // Function to handle editing a car
  const handleEdit = (car) => {
    setSelectedCar(car) // Set the selected car
    setShowEditModal(true) // Show the edit modal
  }

  return (
    <AdminLayout>
      {" "}
      {/* Wrap the page content in the admin layout */}
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Car Management</h1> {/* Page title */}
          <p className="text-gray-500">View and manage your car inventory</p> {/* Page description */}
        </div>

        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
          {/* Search input */}
          <Input placeholder="Search cars..." className="max-w-xs" />

          {/* Filter dropdowns */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Car type filter */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Car Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Car Types</SelectItem>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="hatchback">Hatchback</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>

            {/* Transmission type filter */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Transmission Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transmission Types</SelectItem>
                <SelectItem value="automatic">Automatic</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
              </SelectContent>
            </Select>

            {/* Fuel type filter */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Fuel Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fuel Types</SelectItem>
                <SelectItem value="gasoline">Gasoline</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
              </SelectContent>
            </Select>
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
            <div key={index} className="border rounded-md overflow-hidden bg-white">
              {/* Car image */}
              <div className="relative">
                <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                {/* Car name, type, and price */}
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold">{car.name}</h3>
                  <div className="text-right">
                    <div className="font-bold">₱ {car.price}</div>
                    <div className="text-xs text-gray-500">per day</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">{car.type}</p>

                {/* Car features */}
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col items-center">
                    <Users className="h-5 w-5 mb-1" />
                    <span className="text-xs">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Gauge className="h-5 w-5 mb-1" />
                    <span className="text-xs">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Fuel className="h-5 w-5 mb-1" />
                    <span className="text-xs">{car.fuel}</span>
                  </div>
                </div>

                {/* Edit button */}
                <Button variant="outline" className="w-full" onClick={() => handleEdit(car)}>
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Car Modal - only rendered when showAddModal is true */}
        {showAddModal && <AddCarModal onClose={() => setShowAddModal(false)} />}

        {/* Edit Car Modal - only rendered when showEditModal is true and a car is selected */}
        {showEditModal && selectedCar && <EditCarModal car={selectedCar} onClose={() => setShowEditModal(false)} />}
      </div>
    </AdminLayout>
  )
}

