import Header from "../components/header" // Import the header component

// Define the MainLayout component that provides the layout structure for user pages
// It takes children as props which represent the main content to render
export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Main container with full height */}
      <Header /> {/* Render the header at the top */}
      <main className="flex-1 mt-16">{children}</main> {/* Main content area with top margin */}
    </div>
  )
}

