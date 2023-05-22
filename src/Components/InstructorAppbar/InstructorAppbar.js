import React from "react";
import instructor from "../../Assets/images/Instructor.svg";
import { green } from "@mui/material/colors";

import { AppBar, Avatar, Stack, Toolbar } from "@mui/material";
function InstructorAppbar() {
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Toolbar>
            <img className="instructor-logo" src={instructor} alt="logo" />
          </Toolbar>
          <Stack className="avathar-item ml-auto">
            <Avatar sx={{ bgcolor: green[500] }}>D</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default InstructorAppbar;
