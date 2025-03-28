import AdminHeader from "../components/admin/admin-header" // Import the admin header component
import AdminSidebar from "../components/admin/admin-sidebar" // Import the admin sidebar component

// Define the AdminLayout component that provides the layout structure for admin pages
// It takes children as props which represent the main content to render
export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Main container with full height */}
      <AdminHeader /> {/* Render the admin header at the top */}
      <div className="flex flex-1">
        {" "}
        {/* Flex container for sidebar and main content */}
        <AdminSidebar /> {/* Render the admin sidebar on the left */}
        <main className="flex-1 p-6">{children}</main> {/* Main content area with padding */}
      </div>
    </div>
  )
}

