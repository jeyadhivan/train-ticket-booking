import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a train ticket?",
      answer:
        "You can book tickets by entering your departure and arrival stations, travel date, and class on our homepage. After selecting your preferred train, enter passenger details and make payment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, net banking, and popular digital wallets like Paytm and PhonePe.",
    },
    {
      question: "Can I cancel my ticket?",
      answer:
        "Yes, you can cancel tickets through 'My Bookings' section. Cancellation charges apply based on when you cancel relative to departure time.",
    },
    {
      question: "How do I check PNR status?",
      answer:
        "You can check PNR status in the 'PNR Status' section by entering your 10-digit PNR number found on your ticket.",
    },
    {
      question: "What if my train is delayed or cancelled?",
      answer:
        "For cancelled trains, you'll get full refund automatically. For delayed trains, you can check real-time status on our platform.",
    },
    {
      question: "Do you offer tatkal tickets?",
      answer:
        "Yes, we offer tatkal bookings which open at 10 AM for AC classes and 11 AM for non-AC classes one day before journey.",
    },
  ];

  return (
    <div className="faq">
      <div className="container">
        <h1>Frequently Asked Questions</h1>

        <div className="search-faq">
          <input type="text" placeholder="Search FAQs..." />
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <i
                  className={`fas ${
                    activeIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>Our customer support team is available 24/7 to assist you.</p>
          <button className="btn btn-primary">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
