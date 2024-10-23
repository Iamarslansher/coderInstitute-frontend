import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { User, Mail, Phone, BookOpen } from "lucide-react";
import { FaImage } from "react-icons/fa";
import axios from "axios";
import "./enrollForm.css";

const EnrollForm = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userImage, setUserImage] = useState("");
  const [courseName, setCourseName] = useState("");
  const [education, setEducation] = useState("");

  useEffect(() => {
    console.log(location);
    setCourseName(location.state?.courseName);
  }, [location.state?.courseName]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("email", email);
      formData.append("userName", userName);
      formData.append("userPhone", userPhone);
      formData.append("userImage", userImage);
      formData.append("courseName", courseName);

      console.log({
        formData,
      });

      await axios.post("http://localhost:3001/enrollStudents/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(
        `Thank You 😊 for enrolling in ${courseName}. You can see your classes schedule in Student Portal.`
      );

      setUserName(null);
      setEmail(null);
      setUserPhone(null);
      setEducation(null);
      setUserImage(null);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="enrollment-form-container">
      <div className="enrollment-form-content">
        <div className="enrollment-form-header">
          <div className="enrollment-form-title">Enrollment Form</div>
          <h2 className="enrollment-form-course-name">{courseName}</h2>
          <p className="enrollment-form-description">
            Please fill out the form below to enroll in this course.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="enrollment-form">
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <div className="input-container">
                <User className="input-icon" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-container">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 987-6543"
                  onChange={(e) => setUserPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="education">Highest Education</label>
              <div className="input-container">
                <BookOpen className="input-icon" />
                <select
                  name="education"
                  id="education"
                  onChange={(e) => setEducation(e.target.value)}
                  required
                >
                  <option value="">Select education level</option>
                  <option value="high_school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="userImage">Profile Image</label>
              <div className="input-container">
                <FaImage className="input-icon" />
                <input
                  type="file"
                  name="userImage"
                  id="userImage"
                  accept="image/*"
                  onChange={(e) => setUserImage(e.target.files[0])}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
