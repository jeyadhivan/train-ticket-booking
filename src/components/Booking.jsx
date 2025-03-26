// components/Booking.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Booking = ({ isLoggedIn }) => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([
    { name: '', age: '', gender: 'Male', berth: 'No Preference' }
  ]);
  
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handlePassengerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: '', age: '', gender: 'Male', berth: 'No Preference' }]);
  };

  const removePassenger = (index) => {
    if (passengers.length > 1) {
      const updatedPassengers = [...passengers];
      updatedPassengers.splice(index, 1);
      setPassengers(updatedPassengers);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Please login to continue with booking');
      navigate('/login');
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Booking submitted', { trainId, passengers, contactInfo });
    navigate('/booking-confirmation');
  };

  return (
    <div className="booking">
      <div className="container">
        <h2>Book Your Tickets</h2>
        
        <div className="booking-summary">
          <h3>Rajdhani Express (12301)</h3>
          <p>Mumbai to Delhi | Date: 2023-06-15</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="passenger-details">
            <h3>Passenger Details</h3>
            
            {passengers.map((passenger, index) => (
              <div className="passenger-form" key={index}>
                <h4>Passenger {index + 1}</h4>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={passenger.name}
                      onChange={(e) => handlePassengerChange(index, e)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      name="age"
                      min="1"
                      max="120"
                      value={passenger.age}
                      onChange={(e) => handlePassengerChange(index, e)}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={passenger.gender}
                      onChange={(e) => handlePassengerChange(index, e)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Berth Preference</label>
                    <select
                      name="berth"
                      value={passenger.berth}
                      onChange={(e) => handlePassengerChange(index, e)}
                    >
                      <option>No Preference</option>
                      <option>Lower</option>
                      <option>Middle</option>
                      <option>Upper</option>
                      <option>Side Lower</option>
                      <option>Side Upper</option>
                    </select>
                  </div>
                </div>
                
                {passengers.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removePassenger(index)}
                  >
                    Remove Passenger
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              className="btn btn-outline"
              onClick={addPassenger}
            >
              Add Passenger
            </button>
          </div>
          
          <div className="contact-details">
            <h3>Contact Information</h3>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={contactInfo.name}
                onChange={handleContactChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="payment-section">
            <h3>Payment</h3>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" checked readOnly />
                Credit/Debit Card
              </label>
              <label>
                <input type="radio" name="payment" />
                UPI
              </label>
              <label>
                <input type="radio" name="payment" />
                Net Banking
              </label>
              <label>
                <input type="radio" name="payment" />
                Wallet
              </label>
            </div>
            
            <div className="payment-details">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Name on Card</label>
                <input type="text" required />
              </div>
            </div>
          </div>
          
          <div className="price-summary">
            <h3>Price Summary</h3>
            <div className="price-details">
              <div>
                <span>Base Fare (2A × {passengers.length})</span>
                <span>₹{2250 * passengers.length}</span>
              </div>
              <div>
                <span>GST (5%)</span>
                <span>₹{Math.round(2250 * passengers.length * 0.05)}</span>
              </div>
              <div className="total">
                <span>Total Amount</span>
                <span>₹{2250 * passengers.length + Math.round(2250 * passengers.length * 0.05)}</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Confirm Booking & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;