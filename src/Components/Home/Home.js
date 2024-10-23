import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaUsers, FaEnvelope } from "react-icons/fa";
import "./home.css";

import img from "../../assets/images/img.gif";

const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    className="benefit-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="benefit-card-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="dashboard" id="Home">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Coder Institute
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower your future with our cutting-edge courses and expert
              instructors. Discover a world of knowledge at your fingertips.
            </motion.p>
            <motion.button
              className="contact-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="button-icon" />
              Contact Us
            </motion.button>
          </div>
          <motion.div
            className="header-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={img} alt="Course Academy" />
          </motion.div>
        </div>

        <h2>Why Choose Coder Institute?</h2>

        <div className="benefits-grid">
          <BenefitCard
            icon={<FaGraduationCap className="benefit-icon" />}
            title="Expert Instructors"
            description="Learn from industry professionals with years of experience in their fields."
          />
          <BenefitCard
            icon={<FaBook className="benefit-icon" />}
            title="Comprehensive Curriculum"
            description="Our courses cover everything you need to know, from basics to advanced topics."
          />
          <BenefitCard
            icon={<FaUsers className="benefit-icon" />}
            title="Supportive Community"
            description="Join a vibrant community of learners and collaborate on projects."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
