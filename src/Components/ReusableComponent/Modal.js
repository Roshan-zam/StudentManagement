import React from 'react'
import './Modal.scss';
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, Box, TextField, Divider } from '@mui/material'
import { Form } from 'react-bootstrap';
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import { useNavigate } from 'react-router-dom';

function ModalPage() {
    const [open, setOpen] = React.useState(false);
const navigate=useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const add_course
    return (
        <div className='main-cointainer'>
            <Button variant="outlined" className='Assessment-button' onClick={handleClickOpen}>
                + Add Assessment
            </Button>
            <Dialog open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md">
                <DialogContent className='dialog-divider'>
                    <p className='divide-assessment'>Assessment 1</p>
                </DialogContent>
                <Divider className='divider-item' sx={{ border: "1px solid " }} />
                <DialogTitle>
                    <Box className="modal-textfield">
                        <p className='title-modal'>Title</p>
                        <TextField className='text-inputfield w-100'
                            placeholder='Enter assessment 1 title'
                        >
                        </TextField>
                    </Box>
                </DialogTitle>

                <DialogContent className='drop-duration'>
                    <Form.Label className='day-addcourse'>Time Duration <span>(in days)</span></Form.Label>
                    <select className="select-duration">
                        <option selected className='time-duration'>Select time duration (in day)</option>
                        <option value="1">java</option>
                        <option value="2">Web devlopment</option>
                        <option value="3">QA</option>
                    </select>

                    <Form.Label className='popup-editer'>Complete Course Description</Form.Label>
                    <Editor
                        tools={OriginalTools}
                        value="<p>test</p>"
                        onChange={console.log}
                    />
                </DialogContent>
                <Divider className='divider-item' sx={{ border: "1px solid " }} />
                <DialogActions>
                    <Button variant="outlined" className='cancle-model'>Cancel</Button>
                    <Button  onClick={() => navigate('/instructorcourses')} variant="contained" sx={{ "&:hover": { backgroundColor: "#1D366F" } }} className='submit-modal'>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ModalPage