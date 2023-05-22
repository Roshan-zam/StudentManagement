import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  CardContent,
  Typography,
} from "@mui/material";
import "./InstructorCard.scss";
import courseImg from "../../Assets/images/courseImg.png";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

function InstructorCard() {
  const navigate = useNavigate();

  return (
    <div id="instructorcards">
      <Box
        className="container mt-3"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* <Grid container spacing={2}>
                <Grid item md={6}> */}
        <Box>
          <Card sx={{ display: "flex", maxWidth: 550, }} className="cardDetails">
            <CardMedia
              component="img"
              sx={{ width: 135, height: 100, borderRadius:"4px" }}
              image={courseImg}
              alt="course-img"
              className="intructorImage"
            />
            <Box>
              <CardContent>
                <Chip label="Draft" className="draft-tag" />
                <Typography
                  variant="h6"
                  className="course-names"
                  component="div"
                >
                  Learn java programming for absolute beginners
                </Typography>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="body2"
                    className="assignment"
                    component="p"
                  >
                  </Typography>
                  <Typography
                    variant="body2"
                    className="time-published"
                    component="p"
                  >
                    3 days ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
        <Box onClick={() =>navigate("/review")} className="published">
          <Card sx={{ display: "flex", maxWidth: 550 }} className="cardDetails">
            <CardMedia
              component="img"
              sx={{ width: 135, height: 100, borderRadius:"4px" }}
              image={courseImg}
              alt="course-img"
            />
            <Box>
              <CardContent>
                <Chip label="Published" className="publish-tag" />
                <Typography
                  variant="h6"
                  className="course-names"
                  component="div"
                >
                  Learn java programming for absolute beginners
                </Typography>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="body2"
                    className="assignment"
                    component="p"
                  >
                    <PersonIcon fontSize="small"/>
                    24 Studenyts enrolled
                  </Typography>
                  <Typography
                    variant="body2"
                    className="time-published"
                    component="p"
                  >
                    3 days
                    ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card sx={{ display: "flex", maxWidth: 550 }} className="cardDetails">
            <CardMedia
              component="img"
              sx={{ width: 135, height: 100, borderRadius:"4px" }}
              image={courseImg}
              alt="course-img"
            />
            <Box>
              <CardContent>
                <Chip label="Unpublished" className="tag-published" />
                <Typography
                  variant="h6"
                  className="course-names"
                  component="div"
                >
                  Learn java programming for absolute beginners
                </Typography>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="body2"
                    className="assignment"
                    component="p"
                  >
                   <PersonIcon fontSize="small"/>
                    24 Studenyts enrolled
                  </Typography>
                  <Typography
                    variant="body2"
                    className="time-published"
                    component="p"
                  >
                    3 days ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
        {/* </Grid>
      </Grid> */}
      </Box>
    </div>
  );
}
export default InstructorCard;
