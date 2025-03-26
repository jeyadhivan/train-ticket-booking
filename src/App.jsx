// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaTrainSubway } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "./App.css";

// Components
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Booking from "./components/Booking";
import MyBookings from "./components/MyBookings";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (data) => {
    setSearchData(data);
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <Link to="/" className="logo">
                <div className="logo-image">
                  <FaTrainSubway />
                </div>
                RailEase
              </Link>

              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/my-bookings">My Bookings</Link>
                <Link to="/">Live Status</Link>
                <Link to="/">Help</Link>
              </div>

              <div className="auth-buttons">
                {isLoggedIn ? (
                  <button
                    className="btn btn-outline"
                    onClick={() => handleLogin(false)}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline">
                      Login
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleLogin(true)}
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home onSearch={handleSearch} />} />
            <Route
              path="/search"
              element={<SearchResults searchData={searchData} />}
            />
            <Route
              path="/book/:trainId"
              element={<Booking isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/my-bookings"
              element={<MyBookings isLoggedIn={isLoggedIn} />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>RailEase</h3>
            <p>
              Making train travel simple, convenient and affordable for everyone
              across India.
            </p>
            <div className="social-links">
              <a href="#">
              <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagramSquare/>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Book Tickets</Link>
              </li>
              <li>
                <Link to="/">Cancel Tickets</Link>
              </li>
              <li>
                <Link to="/">PNR Status</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Information</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>Email: support@railease.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Address: 123 Railway Road, Mumbai</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} RailEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
