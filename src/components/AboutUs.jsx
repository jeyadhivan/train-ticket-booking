const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About RailEase</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, RailEase began with a simple mission: to make
              train travel in India easier and more accessible for everyone.
              What started as a small team of railway enthusiasts has grown into
              one of India's leading train ticket booking platforms.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe that train travel should be simple, convenient, and
              enjoyable. Our platform eliminates the hassle of traditional
              ticket booking, providing a seamless experience from search to
              journey.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>Instant ticket confirmation</li>
              <li>Lowest price guarantee</li>
              <li>24/7 customer support</li>
              <li>Secure payment options</li>
              <li>Real-time train status updates</li>
            </ul>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>5M+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="stat-card">
              <h3>15K+</h3>
              <p>Daily Bookings</p>
            </div>

            <div className="stat-card">
              <h3>100+</h3>
              <p>Team Members</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Leadership</h2>
          <div className="team-grid">
            <div className="team-member">
              <div
                className="member-photo"
                style={{
                  backgroundImage:
                    "url('https://randomuser.me/api/portraits/men/32.jpg')",
                }}
              ></div>
              <h3>Rajesh Kumar</h3>
              <p>Founder & CEO</p>
            </div>

            <div className="team-member">
              <div
                className="member-photo"
                style={{
                  backgroundImage:
                    "url('https://randomuser.me/api/portraits/women/44.jpg')",
                }}
              ></div>
              <h3>Priya Sharma</h3>
              <p>Chief Technology Officer</p>
            </div>

            <div className="team-member">
              <div
                className="member-photo"
                style={{
                  backgroundImage:
                    "url('https://randomuser.me/api/portraits/men/75.jpg')",
                }}
              ></div>
              <h3>Amit Patel</h3>
              <p>Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
