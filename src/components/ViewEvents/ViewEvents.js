import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewEvents extends Component {
  // this component displays all events from the database. 


  render() {
    return (
      <div>
     <h1> whats up from the view events page </h1>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect()(ViewEvents);
