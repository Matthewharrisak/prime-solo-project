import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Iframe from 'react-iframe';
//Styling and NPM components
// import Iframe from 'react-iframe'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class EventDetails extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload -- gets specific details from DB
    componentDidMount = () => {
     this.props.dispatch({ type: 'GET_DETAILS'});
    
      
    } 

    displayBandcamp = () => {
      console.log(this.props.store.event.event[0].bandcamp);
      
      return {__html: this.props.store.event.event[0].bandcamp}
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

                 <div dangerouslySetInnerHTML={this.displayBandcamp()}></div>

                </div>  
    
              })}
              
{/*             
              <Iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3651962689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://terminationdust.bandcamp.com/album/growing-down">Growing Down 
              by Termination Dust</a></Iframe> */}

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(EventDetails);
