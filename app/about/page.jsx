// About page component (server component by default in Next.js App Router)
export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Page header */}
      <h1 className="text-4xl font-bold mb-6">About PahiramCar</h1>

      {/* Main content */}
      <div className="prose max-w-none">
        {/* Introduction */}
        <p className="text-lg mb-6">
          PahiramCar is a leading car rental service dedicated to providing high-quality vehicles for all your
          transportation needs. Whether you're traveling for business, going on a family vacation, or just need a
          temporary vehicle, we've got you covered.
        </p>

        {/* Mission section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to provide convenient, reliable, and affordable car rental services that meet the diverse needs
          of our customers. We strive to make the car rental process as seamless as possible, from booking to return.
        </p>

        {/* Why Choose Us section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wide selection of well-maintained vehicles</li>
          <li>Competitive rates with no hidden fees</li>
          <li>Flexible pickup and return options</li>
          <li>Excellent customer service</li>
          <li>Easy online booking system</li>
          <li>24/7 roadside assistance</li>
        </ul>

        {/* Fleet section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Fleet</h2>
        <p>
          We maintain a diverse fleet of vehicles to suit every need and budget. From compact cars for city driving to
          spacious SUVs for family trips, luxury vehicles for special occasions, and everything in between. All our
          vehicles are regularly serviced and cleaned to ensure your safety and comfort.
        </p>

        {/* Customer Satisfaction section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Customer Satisfaction</h2>
        <p>
          At PahiramCar, customer satisfaction is our top priority. We continuously strive to improve our services based
          on customer feedback. Our dedicated team is always ready to assist you with any questions or concerns you may
          have.
        </p>
      </div>
    </div>
  )
}

