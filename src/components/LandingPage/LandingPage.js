import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// Material UI COMPONETNS
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '../MIPaper/MIPaper';
import Grid from '@material-ui/core/Grid';
import SimplePaper from '../MIPaper/MIPaper';

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
         <Grid container spacing={1}></Grid>

  <div>
     <h1> Heres whats happening!!</h1>
     
    {this.props.store.event.event.map((event) =>{
                return  <ListItem key={event.event_id} id='landingTable'> 
                 <Grid item lg={6}
                 spacing={3}
                   container
                   direction="row"
                   justify="center"
                   alignItems="center">
                 <ListItemText primary= {event.title} />
                 </Grid>
                 
                 <Grid item lg={6}
                 spacing={3}
                  //  container
                  //  direction="row"
                   justify="right"
                   alignItems="center">
                 <ListItemText primary= {event.date} />
                 </Grid>
                 
                 {/* <Grid item xs={3}> */}
                 <ListItem/>
                 <Button variant="contained" color="secondary"
                   onClick={() => this.moreInfo(event)}>
                   more info!!
                  </Button>
                  {/* </Grid> */}
                   </ListItem>       
       })}

      </div> 
      </div>
    );
    
      }
}

export default connect(mapStoreToProps)(LandingPage);
