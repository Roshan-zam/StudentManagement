import React from 'react'
import './BasicDetails.scss';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Box, TextField, Typography } from '@mui/material';
import thumbnail from "../../Assets/images/Thumbnail.svg"


export default function BasicDetails() {
  return (
    
    <div className="container">
    <Form className='courses '>
        <Form.Group className='w-100'>
            <Form.Label className='add-detail'>Courses Title</Form.Label><br></br>
            <Form.Control type="text" className='input-field' placeholder="Enter full name" />
        </Form.Group>
    </Form>

    <Form className='courses-page mt-3'>
        <div className='category-item'>
            <Form.Label className='select-detail'>Course Category</Form.Label>
            <select className="select-input">
                <option selected className='add-category'>Select course category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className='skill-item'>
            <Form.Label className='select-skill'>Skill</Form.Label>
            <select className="select-item">
                <option selected>Select skill</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> 
        </div>
    </Form>

    <div className='link-image mt-3 '>
        <Form.Label className='file-browser'>Course thumbnail<span className='summary-short'>(Short summary if this course)</span></Form.Label>
        <div className='thumbnail-upload'>
            <Form.Group className='file-upload p-4'>
                <img className='thumbnail-logo' src={thumbnail} alt='logo' /><br></br>
                <Form.Label className='drag-file'>Drag files hear or <Link>Browser</Link></Form.Label>
            </Form.Group>
        </div>
    </div>
    <Typography className='image-supported'>
        <caption>Supported format : PNG,JPEG</caption>
        <caption>Width : 100X100 to 500X500(aspect ratio 1:1)</caption>
    </Typography>
    <Box className="box-item mt-2">
       <p className='about-space'>About Course <span className='summary-space'>(Short summary of this course)</span></p>
       <TextField className='enter-course'
        multiline
       rows={1}
       maxRows={3}
       placeholder='Enter about course'
       >
       </TextField>
    </Box>
</div>
    )
}
