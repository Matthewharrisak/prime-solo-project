import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h1 className='whatsHappening'> About:</h1>
      <p>  Cool Calendar Shows DOT COM is a user generated community designed to give artists
         a place to advertise their events and connect with friends! Upon landing, users are able to see all events being advertised and access specific event details. 
         While only registered users can make posts and access the Forum, registration is open to everyone! </p>
         <p> 
           This app was built using React, Redux, PostgresSQL, Express, Node.JS, and the forum was powered by NodeBB.
         </p>
    </div>
  </div>
);

export default AboutPage;
