import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
        this.setState({
          newMovie:{
            ...this.state.newEvent,
            [keyname]: event.target.value,
        }});
      }

  render() {
    return (
      <div>
          <form>
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

          </form>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
