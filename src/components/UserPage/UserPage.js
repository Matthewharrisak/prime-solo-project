import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NewEventForm from '../NewEventForm/NewEventForm';
import UpdateEvent from '../UpdateEvent/UpdateEvent';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  state={
    eventToUpdate: [],
    displayForm: false
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'GOT_EVENTS'});
  }

  deleteEvent = (event) => {
    console.log('whats up, were deleting suttf', event.event_id);
    this.props.dispatch({type: 'DELETE_ITEM', payload: event});
   }

  updateEvent = (funEvent) => {
  
    this.setState({
    eventToUpdate: [funEvent]
    });
    // console.log('whats up , were updating stuff!!!' , event.event_id);
    // this.props.dispatch({type: 'UPDATE_ITEM', payload: event})
   };

   displayUpdateForm =() => {
     if(this.state.displayForm) {
       return <UpdateEvent />;
     }
   }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />
        <button> this button will route you to the add new event form</button>
        <h1> this is where we'll display user specific events </h1>

        {/* <NewEventForm/> */}
       {this.state.eventToUpdate.map(funEvent => { return <UpdateEvent funEvent = { funEvent }/>})}
       
        {this.props.store.event.event.map((funEvent) =>{
                return <div key={funEvent.event_id}> {funEvent.title} {funEvent.address}
                {funEvent.description} {funEvent.date} {funEvent.image_url} 


                <button onClick={(event) => this.deleteEvent(funEvent.event_id)}>Delete</button>    
                <button onClick={() => this.updateEvent(funEvent)}> update</button>


                </div>
              })}
              
            
      </div>
    );
  }
}


// { return <UpdateEvent funEvent = { funEvent }/> }
// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
