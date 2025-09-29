import React from "react";
import "./about.css";

export default function AboutPage() {
    return (
      <div>
        {/* Top Intro Section */}
        <section className="about-top">
          <div className="intro">
            <h2>About Us</h2>
            <p>
              Welcome to <strong>Clothing Collection</strong> – your trusted fashion
              destination. We provide premium quality apparel for men and women,
              combining comfort, style, and affordability. With a customer-first
              approach, we bring you trendy designs that fit every lifestyle.
            </p>
          </div>

          <div className="info-cards">
            <div className="card">
              <h4>Our Mission</h4>
              <p>To empower style and confidence in everyone through quality fashion.</p>
            </div>
            <div className="card">
              <h4>Our Vision</h4>
              <p>To become Pakistan's most loved online fashion brand with exceptional service.</p>
            </div>
            <div className="card">
              <h4>Why Choose Us</h4>
              <p>Reliable delivery, secure payments, and trend-forward fashion at your fingertips.</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <h2 className="title">Our Story</h2>

          <div className="row">
            <div className="image">
              <img src="/assets/about.jpg" alt="From Local Roots to National Reach" />
            </div>
            <div className="text">
              <h4>From Local Roots to National Reach</h4>
              <p>
                What started as a small family-run clothing store in Lahore has grown into
                one of the leading online fashion destinations in Pakistan. We’ve kept our
                local spirit but scaled our service to meet national demand. Our journey is
                about evolving with our customers while staying true to quality and
                affordability.
              </p>
            </div>
          </div>

          <div className="row reverse">
            <div className="text">
              <h4>What Makes Us Different</h4>
              <p>
                At Clothing Collection, we curate every piece with intention. From selecting
                breathable fabrics to crafting modern designs, we prioritize both comfort and
                aesthetics. Our loyal customers trust us not just for fashion—but for our
                honest prices, helpful service, and fast delivery.
              </p>
            </div>
            <div className="image">
              <img src="/assets/about2.jpg" alt="What Makes Us Different" />
            </div>
          </div>
        </section>
      </div>
    );
 
}
