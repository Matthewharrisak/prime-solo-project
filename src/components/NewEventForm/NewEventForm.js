import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';


class NewEventForm extends Component {

  // state is creating our event object - the values will be populated on the form in the Render() section of this component
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

      // this function will handle the values from the event form and use those values to setState
    handleChange= (keyname, event) => {
        event.preventDefault();
        
        this.setState({
          newEvent:{
            ...this.state.newEvent,
            [keyname]: event.target.value,
        }});
     }

      // onClick this function will fire off our new state object
     addEvent = () => {
         console.log('this is our state' , this.state);
         this.props.dispatch({ type: 'NEW_EVENT' , payload: this.state});
         this.props.handleClose();
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
                                    type="text" id="" placeholder='date - 1/15/20'/>

                <input  onChange={(event) => this.handleChange( 'image_url' , event)} 
                                    type="text" id="" placeholder='image link'/>

                <input  onChange={(event) => this.handleChange( 'bandcamp' , event)} 
                                    type="text" id="" placeholder='bandcamp link'/>
                  <button className='updateFormBtn'> submit</button>
                  <button onClick={() => {this.props.handleClose()}} className='updateFormBtn'> cancel </button>
          </form>
           </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
