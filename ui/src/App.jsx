import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Footer from "./components/Footer"

import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Explore />
              <Footer />
            </>
          }
        />

        {/* Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App