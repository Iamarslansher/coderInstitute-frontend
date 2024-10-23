import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book, Clock, Users, Star } from "lucide-react";
import "./detail.css";

const CourseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [course, setCourse] = useState();
  //   const course = location.state;

  useEffect(() => {
    console.log(location.state);
    setCourse(location.state.course);
    console.log(course);
  }, [location.state]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-detail-page">
      <h1 className="course-title">{course.title}</h1>

      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-stats">
        <div className="stat-item">
          <Clock className="icon" />
          <span>{course.duration}</span>
        </div>
        <div className="stat-item">
          <Users className="icon" />
          <span>{course.enrolledStudents} students</span>
        </div>
        <div className="stat-item">
          <Book className="icon" />
          <span>{course.modules} Module</span>
        </div>
        <div className="stat-item">
          <Star className="icon star" />
          <span>{course.rating} Rating</span>
        </div>
      </div>

      <div className="course-description">
        <h2>Course Description</h2>
        <p>{course.description}</p>
      </div>

      <div className="learning-outcomes">
        <h2>What You'll Learn</h2>
        <ul>
          {course.learningOutcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="instructor">
        <h2>Instructor</h2>
        <div className="instructor-info">
          <img src={course.instructorImage} alt={course.title} />
          <div>
            <h3>{course.instructor}</h3>
            <p>{course.title}</p>
          </div>
        </div>
      </div>

      <button
        className="enroll-button"
        onClick={() =>
          navigate("/enrollform", { state: { courseName: course.title } })
        }
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
