import React from "react";
import "./courses.css";

import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "Master the art of building modern, responsive web applications using the latest technologies and best practices.",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    level: "Intermediate",
    duration: "8 Months",
    modules: 2,
    instructor: "John Doe",
    instructorTitle: "Web Developer",
    enrolledStudents: 70,
    rating: 4.5,
    reviews: 100,
    instructorImage:
      "https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg",
    learningOutcomes: [
      "HTML5, CSS3, and modern JavaScript (ES6+)",
      "React.js for building dynamic user interfaces",
      "Node.js and Express.js for server-side development",
      "RESTful API design and implementation",
      "Database management with MongoDB",
      "Version control with Git and GitHub",
      "Responsive web design and mobile-first approach",
      "Web security best practices and authentication",
      "Performance optimization techniques",
      "Deployment and hosting on cloud platforms",
    ],
  },
  {
    id: 2,
    title: "Mobile App  Development",
    description:
      "Learn to create stunning mobile applications for iOS and Android platforms using React Native.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ib2UlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    level: "Beginner to Intermediate",
    duration: "8 Months",
    modules: 2,
    instructor: "Jane Doe",
    instructorTitle: "Programmer",
    enrolledStudents: 67,
    rating: 4.2,
    reviews: 80,
    instructorImage:
      "https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg",
    learningOutcomes: [
      "React Native for building mobile applications",
      "HTML5, CSS3, and modern JavaScript (ES6+)",
      "Node.js and Express.js for server-side development",
      "RESTful API design and implementation",
      "Database management with MongoDB",
      "Version control with Git and GitHub",
      "Deployment and hosting on cloud platforms",
    ],
  },
  {
    id: 3,
    title: "MERN Stack Development",
    description:
      "Become a full-stack developer with MongoDB, Express.js, React, and Node.js. Build complete web applications from scratch.",
    image:
      "https://images.unsplash.com/photo-1499332347742-4946bddc7d94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV1bCUyMHN0YWNrJTIwZGV2ZXxlbnwwfHwwfHx8MA%3D%3D",
    level: "Advanced",
    duration: "12 Months",
    modules: 4,
    instructor: "John Smith",
    instructorTitle: "Full Stack Developer",
    enrolledStudents: 101,
    rating: 4.7,
    reviews: 150,
    instructorImage:
      "https://m.media-amazon.com/images/M/MV5BY2ZlZDRlYWEtMDQxZS00ZTIxLTkzMTAtODdlNjI3NjMzOGI5XkEyXkFqcGc@._V1_.jpg",
    learningOutcomes: [
      "MongoDB for NoSQL database management",
      "Express.js for building robust web applications",
      "React for creating dynamic user interfaces",
      "Node.js for server-side JavaScript runtime",
      "RESTful API design and implementation",
      "State management with Redux",
      "Authentication and authorization techniques",
      "Full-stack application deployment and scaling",
    ],
  },
  {
    id: 4,
    title: "Advanced React Techniques",
    description:
      "Dive deep into React's advanced concepts, including hooks, context, and performance optimization strategies.",
    image:
      "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWR2YW5jZWQlMjBSZWFjdCUyMFRlY2huaXF1ZXN8ZW58MHx8MHx8fDA%3D",
    level: "Advanced",
    duration: "6 Months",
    modules: 3,
    instructor: "Jane teller",
    instructorTitle: "React Developer",
    enrolledStudents: 95,
    rating: 4.2,
    reviews: 80,
    instructorImage:
      "https://t3.ftcdn.net/jpg/02/66/27/02/360_F_266270284_I0gpP24k8X19Pqfk1jTvMDGPvq0hrDIz.jpg",
    learningOutcomes: [
      "Advanced React concepts like hooks, context, and performance optimization",
      "State management with Redux",
      "Authentication and authorization techniques",
    ],
  },
  {
    id: 5,
    title: "AI and Machine Learning",
    description:
      "Explore the fundamentals of AI and machine learning, including neural networks, deep learning, and more.",
    image:
      "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBhbmQlMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
    level: "Advanced",
    duration: "7 Months",
    modules: 3,
    instructor: "John Teller",
    instructorTitle: "AI Developer",
    enrolledStudents: 125,
    rating: 4.2,
    reviews: 80,
    instructorImage:
      "https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/627589/TaylorJohnSsmith-2022_r.jpg",
    learningOutcomes: [
      "Fundamentals of AI and machine learning",
      "Neural networks and deep learning",
      "TensorFlow and Keras for building AI models",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description:
      "Learn the principles of cybersecurity, including threat analysis, network security, and cryptography.",
    image:
      "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    level: "Beginner",
    duration: "4 Months",
    modules: 2,
    instructor: "Jane Doe",
    instructorTitle: "Cybersecurity Specialist",
    enrolledStudents: 50,
    rating: 4.5,
    reviews: 40,
    instructorImage:
      "https://t3.ftcdn.net/jpg/02/66/27/02/360_F_266270284_I0gpP24k8X19Pqfk1jTvMDGPvq0hrDIz.jpg",
    learningOutcomes: [
      "Understanding cybersecurity threats and vulnerabilities",
      "Network security protocols and architectures",
      "Cryptography and encryption techniques",
    ],
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-page" id="Courses">
      <div className="courses-container">
        <h1 className="page-title">Explore Our Cutting-Edge Courses</h1>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="course-level">{course.level}</span>
              </div>
              <div className="course-content">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <p className="course-duration">Duration: {course.duration}</p>
              </div>
              <div className="course-footer">
                <button
                  className="btn btn-details"
                  onClick={() =>
                    navigate(`/coursedetail`, {
                      state: { course },
                    })
                  }
                >
                  Details
                </button>
                <button
                  className="btn btn-enroll"
                  onClick={() =>
                    navigate(`/enrollform`, {
                      state: {
                        courseName: course.title,
                      },
                    })
                  }
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-enroll moreCourses"
          onClick={() => navigate(`/courses`)}
        >
          More Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
