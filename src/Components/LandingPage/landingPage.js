import { Box, Button, Stack, Typography } from "@mui/material";
import "./landingPage.scss";
import CmritLogo from "../../Assets/images/CmritLogo.png";
import e2eLogo from "../../Assets/images/E2eLogo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { INSTRUCTOR } from "../Redux/Action/actions";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="landing-page">
      <Box className="landing-logo-box mt-2 ">
        <img className="cmrit-logo" src={CmritLogo} alt="cmrit-logo" />
        <img className="e2e-logo mt-5" src={e2eLogo} alt="e2e-logo" />
      </Box>
      <Box className="landing-title-box mt-5 mb-5">
        <div className="heading-container px-5 py-4">
          <Typography className="bootcamp-heading p-2">
            for bootcamp usecase
          </Typography>
          <Typography className="wireframe-heading">
            Wireframes on Course web app
          </Typography>
        </div>
      </Box>
      <div className="button-stack-container mt-2 mb-4">
        <Stack spacing={2}>
          <Button
            className="module-btn"
            variant="contained"
            color="secondary"
            onClick={() => {navigate("/courses");dispatch({ type: INSTRUCTOR, payload: false })}}
          >
            Guest/ Not registered User
          </Button>
          <Button
            className="module-btn"
            variant="outlined"
            color="secondary"
            onClick={() => {navigate("/register");dispatch({ type: INSTRUCTOR, payload: false })}}
          >
            Student Module
          </Button>
          <Button
            className="module-btn"
            variant="outlined"
            color="secondary"
            onClick={() => {
              dispatch({ type: INSTRUCTOR, payload: true });
              navigate("/instructor_register");
            }}
          >
            Instructor Module
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default LandingPage;
