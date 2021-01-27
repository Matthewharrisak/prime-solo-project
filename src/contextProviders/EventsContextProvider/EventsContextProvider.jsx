import React, { useReducer, useMemo, useCallback, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import get from 'lodash/get'
import { reducer } from './reducer';

const EventContext = createContext(null);

const DEFAULT_STATE = {
    events: [],
    userEvents: []
}

/**
 * 
 * @param {children} param
 */

export const EventsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

    const events = useMemo(() => get(state, 'events'), [state]);
    const userEvents = useMemo(() => get(state, 'userEvents'), [state])

    const getEvents = useCallback(async () => {
        //! EVENT IDs ARE NOT RETURNED
        const response = await axios.get('/api/events');
        const { data } = response;
        dispatch({ type: 'setEvents', events: data });
    }, []);

    const getUserEvents = useCallback(async userId => {
        const response = await axios.get(`/api/events/userEvent/${userId}`);
        const { data } = response;
        dispatch({ type: 'setUserEvents', userEvents: data })
    }, []);

    const deleteUserEvent = useCallback(async eventId => {
        // TODO prev iteration requires entire event. 
        // TODO we should probably just send in the eventId?
        await axios.delete(`/api/events/${eventId}`);
        dispatch({ type: 'deleteUserEvent', eventId })
    }, []);

    const value = {
        events,
        userEvents,

        // actions
        getEvents,
        getUserEvents
    };

    return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

export const useEventsContext = () => useContext(EventContext);

export const withEventsContextProvider = Component => props => {
    return <EventsContextProvider>
        <Component {...props} />
    </EventsContextProvider>
}