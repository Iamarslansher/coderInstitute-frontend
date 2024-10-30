import React, { useState } from "react";
import "./achievementsAccordion.css";

const AchievementsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const achievementsData = [
    {
      title: "Student Success Stories",
      year: "2023-2024",
      content: "Our graduates have secured positions at top tech companies:",
      highlights: [
        "85% placement rate within 3 months of graduation",
        "Average salary increase of 45% post-program",
        "Alumni working at Google, Microsoft, Amazon, and Meta",
        "15 students started their own successful tech startups",
      ],
      stats: {
        count: "500+",
        label: "Successful Graduates",
      },
    },
    {
      title: "Industry Recognition",
      year: "2023",
      content: "Awards and accolades received by our institute:",
      highlights: [
        "Best Coding Bootcamp Award - Tech Education Summit",
        "Excellence in Online Learning - EdTech Awards",
        "Top 10 Most Innovative Learning Platforms",
        "Featured in Forbes and TechCrunch",
      ],
      stats: {
        count: "12",
        label: "Industry Awards",
      },
    },
    {
      title: "Project Showcases",
      year: "2023-2024",
      content: "Outstanding projects developed by our students:",
      highlights: [
        "AI-powered healthcare solution adopted by 3 hospitals",
        "E-commerce platform with 1M+ monthly users",
        "Mobile app featured in App Store's Top 100",
        "Open-source contributions to major tech projects",
      ],
      stats: {
        count: "200+",
        label: "Live Projects",
      },
    },
    {
      title: "Community Impact",
      year: "2023-2024",
      content: "Our contribution to the tech community:",
      highlights: [
        "Free coding workshops for 1000+ underprivileged students",
        "Tech mentorship program reaching 50+ schools",
        "Women in Tech scholarship program with 100+ recipients",
        "Regular tech meetups with 5000+ attendees",
      ],
      stats: {
        count: "10K+",
        label: "Lives Impacted",
      },
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="achievements-container">
      <div className="achievements-wrapper">
        <div className="header">
          <h1>Our Achievements</h1>
          <p>Celebrating Excellence in Tech Education</p>
        </div>

        <div className="accordion">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="achievement-trigger"
                onClick={() => toggleAccordion(index)}
              >
                <div className="achievement-header">
                  <div className="title-section">
                    <span className="achievement-title">
                      {achievement.title}
                    </span>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                  <span className="achievement-icon"></span>
                </div>
              </button>

              <div className="achievement-content">
                <div className="content-wrapper">
                  <div className="stats-box">
                    <span className="stats-number">
                      {achievement.stats.count}
                    </span>
                    <span className="stats-label">
                      {achievement.stats.label}
                    </span>
                  </div>
                  <p className="achievement-desc">{achievement.content}</p>
                  <ul className="highlights-list">
                    {achievement.highlights.map((highlight, i) => (
                      <li key={i} className="highlight-item">
                        <span className="highlight-marker">★</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="achievement-summary">
            <div className="summary-stat">
              <span className="summary-number">1500+</span>
              <span className="summary-label">Total Graduates</span>
            </div>
            <div className="summary-stat">
              <span className="summary-number">95%</span>
              <span className="summary-label">Success Rate</span>
            </div>
            <div className="summary-stat">
              <span className="summary-number">50+</span>
              <span className="summary-label">Countries</span>
            </div>
          </div>
          <button className="cta-button">Join Our Success Story</button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsAccordion;
