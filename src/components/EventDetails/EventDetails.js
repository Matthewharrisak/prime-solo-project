import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Iframe from 'react-iframe'
import { withRouter } from "react-router";


class EventDetails extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload
    componentDidMount = () => {
     this.props.dispatch({ type: 'GET_DETAILS'});
    
      
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
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(EventDetails);
