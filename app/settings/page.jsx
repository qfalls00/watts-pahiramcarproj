"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary hooks and components
import { useState } from "react" // For state management
import { Button } from "@/components/ui/button" // UI button component
import { Input } from "@/components/ui/input" // UI input component

// User settings page component
export default function Settings() {
  // State for form fields and editing mode
  const [customerName, setCustomerName] = useState("Diwata Pares Overcook") // Customer name
  const [mobileNumber, setMobileNumber] = useState("63912-456-7891") // Mobile number
  const [email, setEmail] = useState("diwatapares@overcook.com") // Email

  // State for tracking which fields are being edited
  const [editingName, setEditingName] = useState(false) // Name editing mode
  const [editingMobile, setEditingMobile] = useState(false) // Mobile editing mode
  const [editingEmail, setEditingEmail] = useState(false) // Email editing mode

  // State for temporary values during editing
  const [tempName, setTempName] = useState(customerName) // Temporary name
  const [tempMobile, setTempMobile] = useState(mobileNumber) // Temporary mobile
  const [tempEmail, setTempEmail] = useState(email) // Temporary email

  // Function to handle saving name changes
  const handleSaveName = () => {
    setCustomerName(tempName) // Update the customer name
    setEditingName(false) // Exit editing mode
  }

  // Function to handle saving mobile changes
  const handleSaveMobile = () => {
    setMobileNumber(tempMobile) // Update the mobile number
    setEditingMobile(false) // Exit editing mode
  }

  // Function to handle saving email changes
  const handleSaveEmail = () => {
    setEmail(tempEmail) // Update the email
    setEditingEmail(false) // Exit editing mode
  }

  // Render the user settings page
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl mt-20">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage your account</p>
      </div>

      {/* Settings form */}
      <div className="space-y-6">
        {/* Customer name field */}
        <div>
          <label className="font-medium">Customer Name</label>
          <div className="flex mt-2">
            {editingName ? (
              <>
                <Input value={tempName} onChange={(e) => setTempName(e.target.value)} className="mr-2" />
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSaveName}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Input value={customerName} readOnly className="mr-2 bg-gray-50" />
                <Button
                  variant="outline"
                  onClick={() => {
                    setTempName(customerName)
                    setEditingName(true)
                  }}
                >
                  Edit
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile number field */}
        <div>
          <label className="font-medium">Mobile Number</label>
          <div className="flex mt-2">
            {editingMobile ? (
              <>
                <Input value={tempMobile} onChange={(e) => setTempMobile(e.target.value)} className="mr-2" />
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSaveMobile}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Input value={mobileNumber} readOnly className="mr-2 bg-gray-50" />
                <Button
                  variant="outline"
                  onClick={() => {
                    setTempMobile(mobileNumber)
                    setEditingMobile(true)
                  }}
                >
                  Edit
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Email field */}
        <div>
          <label className="font-medium">Email</label>
          <div className="flex mt-2">
            {editingEmail ? (
              <>
                <Input value={tempEmail} onChange={(e) => setTempEmail(e.target.value)} className="mr-2" />
                <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSaveEmail}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Input value={email} readOnly className="mr-2 bg-gray-50" />
                <Button
                  variant="outline"
                  onClick={() => {
                    setTempEmail(email)
                    setEditingEmail(true)
                  }}
                >
                  Edit
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

