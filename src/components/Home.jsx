// components/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: "",
    class: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
    navigate("/search");
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Travel Across the Country with Ease</h1>
            <p>
              Book train tickets in minutes with our simple and secure platform.
            </p>
            <button className="btn btn-outline">Learn More</button>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  className="form-control"
                  placeholder="Departure city or station"
                  value={searchParams.from}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  className="form-control"
                  placeholder="Arrival city or station"
                  value={searchParams.to}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  value={searchParams.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="class">Class</label>
                <select
                  id="class"
                  name="class"
                  className="form-control"
                  value={searchParams.class}
                  onChange={handleChange}
                >
                  <option value="">All Classes</option>
                  <option value="1A">First AC (1A)</option>
                  <option value="2A">Second AC (2A)</option>
                  <option value="3A">Third AC (3A)</option>
                  <option value="SL">Sleeper (SL)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Search Trains
            </button>
          </form>
        </div>
      </section>

      <Features />
      <PopularRoutes />
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "https://static.vecteezy.com/system/resources/previews/005/911/714/original/secure-payment-icon-on-white-background-free-vector.jpg",
      title: "Secure Payments",
      description: "Your payments are protected with bank-level security.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1755/1755315.png",
      title: "Instant Confirmation",
      description: "Get your tickets instantly after booking.",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/005/721/930/non_2x/verification-check-mark-badge-on-white-background-icon-vector.jpg",
      title: "100% Verified",
      description: "All tickets are verified by Indian Railways.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose RailEase?</h2>
          <p>We make train travel simple, convenient and affordable</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} className="feature-image" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularRoutes = () => {
  const routes = [
    {
      image: "https://oddviser.com/photo/place/1600/846.jpg?1496220904",
      from: "Mumbai",
      to: "Delhi",
      duration: "16h 30m",
      price: "₹550",
      trains: "10+ daily",
      bookings: "1200+",
    },
    {
      image: "https://www.bontravelindia.com/wp-content/uploads/2022/08/Karnataka-Bangalore-Palace.jpg",
      from: "Bangalore",
      to: "Chennai",
      duration: "5h 15m",
      price: "₹250",
      trains: "8+ daily",
      bookings: "800+",
    },
    {
      image: "https://storage.googleapis.com/createweb/indiacitytrip.com/code/images/Bengal/victoria-memorial-kolkata.jpg",
      from: "Kolkata",
      to: "Varanasi",
      duration: "12h 45m",
      price: "₹450",
      trains: "6+ daily",
      bookings: "600+",
    },
    {
      image: "https://th.bing.com/th/id/OIP.JTAGO_6hhEnobog0YwTseQHaE7?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      from: "Hyderabad",
      to: "Goa",
      duration: "14h 20m",
      price: "₹600",
      trains: "4+ daily",
      bookings: "400+",
    },
  ];

  return (
    <section className="popular-routes">
      <div className="container">
        <div className="section-title">
          <h2>Popular Routes</h2>
          <p>Check out these frequently booked routes</p>
        </div>

        <div className="routes-grid">
          {routes.map((route, index) => (
            <div className="route-card" key={index}>
              <div
                className="route-image"
                style={{
                  backgroundImage: `url(${route.image})`,
                }}
              ></div>
              <div className="route-info">
                <h3>
                  {route.from} to {route.to}
                </h3>
                <p>Duration: {route.duration}</p>
                <div className="route-price">From {route.price}</div>
                <div className="route-meta">
                  <span>{route.trains} trains</span>
                  <span>{route.bookings} bookings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
