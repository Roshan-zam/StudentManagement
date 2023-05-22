import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationInstructor.scss";
import eyeLogoDefault from "../../images/eyeLogoToggle.svg";
import eyeLogoToogle from "../../images/eyeLogoDefault.svg";
import backimg from "../../Assets/images/back.png";

function RegistrationInstructor() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [usePasswordError, setUserPasswordError] = useState("");
console.log(username)
  const handleStoreData = () => {
    localStorage.setItem("fullname", username);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    navigate("/no_courses");
    if (userEmailError !== "" || usePasswordError !== "") {
      alert("Enter valid details");
     
      localStorage.clear();
    }
  };

  const handleNameValidations = () => {
    var nameRegx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!username.match(nameRegx)) {
      setUsernameError(
        "Name should not be empty and must contain only alphabetic"
      );
    } else {
      setUsernameError("");
    }
  };

  const handleEmailValidations = () => {
    var Mailregx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!userEmail.match(Mailregx)) {
      setUserEmailError("Enter valid mail id ");
    } else {
      setUserEmailError("");
    }
  };

  const handlePasswordValidations = () => {
    var passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-6])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!userPassword.match(passwordRegex)) {
      setUserPasswordError("A password must contain minimum 6 characters");
    } else {
      setUserPasswordError("");
    }
  };

  return (
    <div id="instructorregisterForm">
      <Typography>
        <Button href="/courses" sx={{ color: "#1D366F" }}
         >
          <img src={backimg} alt="my" width={"25px"} />
          Back
        </Button>
      </Typography>
      <Container maxWidth="sm">
        <Box className="register-box-model">
          <h3 className="form-header-text">Start teaching on e2ehiring</h3>
          <p className="register-header">Register as Instructor</p>
          <div className="mb-2">
            <label>Full Name</label>
            <TextField
              type="text"
              placeholder="Enter full name"
              onChange={(e) => {setUsername(e.target.value); handleNameValidations();
              }}
              value={username}
            />
            <Typography className="error-msg">{usernameError}</Typography>
          </div>
          <div className="mb-2">
            <label>Email ID</label> 
            <TextField
              type="text"
              placeholder="Enter email ID"
              onChange={({ target: { value } }) => {setUserEmail(value); handleEmailValidations();
              }}
              value={userEmail}
            />
            <Typography className="error-msg">{userEmailError}</Typography>
          </div>
          <div className="mb-2">
            <label>Password</label>
            <div className="input-group">
              <TextField
                onChange={({ target: { value } }) => {setUserPassword(value); handlePasswordValidations();
                }}
                value={userPassword}
                type={passwordShow ? "password" : "text"}
                placeholder="Enter 6 digit password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={passwordShow ? eyeLogoDefault : eyeLogoToogle}
                        alt="logo"
                        onClick={() => setPasswordShow(!passwordShow)}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography className="error-msg">{usePasswordError}</Typography>
            </div>
          </div>
          <Button
            disabled={
              username === "" || userEmail === "" || userPassword === ""
            }
            variant="contained"
            color="secondary"
            disableElevation={true}
            
            className="login-btn"
            onClick={() => {navigate("/no_courses"); handleStoreData()}}
          >
            Register
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
        Already have an account?
        <span onClick={() => navigate("/instructor_login")}>
          {" "}
          Instructor login{" "}
        </span>
      </p>
    </div>
  );
}
export default RegistrationInstructor;