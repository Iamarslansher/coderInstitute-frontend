import React, { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import "./studentPortal.css";

const StudentPortal = () => {
  const [attendance, setAttendance] = useState(85);
  const [isEnroll, setIsEnroll] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [enrollUser, setEnrollUser] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    fetchingEnrolStudent();
  }, []);

  const fetchingEnrolStudent = async () => {
    try {
      const response = await fetch("http://localhost:3001/enrollStudents");
      const result = await response.json();
      setAllStudents(result.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const userChecking = () => {
    const curentUser = allStudents.filter((student) => {
      return email === student.email && userName === student.userName;
    });
    if (curentUser.length > 0) {
      setIsEnroll(true);
      setEnrollUser(curentUser[0]);
      setAttendance(90);
      setUserProfile(`http://localhost:3001/${curentUser[0].userImage}`);
    } else {
      setIsEnroll(false);
      alert("You are not enrolled. Please enroll first.");
    }
  };
  const classSchedule = [
    {
      id: 1,
      subject: enrollUser.courseName,
      time: "09:00 AM",
      room: "lab 3",
      day: "Monday",
    },
    {
      id: 2,
      subject: enrollUser.courseName,
      time: "11:00 AM",
      room: "lab 9",
      day: "Wensday",
    },

    {
      id: 3,
      subject: enrollUser.courseName,
      time: "02:00 PM",
      room: "Lab 7",
      day: "Friday",
    },
  ];
  return (
    <>
      <div className="portal-container">
        {!isEnroll ? (
          <div className="email-password-container">
            <label htmlFor="userName" className="labelPassword">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="password"
              onChange={(e) => setUserName(e.target.value)}
            />

            <label htmlFor="email" className="labelEmail">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="email"
            />

            <button className="submit-btn" onClick={userChecking}>
              Login
            </button>
          </div>
        ) : (
          <div className="portal-wrapper">
            <h1 className="portal-title">Student Portal</h1>

            <div className="portal-grid">
              {/* User Profile Section */}
              <div className="card profile-card">
                <div className="card-header">
                  <h2 className="card-title">Profile</h2>
                </div>
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={userProfile}
                      alt={enrollUser.userName}
                      className="avatar-img"
                    />
                  </div>

                  <div className="user-info">
                    <h3 className="user-info-heading">Personal Information</h3>
                    <p className="user-name">{enrollUser.userName}</p>
                    <h3 className="user-info-heading">Contact Details</h3>
                    <p className="user-detail">{enrollUser.email}</p>
                    <p className="user-detail">{enrollUser.userPhone}</p>
                    <h3 className="user-info-heading">Academic Information</h3>
                    <p className="user-detail">{enrollUser.courseName}</p>
                    <p className="user-detail">
                      Roll Number: {enrollUser.userId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Attendance Section */}
              <div className="card attendance-card">
                <div className="card-header">
                  <h2 className="card-title">Attendance</h2>
                </div>
                <div className="card-body">
                  <div className="progress-circle">
                    <span className="attendance-percentage">{attendance}%</span>
                  </div>
                  <p className="attendance-info">
                    Great job! Keep up the good attendance.
                  </p>
                </div>
              </div>

              {/* Class Schedule Section */}
              <div className="card schedule-card">
                <div className="card-header">
                  <h2 className="card-title">Class Schedule</h2>
                </div>
                <div className="card-body">
                  {classSchedule.map((cls) => (
                    <div key={cls.id} className="schedule-item">
                      <div className="schedule-info">
                        <p className="subject">{cls.subject}</p>
                        <p className="subject">{cls.day}</p>
                        <p className="time">
                          <Clock className="icon" /> {cls.time}
                        </p>
                        <p className="room">
                          <Calendar className="icon" /> {cls.room}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentPortal;
