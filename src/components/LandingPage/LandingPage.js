import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import ViewEvents from '../ViewEvents/ViewEvents';
import EventDetails from '../EventDetails/EventDetails';

// Material UI COMPONETNS
import Button from '@material-ui/core/Button';


class LandingPage extends Component {
  // state = {
  //   heading: 'Class Component',
  // };

componentDidMount = () => {
    this.props.dispatch({ type: 'GOT_EVENTS'});
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  moreDetails = (moreInfo) => {
    this.props.history.push('/EventDetails');
    this.props.dispatch({type: 'GET_DETAILS', payload: moreInfo});
    console.log(moreInfo);
  }

  render() {
    return (
      <div className="container">
        {/* <h2>{this.state.heading}</h2> */}
  <div>
     <h1> Welcome To CoolShowsCalender.com</h1>
     
     {this.props.store.event.event.map((event) =>{
                return  <table key={event.event_id} id='landingTable'> 
                <tbody>
                <tr>
                  <th > TITLE!!!</th>
                   {/* <th > address</th>
                  <th> description</th>
                  <th > Image</th>  */}
               </tr>
               <tr>
               <td> {event.title}</td>  

               <Button variant="contained" color="secondary"

               onClick={() => this.moreDetails(event)}>
        more info!!
      </Button>

               {/* <button onClick={() => this.moreDetails(event)}> more info!! </button> */}

               {/* <td> {event.address}</td>  
                <td> {event.description} </td>
              <td>{event.date} </td>  
               <td> {event.image_url}  </td>  */}
               </tr>
               </tbody>
             </table>
              })}

      </div> 

        <div className="grid">
          <div className="grid-col grid-col_8">
          </div>

          <div className="grid-col grid-col_4">
            {/* <RegisterForm /> */}

            {/* <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
