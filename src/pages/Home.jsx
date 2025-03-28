import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import MainLayout from "../layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Rent Your Perfect Car Today</h1>
            <p className="text-lg text-gray-600 mb-6">
              Choose from our wide selection of vehicles for any occasion.
              <br />
              Easy booking, flexible pickup, and competitive rates.
            </p>
            <Link to="/cars">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-lg rounded-md">
                Browse Cars
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-100 w-full h-[600px] flex items-center justify-center">
              <img src="/placeholder.svg?height=400&width=600" alt="Car Illustration" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

