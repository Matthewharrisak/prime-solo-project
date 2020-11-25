import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Iframe from 'react-iframe';
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
                return <div key={event.event_id} id='landingTable'> 

                <ListItemText primary={event.title}/>
                <ListItemText primary={event.address}/>
                 <img src={event.image_url} alt="golf"/> 
                <ListItemText primary={event.description}/>
                <ListItemText primary={event.date}/>
                <iFrame src={event.bandcamp}/>  

                </div>  
    


                {/* </div> */}
              })}
              
            
             

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(EventDetails);
