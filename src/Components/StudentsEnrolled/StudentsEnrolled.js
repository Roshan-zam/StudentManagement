import React from "react";
import { useState } from "react";
import "./StudentsEnrolled.scss";
import Box from "@mui/material/Box";
import {
  Typography,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  Pagination,
  Stack,
} from "@mui/material";
import { ReactComponent as ExpandLogo } from "../../Assets/images/ExpandLogo.svg";
import SearchLine from "../../Assets/images/search-line.svg";
import EnrolledTable from "../EnrolledTbale/EnrolledTable";

function StudentsEnrolled() {
  const [sortedByOption, setSortedByOption] = useState("n");
  return (
    <div id="Enrolled">
      <Typography>
        <span className="enrolled-header">2354 Students enrolled</span>
      </Typography>
      <Box className="serch-pagination">
        <Box className="search-instructor">
          <TextField
            placeholder="Search student by name,email ID"
            type="search"
            className="courses-search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={SearchLine} alt="search-line"></img>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
        <Box className="slect-pagination">
            <Stack direction="row" spacing={2}> 
          <Select
            value={sortedByOption}
            onChange={({ target: { value } }) => setSortedByOption(value)}
            className="drop-wrap"
            IconComponent={ExpandLogo}
          >
            <MenuItem value={"n"}>10/pages</MenuItem>
          </Select>
          <Typography >
            <Stack spacing={2} className="pagination">
              <Pagination
                count={4}
                variant="outlined"
                shape="rounded"
                color="secondary"
              />
            </Stack>
          </Typography>
          </Stack>
        </Box>
      </Box>
      <EnrolledTable/>
    </div>
  );
}
export default StudentsEnrolled;