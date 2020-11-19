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
                return  <table key={event.event_id} id='landingTable'> 
                <tr>
                  <th> TITLE!!!</th>
                  <th> address</th>
                  <th> description</th>
                  <th> Image</th>
               </tr>
               <tr>
               <td> {event.title}</td>  
               <td> {event.address}</td>  
                <td> {event.description} </td>
              <td>{event.date} </td>  
               <td> {event.image_url}  </td> 
               </tr>
               


                </table>
              })}


      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(ViewEvents);
