// Mark this component as a client-side component that uses client-side interactivity
"use client"

// Import necessary hooks
import { useState } from "react" // For state management

// Admin settings page component
export default function AdminSettings() {
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

  // Render the admin settings page
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account</p>
      </div>

      {/* Settings form */}
      <div className="space-y-6 max-w-2xl">
        {/* Customer name field */}
        <div>
          <label className="font-medium">Customer Name</label>
          <div className="flex mt-2">
            {editingName ? (
              <>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md mr-2"
                />
                <button onClick={handleSaveName} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                  Save
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={customerName}
                  readOnly
                  className="flex-1 px-3 py-2 border rounded-md bg-gray-50 mr-2"
                />
                <button
                  onClick={() => {
                    setTempName(customerName)
                    setEditingName(true)
                  }}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Edit
                </button>
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
                <input
                  type="text"
                  value={tempMobile}
                  onChange={(e) => setTempMobile(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md mr-2"
                />
                <button
                  onClick={handleSaveMobile}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={mobileNumber}
                  readOnly
                  className="flex-1 px-3 py-2 border rounded-md bg-gray-50 mr-2"
                />
                <button
                  onClick={() => {
                    setTempMobile(mobileNumber)
                    setEditingMobile(true)
                  }}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Edit
                </button>
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
                <input
                  type="email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md mr-2"
                />
                <button
                  onClick={handleSaveEmail}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="flex-1 px-3 py-2 border rounded-md bg-gray-50 mr-2"
                />
                <button
                  onClick={() => {
                    setTempEmail(email)
                    setEditingEmail(true)
                  }}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

