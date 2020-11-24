import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EventDetails from '../EventDetails/EventDetails';
import UserPage from '../UserPage/UserPage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UpdateEvent extends Component {

  state={
    newEvent:{
        title: '',
        address: '',
        description: '',
        date: '',
        image_url: '',
        bandcamp: '',
     }
}
  

    handleChange= (keyname, event) => {
        event.preventDefault();
        this.setState({
          newEvent:{
            ...this.state.newEvent,
            [keyname]: event.target.value,
        }});
     }

   

    updateEvent = (event_id) => {
        console.log('whats up , were updating stuff!!!'  ,this.state, event_id);
        let event = {  
          title: this.state.newEvent.title,
          address: this.state.newEvent.address,
          description: this.state.newEvent.description,
          date: this.state.newEvent.date,
          image_url: this.state.newEvent.image_url,
          bandcamp: this.state.newEvent.bandcamp,
          event_id: event_id
        } 
        console.log(event);
        
        this.props.dispatch({type: 'UPDATE_ITEM', payload: event
        });
       }

  render() {
    return (
      <div>
          <form onSubmit={() => {this.updateEvent(this.props.funEvent.event_id)}}>

              <TextField  onChange={(event) => this.handleChange( 'title' , event)} 
                    type="text" id="" placeholder='title'/>

                <TextField onChange={(event) => this.handleChange( 'address' , event)} 
                    type="text" id="" placeholder='address'/>

                <TextField   onChange={(event) => this.handleChange( 'description' , event)} 
                                    type="text" id="" placeholder='description'/>

                <TextField   onChange={(event) => this.handleChange( 'date' , event)} 
                                    type="text" id="" placeholder='date'/>

                <TextField  onChange={(event) => this.handleChange( 'image_url' , event)} 
                                                    type="text" id="" placeholder='image link'/>

                <TextField  onChange={(event) => this.handleChange( 'bandcamp' , event)} 
                                                    type="text" id="" placeholder='bandcamp link'/>
                <button> submit </button>
          </form>
         
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UpdateEvent);
