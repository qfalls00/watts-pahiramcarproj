// Import necessary components
import Image from "next/image" // For optimized image loading
import Link from "next/link" // For client-side navigation
import { Button } from "@/components/ui/button" // Import Button UI component

// Home page component (server component by default in Next.js App Router)
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main content container with responsive padding and margin */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between mt-16">
        {/* Left column with text content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Main heading */}
          <h1 className="text-5xl font-bold mb-4">Rent Your Perfect Car Today</h1>
          {/* Subheading with responsive line break */}
          <p className="text-lg text-gray-600 mb-6">
            Choose from our wide selection of vehicles for any occasion.
            <br />
            Easy booking, flexible pickup, and competitive rates.
          </p>
          {/* Call to action button */}
          <Link href="/cars">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-lg rounded-md">Browse Cars</Button>
          </Link>
        </div>

        {/* Right column with image */}
        <div className="md:w-1/2 flex justify-center">
          {/* Image container with gray background */}
          <div className="bg-gray-100 w-full h-[600px] flex items-center justify-center">
            {/* Placeholder image with specified dimensions */}
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Car Illustration"
              width={600}
              height={400}
              className="object-contain"
              priority // Marks this image as high priority for loading
            />
          </div>
        </div>
      </div>
    </div>
  )
}

