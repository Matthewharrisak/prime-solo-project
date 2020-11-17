import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ViewEvents extends Component {
  // this component displays all events from the database. 


  render() {
    return (
      <div>
     <h1> whats up from the view events page </h1>
     
     {this.props.store.event.event.map((event) =>{
                return <div key={event.event_id}> {event.title} {event.address}
                {event.description} {event.date} {event.image_url} 


                {/* <Iframe style="border: 0; width: 100%; height: 120px;"
               src="https://bandcamp.com/EmbeddedPlayer/album=3651962689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
              seamless><a href="https://ggrraavvee.bandcamp.com/album/goodbye-nowhere">
              Growing Down by 
            Termination Dust</a></Iframe> */}

                </div>
              })}


      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(ViewEvents);
