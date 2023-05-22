import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import eyeLogoDefault from "../../../Assets/images/EyeLogoDefault.svg";
import eyeLogoToggle from "../../../Assets/images/EyeLogoToggle.svg";
import "./loginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("sds");
  };

  return (
    <div id="loginForm">
      <Container maxWidth="sm">
        <Box className="login-box-model">
          <h3 className="form-header-text">Welcome back</h3>
          <p className="login-header">Login</p>
          <div className="mb-3">
            <label>Email ID</label>
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
                    <InputAdornment position="end">
                      <img
                        src={passwordShow ? eyeLogoDefault : eyeLogoToggle}
                        alt="logo"
                        onClick={() => setPasswordShow(!passwordShow)}
                      />
                    </InputAdornment>
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
        Don't have account?
        <span onClick={() => navigate("/register")}> Register </span>
      </p>
    </div>
  );
};

export default LoginForm;
