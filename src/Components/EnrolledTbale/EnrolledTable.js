import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'
import "./EnrolledTable.scss"

function EnrolledTable() {
  
      const tableData = [
        {
          
          STUDENT_NAME: 'Suraj',
          EMAIL: 30,
          ENROLLED_DATE: 'Gujrat',
          PROGRESS: 1,
          ASSINGMENT_GRADING: 'Gujrat',
          

        },
        {
          STUDENT_NAME: 'Suraj',
          EMAIL: 30,
          ENROLLED_DATE: 'Gujrat',
          PROGRESS: 1,
          ASSINGMENT_GRADING: 'Gujrat',
        },
      ];
  return (
    <div id="enrolledtab">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='table-head'>
          <TableRow >
            <TableCell className="table-headers">STUDENT NAME</TableCell>
            <TableCell className="table-headers">EMAIL</TableCell>
            <TableCell className="table-headers">ENROLLED DATE</TableCell>
            <TableCell className="table-headers">PROGRESS</TableCell>
            <TableCell className="table-headers">ASSINGMENT GRADING</TableCell>
            <TableCell className="table-headers">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {tableData.map((row) => (
            <TableRow >
              <TableCell>{row.STUDENT_NAME}</TableCell>
              <TableCell>{row.EMAIL}</TableCell>
              <TableCell>{row.ENROLLED_DATE}</TableCell>
              <TableCell>{row.PROGRESS}</TableCell>
              <TableCell>{row.ASSINGMENT_GRADING}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">Review</Button>
                <span className='view-profile'>Veiw Profile</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default EnrolledTable