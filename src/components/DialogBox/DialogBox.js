import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UpdateEvent from '../UpdateEvent/UpdateEvent';


// this is a Material-UI component, it handles the UpdateEvent component and displays the edit form

 function  DialogBox(funEvent) {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);  

  };

  return (
    <div>
      <button className='updateFormBtn' onClick={handleClickOpen}>
        Update
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
            <DialogContentText>
                What do you want to edit?
            </DialogContentText>
              
            <UpdateEvent funEvent = { funEvent.funEvent } handleClose = {handleClose}  handleOpen={handleClickOpen}/>

        </DialogContent>
      </Dialog>
    </div>
  );
 }


export default connect(mapStoreToProps)(DialogBox);