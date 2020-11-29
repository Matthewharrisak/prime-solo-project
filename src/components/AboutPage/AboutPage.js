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
                  a place to advertise their events and connect with friends! Upon landing, users are able to see all events being shared and access specific event details. 
                  While only registered users can make posts and access the Forum, registration is open to everyone! 
              </p>
               <p> 
                  This app was built using React, Redux, PostgresSQL, Express, Material-UI, Node.JS, and the forum is powered by NodeBB.
              </p>
               <p>
                   I would like to thank my instructor Casie Siekman, the entirety of the Ukkonen Cohort, Kris Szafranski and the rest of Prime Digital Academy for sharing their knowledge and expertise.  
              </p> 
    </div>
  </div>
);

export default AboutPage;
