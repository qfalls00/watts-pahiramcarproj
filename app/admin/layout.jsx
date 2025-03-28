// Import admin-specific components
import AdminHeader from "@/components/admin/admin-header" // Admin header component
import AdminSidebar from "@/components/admin/admin-sidebar" // Admin sidebar component

// Admin layout component that wraps all admin pages
export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Admin header at the top */}
      <AdminHeader />
      {/* Flex container for sidebar and main content */}
      <div className="flex flex-1">
        {/* Admin sidebar on the left */}
        <AdminSidebar />
        {/* Main content area with padding */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

