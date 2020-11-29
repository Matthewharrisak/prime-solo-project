import React from 'react';
import { connect } from 'react-redux';

const ForumCatagories = (props) => (
  <a
    // This button shows up in the Header, it directly routes to the Forum  

    className='logoutButton'
    href='http://localhost:4567/'
  >
   Forum
  </a>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(ForumCatagories );
