"use client"

import { useState } from "react"
import "./App.css"

// Simple mock data
const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    price: 4500,
    type: "Sedan",
    image: "/images/car1.jpg",
    seats: 4,
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 5500,
    type: "SUV",
    image: "/images/car2.jpg",
    seats: 5,
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "Ford Mustang",
    price: 7500,
    type: "Sports",
    image: "/images/car3.jpg",
    seats: 2,
    transmission: "Manual",
  },
]

// Simple mock users
const users = [
  { email: "user@example.com", password: "password123", name: "Diwata Pares", role: "user" },
  { email: "admin@example.com", password: "admin123", name: "Admin User", role: "admin" },
]

function App() {
  const [page, setPage] = useState("home")
  const [user, setUser] = useState(null)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [selectedCar, setSelectedCar] = useState(null)

  // Simple login function
  const handleLogin = (e) => {
    e.preventDefault()
    const foundUser = users.find((u) => u.email === loginEmail && u.password === loginPassword)

    if (foundUser) {
      setUser(foundUser)
      setPage(foundUser.role === "admin" ? "admin" : "dashboard")
      setLoginError("")
    } else {
      setLoginError("Invalid email or password")
    }
  }

  // Simple logout function
  const handleLogout = () => {
    setUser(null)
    setPage("home")
  }

  // Navigation
  const navigate = (newPage) => {
    setPage(newPage)
  }

  // Render header
  const renderHeader = () => (
    <header className="header">
      <div className="logo" onClick={() => navigate("home")}>
        PahiramCar
      </div>
      <nav>
        <button onClick={() => navigate("cars")}>Cars</button>
        <button onClick={() => navigate("about")}>About</button>

        {user ? (
          <div className="user-menu">
            <span>{user.name}</span>
            <div className="dropdown">
              {user.role === "admin" && <button onClick={() => navigate("admin")}>Admin</button>}
              <button onClick={() => navigate("dashboard")}>Dashboard</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={() => navigate("login")}>Login</button>
            <button className="btn-primary" onClick={() => navigate("signup")}>
              Sign Up
            </button>
          </>
        )}
      </nav>
    </header>
  )

  // Render pages
  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div className="home-page">
            <div className="hero">
              <div className="hero-content">
                <h1>Rent Your Perfect Car Today</h1>
                <p>Choose from our wide selection of vehicles for any occasion.</p>
                <button className="btn-primary" onClick={() => navigate("cars")}>
                  Browse Cars
                </button>
              </div>
              <div className="hero-image">
                <img src="/images/hero-car.jpg" alt="Car" />
              </div>
            </div>
          </div>
        )

      case "cars":
        return (
          <div className="cars-page">
            <h1>Available Cars</h1>
            <div className="car-list">
              {cars.map((car) => (
                <div key={car.id} className="car-card">
                  <img src={car.image || "/placeholder.svg"} alt={car.name} />
                  <div className="car-info">
                    <div className="car-header">
                      <h3>{car.name}</h3>
                      <div className="car-price">
                        <span>₱{car.price}</span>
                        <small>per day</small>
                      </div>
                    </div>
                    <p>{car.type}</p>
                    <div className="car-features">
                      <span>{car.seats} Seats</span>
                      <span>{car.transmission}</span>
                    </div>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        setSelectedCar(car)
                        navigate("car-details")
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "car-details":
        return selectedCar ? (
          <div className="car-details">
            <button className="back-button" onClick={() => navigate("cars")}>
              Back to Cars
            </button>
            <div className="car-details-content">
              <img src={selectedCar.image || "/placeholder.svg"} alt={selectedCar.name} />
              <div className="details-info">
                <div className="details-header">
                  <h2>{selectedCar.name}</h2>
                  <div className="details-price">
                    <span>₱{selectedCar.price}</span>
                    <small>per day</small>
                  </div>
                </div>
                <p className="car-type">{selectedCar.type}</p>
                <div className="details-features">
                  <div className="feature">
                    <span className="feature-label">Seats:</span>
                    <span>{selectedCar.seats}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Transmission:</span>
                    <span>{selectedCar.transmission}</span>
                  </div>
                </div>
                <button className="btn-primary" onClick={() => alert(`Car ${selectedCar.name} reserved!`)}>
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            No car selected. <button onClick={() => navigate("cars")}>View Cars</button>
          </div>
        )

      case "login":
        return (
          <div className="login-page">
            <div className="form-container">
              <h1>Login</h1>
              {loginError && <div className="error-message">{loginError}</div>}

              <div className="demo-accounts">
                <p>
                  <strong>Demo Accounts:</strong>
                </p>
                <p>User: user@example.com / password123</p>
                <p>Admin: admin@example.com / admin123</p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Login
                </button>
              </form>

              <p className="form-footer">
                Don't have an account? <button onClick={() => navigate("signup")}>Sign up</button>
              </p>
            </div>
          </div>
        )

      case "signup":
        return (
          <div className="signup-page">
            <div className="form-container">
              <h1>Sign Up</h1>
              <p>For this demo, please use the pre-configured accounts.</p>
              <button className="btn-secondary" onClick={() => navigate("login")}>
                Go to Login
              </button>
            </div>
          </div>
        )

      case "dashboard":
        return (
          <div className="dashboard-page">
            <h1>User Dashboard</h1>
            <p>Welcome, {user?.name}</p>

            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>Browse Cars</h3>
                <p>Explore our wide selection of vehicles.</p>
                <button className="btn-primary" onClick={() => navigate("cars")}>
                  Browse Cars
                </button>
              </div>

              <div className="dashboard-card">
                <h3>My Reservations</h3>
                <p>View and manage your current reservations.</p>
                <button className="btn-primary">View Reservations</button>
              </div>

              <div className="dashboard-card">
                <h3>My Rentals</h3>
                <p>View your current and past rentals.</p>
                <button className="btn-primary">View Rentals</button>
              </div>
            </div>
          </div>
        )

      case "admin":
        return (
          <div className="admin-page">
            <h1>Admin Dashboard</h1>
            <p>Manage your car rental business</p>

            <div className="admin-stats">
              <div className="stat-card">
                <h3>Monthly Revenue</h3>
                <p className="stat-value">₱123,456</p>
              </div>

              <div className="stat-card">
                <h3>Active Bookings</h3>
                <p className="stat-value">24</p>
              </div>

              <div className="stat-card">
                <h3>Available Cars</h3>
                <p className="stat-value">43</p>
              </div>
            </div>

            <div className="admin-table">
              <h2>Recent Bookings</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Car</th>
                    <th>Dates</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B001</td>
                    <td>Diwata Pares</td>
                    <td>Toyota Camry</td>
                    <td>May 5-12, 2025</td>
                    <td>₱24,000</td>
                    <td>
                      <span className="status-active">Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>B002</td>
                    <td>John Doe</td>
                    <td>Honda CR-V</td>
                    <td>May 3-10, 2025</td>
                    <td>₱38,500</td>
                    <td>
                      <span className="status-overdue">Overdue</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )

      case "about":
        return (
          <div className="about-page">
            <h1>About PahiramCar</h1>
            <p>
              PahiramCar is a leading car rental service dedicated to providing high-quality vehicles for all your
              transportation needs. Whether you're traveling for business, going on a family vacation, or just need a
              temporary vehicle, we've got you covered.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide convenient, reliable, and affordable car rental services that meet the diverse
              needs of our customers. We strive to make the car rental process as seamless as possible, from booking to
              return.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>Wide selection of well-maintained vehicles</li>
              <li>Competitive rates with no hidden fees</li>
              <li>Flexible pickup and return options</li>
              <li>Excellent customer service</li>
              <li>Easy online booking system</li>
            </ul>
          </div>
        )

      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="app">
      {renderHeader()}
      <main className="main-content">{renderPage()}</main>
    </div>
  )
}

export default App

