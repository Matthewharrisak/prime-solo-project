import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Styling and NPM components
// import Iframe from 'react-iframe'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class EventDetails extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload
    componentDidMount = () => {
     this.props.dispatch({ type: 'GET_DETAILS'});
    
      
    } 
  render() {
    return (
      <div>
          
              <h1> Full Details!! </h1>
             
              {this.props.store.event.event.map((event) =>{
                return <ListItem key={event.event_id} id='landingTable'> 

                <ListItemText primary={event.title}/>
                <ListItemText primary={event.address}/>
                <ListItem> <iframe src={event.image_url} alt="golf"/> </ListItem> 
                <ListItemText primary={event.description}/>
                <ListItemText primary={event.date}/>
                </ListItem>  
            
             

                

                {/* </div> */}
              })}
              
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(EventDetails);
