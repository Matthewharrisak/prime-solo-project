import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


// MATERIAL UI COMPONENTS
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import DialogBox from '../DialogBox/DialogBox';
import Button from '@material-ui/core/Button';


class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  state={
    eventToUpdate: []
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'USER_EVENT' , payload: this.props.store.user.id});
  }

  deleteEvent = (event) => {
    console.log('whats up, were deleting suttf', event.event_id);
    this.props.dispatch({type: 'DELETE_ITEM', payload: event});
    window.location.reload(false);  
   }

  updateEvent = (funEvent) => {
    console.log('funevent ID?' , funEvent)
    this.setState({
    eventToUpdate: [funEvent]
    });
  console.log(this.state);
  
  };

 

   goToEventForm = () => {
     this.props.history.push('/NewEventForm');
   }


  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <LogOutButton className="log-in" /> */}


        <button onClick={this.goToEventForm}> add new event </button>
        <h1> Your Events! </h1>

          
       {this.props.store.event.event.map((funEvent) =>{
                return <div key={funEvent.event_id}> 
                 

                  <ListItemText primary={funEvent.title}/>
                  <ListItemText primary={funEvent.address}/>
                  <img src={funEvent.image_url} alt="golf"/> 
                  <ListItemText primary={funEvent.description}/>
                  <ListItemText primary={funEvent.date}/>
                  <Button onClick={() => this.deleteEvent(funEvent.event_id)}>Delete</Button>  
                 <DialogBox funEvent = { funEvent }/>                  
                  </div>
         })} 
            
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
