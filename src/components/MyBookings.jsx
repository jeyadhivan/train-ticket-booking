import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const MyBookings = ({ isLoggedIn }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = () => {
      setTimeout(() => {
        const mockBookings = [
          {
            id: "BOOK12345",
            trainNumber: "12301",
            trainName: "Rajdhani Express",
            from: "Mumbai",
            to: "Delhi",
            departure: "2023-06-15T16:05:00",
            arrival: "2023-06-16T08:35:00",
            class: "2A",
            passengers: 2,
            status: "Confirmed",
            pnr: "PNR789012",
            fare: 4500,
          },
          {
            id: "BOOK67890",
            trainNumber: "12951",
            trainName: "Mumbai Rajdhani",
            from: "Delhi",
            to: "Mumbai",
            departure: "2023-06-20T17:00:00",
            arrival: "2023-06-21T09:25:00",
            class: "3A",
            passengers: 1,
            status: "Cancelled",
            pnr: "PNR345678",
            fare: 1650,
          },
        ];
        setBookings(mockBookings);
        setLoading(false);
      }, 1000);
    };

    fetchBookings();
  }, []);

  const handleCancel = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings(
        bookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: "Cancellation in Progress" }
            : booking
        )
      );
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-required">
        <div className="container">
          <h2>Please login to view your bookings</h2>
          <Link to="/login" className="btn btn-primary">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="container">
          <div className="spinner"></div>
          <p>Loading your bookings...</p>
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="no-bookings">
        <div className="container">
          <h2>No bookings found</h2>
          <p>
            You haven't made any bookings yet. Book your first train ticket now!
          </p>
          <Link to="/" className="btn btn-primary">
            Book Tickets
          </Link>
        </div>
      </div>
    );
  }

  const formatDuration = (departure, arrival) => {
    const diff = new Date(arrival) - new Date(departure);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="my-bookings">
      <div className="container">
        <h1>My Bookings</h1>

        <div className="bookings-list">
          {bookings.map((booking) => (
            <div
              className={`booking-card ${booking.status
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={booking.id}
            >
              <div className="booking-header">
                <h3>
                  {booking.trainName} ({booking.trainNumber})
                </h3>
                <span
                  className={`status-badge ${booking.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="booking-details">
                <div className="route">
                  <div className="station">
                    <span className="time">
                      {new Date(booking.departure).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="city">{booking.from}</span>
                    <span className="date">
                      {new Date(booking.departure).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="duration">
                    {formatDuration(booking.departure, booking.arrival)}
                    <div className="timeline"></div>
                  </div>

                  <div className="station">
                    <span className="time">
                      {new Date(booking.arrival).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="city">{booking.to}</span>
                    <span className="date">
                      {new Date(booking.arrival).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="booking-meta">
                  <div>
                    <span>Class:</span>
                    <strong>{booking.class}</strong>
                  </div>
                  <div>
                    <span>Passengers:</span>
                    <strong>{booking.passengers}</strong>
                  </div>
                  <div>
                    <span>PNR:</span>
                    <strong>{booking.pnr}</strong>
                  </div>
                  <div>
                    <span>Fare:</span>
                    <strong>₹{booking.fare}</strong>
                  </div>
                </div>
              </div>

              <div className="booking-actions">
                {booking.status === "Confirmed" && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel Booking
                  </button>
                )}
                <Link
                  to={`/booking-details/${booking.id}`}
                  className="btn btn-outline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
