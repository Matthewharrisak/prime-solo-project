import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NewEventForm from '../NewEventForm/NewEventForm';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  componentDidMount = () => {
    this.props.dispatch({ type: 'GOT_EVENTS'});
  }

  deleteEvent = (item) => {
    console.log('whats up, were deleting suttf');
    this.props.dispatch({type: 'DELETE_ITEM', payload: item});
    
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />
        <button> this button will route you to the add new event form</button>
        <h1> this is where we'll display user specific events </h1>


        {this.props.store.event.event.map((event) =>{
                return <div key={event.event_id}> {event.title} {event.address}
                {event.description} {event.date} {event.image_url} 
                <button onClick={(event) => this.deleteEvent(event.id)}>Delete</button>    
                 <button> update</button>


  

                </div>
              })}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
