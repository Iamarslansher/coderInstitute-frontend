import React from "react";
import AchievementsAccordion from "../According/According";
import "./aboutUs.css";

const AboutUs = () => {
  const faculties = [
    {
      name: "Arsalan Sher",
      title: "CEO & Founder",
      bio: "Arsalan Sher is focuses on practical, project-based learning to ensure students master real-world skills. Join him to become a full-stack developer with expertise in modern tools and frameworks.",
      image:
        "https://media.istockphoto.com/id/1701881193/photo/business-man-looking-outside-the-window-in-an-office.jpg?s=612x612&w=0&k=20&c=tHbU1BzPirAVXqB4UiHEkXcRPpmhLWR3Kzfdfcrurqc=",
    },
    {
      name: "John Doe",
      title: "Lead Instructor",
      bio: "With over 10 years of experience, John specializes in JavaScript and modern web technologies.",
      image:
        "https://demo.solwininfotech.com/wordpress/justica/wp-content/uploads/2016/07/Attorneys-5.png",
    },
    {
      name: "Jane Smith",
      title: "Frontend Mentor",
      bio: "Jane is an expert in UI/UX design, helping students create visually stunning and functional websites.",
      image:
        "https://images.squarespace-cdn.com/content/v1/559d3f3ae4b0015f5414a0e0/364a5627-664d-4e93-83c9-fa8901beaa51/Untitled+design+%281%29.jpg",
    },
    {
      name: "Michael Brown",
      title: "Backend Specialist",
      bio: "Michael focuses on teaching scalable backend solutions using Node.js and MongoDB.",
      image:
        "https://sa.alp.org.au/wp-content/uploads/2018/01/2021-11-12-08.31.01_Searcy_0701-e1638527608186.jpg",
    },
    {
      name: "Emily White",
      title: "Data Science Instructor",
      bio: "Emily is a data scientist with a passion for machine learning and data analysis.",
      image:
        "https://www.cowellclarke.com.au/img/assets/people/emily-white-19042024.png?w=400&h=400",
    },
  ];

  return (
    <div id="about">
      <div className="about-us">
        <section className="academy-section">
          <h1 className="section-title">About Our Institute</h1>
          <p className="section-description">
            Our institute is dedicated to providing the best education in web
            development, covering both frontend and backend technologies. We
            focus on practical, project-based learning to ensure students master
            real-world skills. Join us to become a full-stack developer with
            expertise in modern tools and frameworks.
          </p>
        </section>

        <section className="faculty-section">
          <h2 className="section-title">Meet Our Faculty</h2>
          <div className="faculty-grid">
            {faculties.map((faculty, index) => (
              <div className="faculty-card" key={index}>
                <div className="faculty-image-container">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-image"
                  />
                </div>
                <div className="faculty-details">
                  <h3 className="faculty-name">{faculty.name}</h3>
                  <h4 className="faculty-title">{faculty.title}</h4>
                  <p className="faculty-bio">{faculty.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="see-more-container">
          <button className="see-more-button">See More...</button>
        </div>
      </div>
      <AchievementsAccordion />
    </div>
  );
};

export default AboutUs;
