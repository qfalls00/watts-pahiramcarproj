"use client" // Indicates this is a client-side component that uses client-side features

// Import necessary components
import Image from "next/image" // For optimized image loading
import { Button } from "@/components/ui/button" // UI button component

// Image preview modal component
// Props: imageUrl (URL of the image to preview), onClose (function to close the modal)
export default function ImagePreviewModal({ imageUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl overflow-auto">
        <div className="p-6">
          {/* Display the image */}
          <Image
            src={
              imageUrl ||
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-dLFCw7n2MsemWSA6KOLJqXxDHYocid.png" ||
              "/placeholder.svg" ||
              "/placeholder.svg"
            }
            alt="Image Preview"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          {/* Close button */}
          <div className="flex justify-end mt-4">
            <Button className="bg-black text-white hover:bg-gray-800" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

