import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.scss";
import LandingPage from "./Components/LandingPage/landingPage";
import { createTheme, capitalize, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/navbar";
import CourseDashborad from "./Components/CourseDashboard/courseDashborad";
import DashboardFaq from "./Components/DashboardFaq/dashboardFaq";
import LoginInstructor from "./Components/LoginInstructor/LoginInstructor";
import RegistrationInstructor from "./Components/InstructorRegisterPage/RegistrationInstructor";
import InstructorCourses from "./Components/Instructorcourses/InstructorCourses";
import ReviewCourses from "./Components/ReviewCourse/ReviewCourses";
import CourseComponents from "./Components/CourseDetails/CourseComponents/courseComponents";
import LoginPage from "./Components/LoginPage/loginPage";
import RegisterForm from "./Components/RegisterPage/registerForm";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard/dashboard";
import ForumPage from "./Components/ForumPage/forumPage";
import Addcourses from "./Components/InstructorAddCourse/Addcourses";
import CoursesAdd from "./Components/CoursesAdd/Coursesadd";

 
const App = () => {
  const location = useLocation();
  let param = location.pathname;
  const isAuthenicated = useSelector((state) => state.authReducer.auth);
  const instructor = useSelector((state) => state.authReducer.instructor);


  const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#1D366F",
        light: "#fff",
      },
    },
    typography: {
      button: {
        textTransform: capitalize,
        fontFamily: "Open Sans",
        fontWeight: "700",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar isParam={param} isAuthenicated={isAuthenicated} instructor={instructor} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CourseDashborad />} />
        <Route path="/faq" element={<DashboardFaq />} />
        <Route path="/instructor_login" element={<LoginInstructor />} />
        <Route path="/instructor_register" element={<RegistrationInstructor />}/>
        <Route path="/instructorcourses" element={<InstructorCourses />} />
        <Route path="/review" element={<ReviewCourses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<CourseComponents />} />
        <Route exact path="/forum" element={<ForumPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/addcourses" element={<Addcourses />} />
        <Route exact path="/no_courses" element={<CoursesAdd />} />
        
      </Routes>
    </ThemeProvider>
  );
};
export default App;
