import React, { useState } from "react";
import "./LoginInstructor.scss"
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import eyeLogoToggle from "../../images/eyeLogoToggle.svg";
import eyeLogoDefault from "../../images/eyeLogoDefault.svg";
import { useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";

function LoginInstructor() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    localStorage.setItem("id", emailId);
    localStorage.setItem("password", password);
  };
  return (
    <div id="instructorloginForm">
      <Typography>
        <Button href="/courses" sx={{ color: '#1D366F' }}
         disabled={emailId || password} >
          <img src={back} alt="my" width={"25px"} />
          Back
        </Button>
      </Typography>
      <Container maxWidth="sm">
        <Box className="login-box-model">
          <h3 className="form-header-text">Welcome back</h3>
          <p className="login-header">Instructor Login</p>
          <div className="mb-3">
            <label >Email ID</label>
            <TextField
              type="email"
              placeholder="Enter email ID"
              onChange={({ target: { value } }) => setEmailId(value)}
              value={emailId}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="input-group">
              <TextField
                type={passwordShow ? "password" : "text"}
                placeholder="Enter 6 digit password"
                onChange={({ target: { value } }) => setPassword(value)}
                value={password}
                InputProps={{
                  endAdornment: (
                   <img
                        src={passwordShow ? eyeLogoDefault : eyeLogoToggle}
                        alt="logo"
                        onClick={() => setPasswordShow(!passwordShow)}
                      />
                  ),
                }}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            disableElevation={true}
            onClick={handleLoginClick}
            className="login-btn"
            disabled={emailId === "" || password === ""}
          >
            Login
          </Button>
          <Typography className="condition-subtext">
            By continuing, you agree to our
            <a href="https://recruit.e2ehiring.com/terms-and-conditions">
              <span> Terms of Use </span>
            </a>
            and
            <a href="https://recruit.e2ehiring.com/terms-and-conditions">
              <span> Privacy policies </span>
            </a>
          </Typography>
        </Box>
      </Container>
      <p className="login-footer-text">
        Don't have account? Don't have account?
        <span onClick={() => navigate("/instructor_register")} > Register as Instructor</span>
      </p>
    </div>
  );
}
export default LoginInstructor;


// const publish =()=>{
//   if(publish){useHistory("./route")}
  
// }