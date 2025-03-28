// Import necessary components
import Link from "next/link" // For client-side navigation
import { MapPin, Phone, Facebook, Mail } from "lucide-react" // Import icon components

// Contact page component (server component by default in Next.js App Router)
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact our friendly team</h1>
        <p className="text-gray-600">Let us know how we can help.</p>
      </div>

      {/* Contact cards grid - 2x2 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Visit us card */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="mb-6 p-3 rounded-full bg-gray-100 flex items-center justify-center">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Visit us</h3>
          <p className="text-gray-600 text-center mb-4">Visit our office.</p>
          <Link href="https://maps.google.com" target="_blank" className="text-sm font-medium underline">
            View on Google Maps
          </Link>
        </div>

        {/* Call us card */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="mb-6 p-3 rounded-full bg-gray-100 flex items-center justify-center">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Call us</h3>
          <p className="text-gray-600 text-center mb-4">Mon-Fri from 8am to 5 pm.</p>
          <Link href="tel:639-123-456-7869" className="text-sm font-medium underline">
            639-123-456-7869
          </Link>
        </div>

        {/* Message us card */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="mb-6 p-3 rounded-full bg-gray-100 flex items-center justify-center">
            <Facebook className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Message us</h3>
          <p className="text-gray-600 text-center mb-4">Message our facebook page.</p>
          <Link
            href="https://facebook.com/PahiramCarOfficial"
            target="_blank"
            className="text-sm font-medium underline"
          >
            PahiramCar Official
          </Link>
        </div>

        {/* Email us card */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="mb-6 p-3 rounded-full bg-gray-100 flex items-center justify-center">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Email us</h3>
          <p className="text-gray-600 text-center mb-4">Message us through our email.</p>
          <Link href="mailto:pahiramcar@gmail.com" className="text-sm font-medium underline">
            pahiramcar@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}

