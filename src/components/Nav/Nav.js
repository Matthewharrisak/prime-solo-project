import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ResponsiveForm from '../NewEventForm/ResponsiveForm';
import ForumCatagories from '../ForumCatagories/ForumCatagories';
import Grid from '@material-ui/core/Grid';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Grid>
      <Link to="/home">
        <h2 className="nav-title"> Cool Shows Calendar DOT COM </h2>
      </Link>
    
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
          
         
            <ForumCatagories className="nav-link"/>
            <ResponsiveForm className="nav-link" />
            <LogOutButton className="nav-link" />

          </>
        )}
     
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
      </Grid>

    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
