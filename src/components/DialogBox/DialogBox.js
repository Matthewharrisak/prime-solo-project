import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
        {/* <DialogTitle id="form-dialog-title">Edit Event</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
          What do you want to edit?
          </DialogContentText>
            
            <UpdateEvent funEvent = { funEvent.funEvent } handleClose = {handleClose}  handleOpen={handleClickOpen}/>

        </DialogContent>
        <DialogActions>
           {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>  */}
          {/* <UpdateEvent/> */}
        </DialogActions>
      </Dialog>
    </div>
  );
 }

// }
export default connect(mapStoreToProps)(DialogBox);