import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import TextField from '@material-ui/core/TextField';


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

     // Sets state with hardcoded data - will be used for demonstration 
     hiddenState = () => {
       this.setState({
       newEvent:{
        title: 'Granddad and Termination Dust',
        address: '100 Real Street Minneapolis, MN 55403',
        description: `This is 100% a real gig that could have happened in the year 2020 
        but right now its being used to demostrate creating a new event!`,
        date: '1/11/20',
        image_url: 'https://iili.io/FjjDI2.jpg',
        bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" 
        src="https://bandcamp.com/EmbeddedPlayer/album=2901691260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ggrraavvee.bandcamp.com/album/goodbye-nowhere">Goodbye, 
        Nowhere! by Double Grave</a></iframe>`,
       }   
       })
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
              <h1> New Event! </h1>

                <TextField required onChange={(event) => this.handleChange( 'title' , event)} 
                    type="text" id="" placeholder='title'/>

                <TextField onChange={(event) => this.handleChange( 'address' , event)} 
                                    type="text" id="" placeholder='address'/>

                <TextField  onChange={(event) => this.handleChange( 'description' , event)} 
                                    type="text" id="" placeholder='description'/>

                <TextField onChange={(event) => this.handleChange( 'date' , event)} 
                                                    type="text" id="" placeholder='date - 1/15/20'/>

                <TextField  onChange={(event) => this.handleChange( 'image_url' , event)} 
                                                    type="text" id="" placeholder='image link'/>

                <TextField onChange={(event) => this.handleChange( 'bandcamp' , event)} 
                                                    type="text" id="" placeholder='bandcamp link'/>
                  <button className='updateFormBtn'> submit</button>
                  <button onClick={() => {this.props.handleClose()}} className='updateFormBtn'> cancel </button>
                  <button onClick={() => {this.hiddenState()}} className='hidden'> hide</button>
          </form>

          </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
