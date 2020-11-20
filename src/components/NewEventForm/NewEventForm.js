import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EventDetails from '../EventDetails/EventDetails';
import UserPage from '../UserPage/UserPage';

class NewEventForm extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

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
        // console.log('this is our new state' , this.state);
        
        this.setState({
          newEvent:{
            ...this.state.newEvent,
            [keyname]: event.target.value,
        }});
     }

     addEvent = () => {
         console.log('this is our state' , this.state);
         this.props.dispatch({ type: 'NEW_EVENT' , payload: this.state});
    }

  render() {
    return (
      <div>
          <form onSubmit={this.addEvent}>
              <h1> this is where we'll add the display events form </h1>

              <input  onChange={(event) => this.handleChange( 'title' , event)} 
                    type="text" id="" placeholder='title'/>

                <input  onChange={(event) => this.handleChange( 'address' , event)} 
                    type="text" id="" placeholder='address'/>

                <input  onChange={(event) => this.handleChange( 'description' , event)} 
                                    type="text" id="" placeholder='description'/>

                <input  onChange={(event) => this.handleChange( 'date' , event)} 
                                    type="text" id="" placeholder='date'/>

                <input  onChange={(event) => this.handleChange( 'image_url' , event)} 
                                    type="text" id="" placeholder='image link'/>

                <input  onChange={(event) => this.handleChange( 'bandcamp' , event)} 
                                    type="text" id="" placeholder='bandcamp link'/>
                  <button> submit</button>
          </form>
           </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
