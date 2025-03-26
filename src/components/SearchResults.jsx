// components/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchData }) => {
  // Mock data - in a real app, this would come from an API
  const mockTrains = [
    {
      id: '12301',
      name: 'Rajdhani Express',
      from: searchData?.from || 'Mumbai',
      to: searchData?.to || 'Delhi',
      departure: '16:05',
      arrival: '08:35 (+1)',
      duration: '16h 30m',
      classes: [
        { name: '1A', price: '₹3,850', available: '12' },
        { name: '2A', price: '₹2,250', available: '24' },
        { name: '3A', price: '₹1,550', available: '36' },
      ]
    },
    {
      id: '12302',
      name: 'Shatabdi Express',
      from: searchData?.from || 'Mumbai',
      to: searchData?.to || 'Delhi',
      departure: '06:15',
      arrival: '14:45',
      duration: '8h 30m',
      classes: [
        { name: 'CC', price: '₹1,850', available: '18' },
        { name: 'EC', price: '₹2,150', available: '10' },
      ]
    },
    {
      id: '12951',
      name: 'Mumbai Rajdhani',
      from: searchData?.from || 'Mumbai',
      to: searchData?.to || 'Delhi',
      departure: '17:00',
      arrival: '09:25 (+1)',
      duration: '16h 25m',
      classes: [
        { name: '1A', price: '₹3,950', available: '8' },
        { name: '2A', price: '₹2,350', available: '20' },
        { name: '3A', price: '₹1,650', available: '42' },
      ]
    }
  ];

  return (
    <div className="search-results">
      <div className="container">
        <div className="results-header">
          <h2>Trains from {searchData?.from} to {searchData?.to}</h2>
          <p>Date: {searchData?.date}</p>
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <label>Sort By:</label>
            <select>
              <option>Departure Time</option>
              <option>Arrival Time</option>
              <option>Duration</option>
              <option>Price (Low to High)</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Filter By:</label>
            <select>
              <option>All Classes</option>
              <option>AC Classes</option>
              <option>Sleeper</option>
            </select>
          </div>
        </div>
        
        <div className="trains-list">
          {mockTrains.map(train => (
            <div className="train-card" key={train.id}>
              <div className="train-info">
                <h3>{train.name}</h3>
                <div className="train-timing">
                  <div>
                    <span className="time">{train.departure}</span>
                    <span>{train.from}</span>
                  </div>
                  <div className="duration">
                    <span>{train.duration}</span>
                    <div className="timeline"></div>
                  </div>
                  <div>
                    <span className="time">{train.arrival}</span>
                    <span>{train.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="train-classes">
                {train.classes.map(cls => (
                  <div className="class-option" key={cls.name}>
                    <div>
                      <span className="class-name">{cls.name}</span>
                      <span className="class-price">{cls.price}</span>
                    </div>
                    <div>
                      <span className="class-available">{cls.available} seats</span>
                      <Link to={`/book/${train.id}`} className="btn btn-primary">Book Now</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;