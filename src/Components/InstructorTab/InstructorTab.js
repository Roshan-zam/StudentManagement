import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./InstructorTab.scss";
import StudentsEnrolled from "../StudentsEnrolled/StudentsEnrolled";
import CourseSyllabus from "../CourseDetails/CourseSyllabus/courseSyllabus"
import CourseOverview from "../CourseDetails/CourseOverview/courseOverview"

function InstructorTab() {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="main-tab">
      <Box sx={{ width: "100%" , height:"1%"}} className="tab-box">
        <Tabs value={value} onChange={handleChange} className="tabs">
          <Tab value="one" label=" Student Enrolled" wrapped  className="tab-labels"/>
          <Tab value="two" label="Syllabus" className="tab-labels"/>
          <Tab value="three" label="Overview" className="tab-labels"/>
        </Tabs>
      </Box>
      {value==="one"&&<StudentsEnrolled/>}
      {value==="two"&&<CourseSyllabus/>}
      {value==="three"&&<CourseOverview/>}
      
    </div>
  );
}

export default InstructorTab;
