import React, { useReducer, useMemo, useCallback, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import get from 'lodash/get'
import { reducer } from './reducer';

const EventContext = createContext(null);

const DEFAULT_STATE = {
    events: []
}

export const EventsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

    const events = useMemo(() => get(state, 'events'), [state]);

    const getEvents = useCallback(async () => {
        const response = await axios.get('/api/events');
        const { data } = response;
        dispatch({ type: 'setEvents', events: data });
    }, [])

    const value = {
        events,

        // actions
        getEvents
    };

    return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

export const useEventsContext = () => useContext(EventContext);

export const withEventsContextProvider = Component => props => {
    return <EventsContextProvider>
        <Component {...props} />
    </EventsContextProvider>
}