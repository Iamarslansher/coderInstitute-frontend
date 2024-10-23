import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import "./navbar.css";

const NavItem = ({ icon, text, href }) => {
  return (
    <motion.a
      href={href}
      className="nav-item"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <motion.div
            className="logo-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="logo-text">Coder Institute</h1>
          </motion.div>
          <div className="nav-links">
            <NavItem
              icon={<FaHome className="nav-icon" />}
              text="Home"
              href="#Home"
            />
            <NavItem
              icon={<FaInfoCircle className="nav-icon" />}
              text="About"
              href="#about"
            />

            <NavItem
              icon={<FaBook className="nav-icon" />}
              text="Courses"
              href="#Courses"
            />
            <NavItem
              icon={<FaEnvelope className="nav-icon" />}
              text="Contact"
              href="#contact"
            />
            <NavItem
              icon={<PiStudentFill className="nav-icon" />}
              text="Student Portal"
              href="/studentPortal"
            />
          </div>
          <div className="mobile-menu">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className={`mobile-nav ${isOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavItem
          icon={<FaHome className="nav-icon" />}
          text="Home"
          href="/home"
        />
        <NavItem
          icon={<FaInfoCircle className="nav-icon" />}
          text="About"
          href="/aboutUs"
        />
        <NavItem
          icon={<FaBook className="nav-icon" />}
          text="Courses"
          href="/courses"
        />
        <NavItem
          icon={<FaEnvelope className="nav-icon" />}
          text="Contact"
          href="/contactUs"
        />
        <NavItem
          icon={<PiStudentFill className="nav-icon" />}
          text="Student Portal"
          href="/studentPortal"
        />
      </motion.div>
    </nav>
  );
};

export default Navbar;
