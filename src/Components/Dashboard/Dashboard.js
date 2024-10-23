import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Courses from "../Courses/Courses";
import ContactUs from "../ContactUs/ContactUs";
// import AchievementsAccordion from "../According/According";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      {/* <AchievementsAccordion /> */}
      <Courses />
      <ContactUs />
    </div>
  );
};

export default Dashboard;
