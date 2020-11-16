import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Iframe from 'react-iframe'



class NewEventForm extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload
    componentDidMount = () => {
      this.props.dispatch({ type: 'GOT_EVENTS'});
    
      
    } 
  render() {
    return (
      <div>
          
              <h1> this is where we'll add the display events form </h1>
              {this.props.store.event.event.map((event) =>{
                return <div key={event.event_id}> {event.title} {event.address}
                {event.description} {event.date} {event.image_url} 

                </div>
              })}
              {/* {JSON.stringify(this.props.store.event)} */}
         


              <Iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3651962689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
              seamless><a href="https://terminationdust.bandcamp.com/album/growing-down">
                Growing Down by 
              Termination Dust</a></Iframe>



      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
