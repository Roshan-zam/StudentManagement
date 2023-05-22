import React from "react";
import "./Coursesadd.scss";
import { AppBar, Avatar, Button, Stack, Toolbar } from "@mui/material";
import instructor from "../../Assets/images/Instructor.svg";
import nocoursesLogo from "../../Assets/images/Groupe2ehiring.svg";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const CoursesAdd = () => {
  const navi = useNavigate();

  return (
    <>
      {/* <AppBar position="static" color="inherit">
        <Toolbar>
          <Toolbar>
            <img className="instructor-logo" src={instructor} alt="logo" />
          </Toolbar>
          <Stack className="avathar-item ml-auto">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>K</Avatar>
          </Stack>
        </Toolbar>
      </AppBar> */}
      <div className="courses-item">
        <p>My Courses(0)</p>
      </div>
      <div>
        <div className="main-courses">
          <img className="Nocourses-item" src={nocoursesLogo} alt="logo" />
          <div className="nocourses-added">
            <p>No courses added</p>
          </div>
          <Button className="add-courses" onClick={() => navi("/addcourses")}>
            Add Courses Now
          </Button>
        </div>
      </div>
    </>
  );
};
export default CoursesAdd;
