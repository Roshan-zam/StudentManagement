import React from "react";
import "./Addcourses.scss";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  LinearProgress,
  Tab,
  Toolbar,
} from "@mui/material";
// import Check from "../../assets/icons/CheckCircle.svg"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BasicDetails from "../BasicDetails/BasicDetails";
import DescribeCourse from "../DescribeCourse/DescribeCourse";
import AddSyllbus from "../AddSyllbus/AddSyllbus";
import { CheckCircle } from "@mui/icons-material";
import InstructorAppbar from "../InstructorAppbar/InstructorAppbar";
// import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

function Addcourses() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate=useNavigate()

  return (
    <div className="instutor-module">
      <AppBar position="fixed" color="inherit" className="appbar-container">
        <Toolbar>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderColor: "divider" }}>
                <TabList onChange={handleChange} value={value}>
                  <p className="lable-1"> Add course</p>
                  <Avatar
                    className="number-item"
                    sx={{ width: 20, height: 22 }}
                  >
                    {value + 1 > 1 ? <CheckCircle /> : 1}
                  </Avatar>
                  <Tab
                    className="lable-2"
                    label=" Add basic details"
                    value={0}
                  ></Tab>
                  <Avatar
                    className="number-item2"
                    sx={{ width: 20, height: 22 }}
                  >
                    {value + 1 > 2 ? <CheckCircle /> : 2}
                  </Avatar>
                  <Tab
                    className="lable-3"
                    label="Describe course"
                    value={1}
                  ></Tab>

                  <Avatar
                    className="number-item3"
                    sx={{ width: 20, height: 22 }}
                  >
                    3
                  </Avatar>
                  <Tab className="lable-4" label="Add syllbus" value={2}></Tab>
                  <div className="pair-button">
                    <Button variant="outlined" className="mx-2" color='secondary'>
                      Cancel
                    </Button>
                    <div>
                      <Button
                        variant="contained"
                        sx={{ "&:hover": { backgroundColor: "#1D366F" } }}
                        color='secondary'
                        onClick={()=>navigate('/instructorcourses')}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </TabList>
              </Box>
            </TabContext>
          </Box>
        </Toolbar>
        <LinearProgress
          variant="determinate"
          value={value === 2 ? 100 : value === 1 ? 66 : 33}
        />
      </AppBar>
      <TabContext value={value}>
        <TabPanel value={0} className="container main-container">
          <BasicDetails />
        </TabPanel>
        <TabPanel value={1} className="editor-place">
          <DescribeCourse />
        </TabPanel>
        <TabPanel value={2}>
          <AddSyllbus />
        </TabPanel>
      </TabContext>
    </div>
  );
}
export default Addcourses;
