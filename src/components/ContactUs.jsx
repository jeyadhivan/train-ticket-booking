import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-us">
      <div className="container">
        <h1>Contact Us</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Office</h3>
              <p>123 Railway Road, Mumbai, India 400001</p>
            </div>

            <div className="info-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
              <p>+91 1234567890</p>
            </div>

            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>support@railease.com</p>
              <p>help@railease.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
