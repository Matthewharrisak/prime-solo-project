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
        title: 'Granddad and Termination Dust @ Firken Tavern',
        address: '100 Real Street Portland, OR 55403',
        description: `Happy to be back at the Firken Tavern! There is a great spot for donuts nearby, With Support from Strange Ranger and Blowout`,
        date: '1/11/20',
        image_url: 'https://iili.io/FjjDI2.jpg',
        bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" 
        src="https://bandcamp.com/EmbeddedPlayer/album=3651962689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
        seamless><a href="https://terminationdust.bandcamp.com/album/growing-down">Growing Down by 
        Termination Dust</a></iframe>`,
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
