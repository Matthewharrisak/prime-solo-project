import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Iframe from 'react-iframe'



class NewEventForm extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload
    componentDidMount = () => {
      this.props.dispatch({ type: 'GOT_EVENTS'});
    } 
  render() {
    return (
      <div>
          <form>
              <h1> this is where we'll add the display events form </h1>
          </form>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewEventForm);
