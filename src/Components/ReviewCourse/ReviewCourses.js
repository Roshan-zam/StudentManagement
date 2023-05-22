import React from "react";
import { useState } from "react";
import "./ReviewCourses.scss";
import { Box, Stack } from "@mui/system";
import reviewimage from "../../Assets/images/courseImg.png";
import { Typography, Chip, Button, Menu, MenuItem } from "@mui/material";
import More from "../../Assets/images/more.svg";
import InstructorTab from "../InstructorTab/InstructorTab";
import { useNavigate } from "react-router-dom";

function ReviewCourses() {
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
   
  
  return (
    <div id="review-courses">
      <span className="header">My Courses</span>
      <span className="header-path">
        /Learn java programming for absolute beginners
      </span>
      <Box className="info-button" sx={{ padding: "15px 70px" }}>
        <Box className="image-tag" >
          <Box className="reviewimg">
            <img src={reviewimage} alt="reviewimage" className="reviewimage" />
          </Box>
          <Box className="tag-chip">
            <Typography className="tags">
              Learn java programming : for absolute beginners
            </Typography>
            <Typography className="chip-days">
              <Chip label="Published" className="chip" />
              <span className="days">3 days ago</span>
            </Typography>
          </Box>
        </Box>
        <Box className="buttons">
          <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="secondary">
            Preview
          </Button>
          <Button variant="contained" color="secondary" 
          onClick={()=> {navigate("/instructorcourseedit")}} >
            Edit
          </Button>
          <img src={More} alt="more" onClick={handleClick} className="moreimage" />
            
          <Menu
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
           onClose={handleClose}
         >
         <MenuItem onClick={handleClose}>Unpublish</MenuItem>
         <MenuItem onClick={handleClose}>Delete</MenuItem>
       
       </Menu>
       </Stack>
       </Box>
      </Box>
      <InstructorTab/>

    </div>
  );
}
export default ReviewCourses;