import React, { useEffect } from "react";
import styled from "styled-components";
import { map, get } from "lodash";
import {
  withEventsContextProvider,
  useEventsContext,
} from "../../contextProviders";
import { EventItem } from "../EventItem";

import Grid from "@material-ui/core/Grid";

const LandingPageTest = () => {
  const { events, getEvents } = useEventsContext();

  useEffect(() => {
    getEvents();
  }, []);

  if (!events.length) return null;

  return (
    <StyledContainer>
      <Grid>
        <StyledHeader>Upcoming Events</StyledHeader>
        {map(events, (event) => {
          return (
            <EventItem
              key={get(event, "event_id", get(event, "title"))}
              event={event}
            />
          );
        })}
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 45px;
  text-align: center;
  border-radius: 4px;
`;

const StyledHeader = styled.h1`
  border-color: #fcf6b1;
  border-radius: solid black;
  border-radius: 4px;
  font-size: 3.7rem;
  font-style: italic;
  text-shadow: 1px 5px #000000;
  color: #f72c25;
  letter-spacing: 3px;
`;

export default withEventsContextProvider(LandingPageTest);
