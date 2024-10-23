import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import ContactUs from "../Components/ContactUs/ContactUs";
import AboutUs from "../Components/AboutUs/AboutUs";
import Courses from "../Components/Courses/Courses";
import CourseDetail from "../Components/Detail/Detail";
import EnrollForm from "../Components/EnrollForm/EnrollForm";
import StudentPortal from "../Components/StudentPortal/StudentPortal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },

  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/coursedetail",
    element: <CourseDetail />,
  },
  {
    path: "/enrollform",
    element: <EnrollForm />,
  },
  {
    path: "/studentPortal",
    element: <StudentPortal />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
