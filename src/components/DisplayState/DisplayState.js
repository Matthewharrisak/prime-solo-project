import React, { useState, useEffect, useReducer } from 'react';
import {
    withEventsContextProvider,
    useEventsContext,
  } from "../../contextProviders";
  import { EventItem } from "../EventItem";
  import { map, get } from "lodash";


function DisplayState() {

    useEffect(() => {
        getEvents();
        console.log('events from the displaySTATE!!!!' , events);
        }, []);

  const { events, getEvents } = useEventsContext();
  const [selectedLocation, setselectedLocation] = useState('all');


  return (
    <div>
       <button onClick={() => setselectedLocation('all')}>All</button>
        <button onClick={() => setselectedLocation('MN')}>MN</button>
        <button onClick={() => setselectedLocation('OR')}>OR</button>
        <button onClick={() => setselectedLocation('AZ')}>AZ</button>
         {selectedLocation} events
         
         {map(events, (event) => {

             if (selectedLocation === ('all')) { 
          return (
            <EventItem
              key={get(event, "event_id", get(event, "title"))}
              event={event}
            />
          )
          } else if (event.address_state === selectedLocation ) {
          return (
            <EventItem
              key={get(event, "event_id", get(event, "title"))}
              event={event}
            />
          );}

        })}
      
         </div>
  );
}

export default withEventsContextProvider(DisplayState);
