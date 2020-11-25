import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';


// Material UI COMPONETNS
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class LandingPage extends Component {
 
  
// On page load - this function will load content from the DB table "events"
componentDidMount = () => {
    this.props.dispatch({ type: 'GOT_EVENTS'});
  }

  // fires off on click event - routes user to "EventDetails" page where they view details for specific event. 
  // Payload - is tied to the "event_id" which is a property of our event object.
  moreInfo = (moreInfo) => {
    this.props.history.push('/EventDetails');
    this.props.dispatch({type: 'GET_DETAILS', payload: moreInfo});
    console.log(moreInfo);
  }

  render() {
    return (
      <div className="container">

  <div>
     <h1> Welcome To CoolShowsCalender.com</h1>
     
     {this.props.store.event.event.map((event) =>{
                return  <ListItem key={event.event_id} id='landingTable'> 
                
                 <ListItemText primary= {event.title} />
                 <ListItemText primary= {event.date} />
                 <Button variant="contained" color="secondary"
                   onClick={() => this.moreInfo(event)}>
                   more info!!
                  </Button>
                   </ListItem>       
       })}

      </div> 

        <div className="grid">
          <div className="grid-col grid-col_8">
          </div>

          <div className="grid-col grid-col_4">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
