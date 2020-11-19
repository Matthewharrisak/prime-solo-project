import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ViewEvents extends Component {
  // this component displays all events from the database. 

  componentDidMount = () => {
    this.props.dispatch({ type: 'GOT_EVENTS'});
  }
  render() {
    return (
      <div>
     <h1> whats up from the view events page </h1>
     
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
export default connect(mapStoreToProps)(ViewEvents);
