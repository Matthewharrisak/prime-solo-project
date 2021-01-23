import React, { useEffect } from 'react';
import { map, get } from 'lodash'
import { withEventsContextProvider, useEventsContext } from '../../contextProviders'
import { EventItem } from '../EventItem';

import Grid from '@material-ui/core/Grid';

const LandingPageTest = () => {
    const { events, getEvents } = useEventsContext();

    useEffect(() => {
        getEvents();
    }, []);

    if (!events.length) return null

    return <Grid>

        <h1 className='whatsHappening'>Upcoming Events</h1>
        {map(events, (event) => {
            return <EventItem
                key={get(event, 'event_id', get(event, 'title'))}
                event={event} />
        })}

    </Grid>

}

export default withEventsContextProvider(LandingPageTest)