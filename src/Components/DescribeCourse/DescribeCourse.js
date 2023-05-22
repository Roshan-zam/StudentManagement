import React from 'react'
import './DescribeCourse.scss';
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import { Form } from 'react-bootstrap';
import { Box, TextField } from '@mui/material';

export default function DescribeCourse() {
  return (
    <div>
      <Form.Label className='complete-course'>Complete Course Description</Form.Label>
      <Editor
        placeholder='sdffdsdfs'
        tools={OriginalTools}
        value="<p>test</p>"
        onChange={console.log}
      />
     <Box className='box-content mt-3'>
       <p className='about-instructor'>About Instructor <span className='about-yourself'>(Yourself)</span></p>
       <TextField className='instructor-content'
       multiline
       rows={2}
       maxRows={10}
       placeholder='Enter about instructor'
       >

       </TextField>
    </Box>
    </div>

  )
}
