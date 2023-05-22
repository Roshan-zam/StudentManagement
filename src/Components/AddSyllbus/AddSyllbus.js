import React from 'react'
import './AddSyllbus.scss';
import { Box, Button, TextField, Typography } from '@mui/material';
import delecticon  from "../../Assets/images/Delecticon.svg"
import ModalPage from '../ReusableComponent/Modal';


export default function AddSyllbus() {
    return (
        <div className='main-container container'>
            <div className='topics-cointainer'>
           <Typography className='topics-add'> 0 Topics</Typography>
           <Button variant="outlined" className='add-topic'>Add Topic</Button>
           </div> 
           <Box className='box-item'>
            <p className='topic-input'>Topic 1</p>
           <TextField className='text-topic ' placeholder='Enter Topic'>
           </TextField>
           <img className='delect-icon' src={ delecticon} alt='logo' />
           </Box>
           <ModalPage/>
           
        </div>
    )
}
