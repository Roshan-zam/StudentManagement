import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import "./instructorCourses.scss";
import SearchLogo from "../../Assets/images/SearchLogo.svg";
import { useState } from "react";
import { ReactComponent as ExpandLogo } from "../../Assets/images/ExpandLogo.svg";
import InstructorCard from "../InstructorCard/InstructorCard";
import { useNavigate } from "react-router-dom";

function InstructorCourses() {
  const [sortingByOption, setSortingByOption] = useState("a");
  const navigate=useNavigate()
  return (
    <div id="instructor-courses">
      <Typography>
        <Box className="course_button" sx={{ padding: "0px 75px" }}>
          <span className="number_of_courses">My courses (23)</span>
          <Button className="add_course" variant="contained" onClick={()=>navigate('/addcourses')}>
            Add Courses
          </Button>
        </Box>
      </Typography>
      <TextField
        placeholder="search your courses"
        className="search_courses"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={SearchLogo} alt="search_img"></img>
            </InputAdornment>
          ),
        }}
      ></TextField>

      <FormControl className="sorting_courses">
        <InputLabel
          shrink={true}
          size="small"
          className="sortby-select mt-2  pt-1"
          id="select-label"
        >
          Sort By
        </InputLabel>
        <Select
          value={sortingByOption}
          onChange={({ target: { value } }) => setSortingByOption(value)}
          className="dropdown-wrap"
          IconComponent={ExpandLogo}
          MenuProps={{
            sx: {
              ".MuiPopover-paper": {
                marginTop: "10px",
                boxShadow: "0px 3px 6px #00000029 !important",
                border: "1px solid #EEEEEE",
                borderRadius: "10px",
              },
              ".menu-header.MuiMenuItem-root": {
                color: "#999999",
                fontFamily: "Open Sans ",
                fontWeight: "600",
                fontSize: "12px",
              },
              ".MuiMenuItem-root": {
                paddingRight: "70px",
                color: "#262626",
                fontFamily: "Open Sans ",
                fontWeight: 500,
                fontSize: "13px",
                border: "1px solid #EEEEEE",
              },
              ".MuiList-root": {
                padding: "0px",
              },
            },
          }}
        >
           
          <MenuItem value={"a"} >Most Recent</MenuItem>
          <MenuItem value={"b"}>Most Popular</MenuItem>
        
        </Select>
      </FormControl>
      <InstructorCard/>
      
    </div>
  );
}
export default InstructorCourses;
