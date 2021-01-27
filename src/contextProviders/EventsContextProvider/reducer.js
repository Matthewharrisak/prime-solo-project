import filter from "lodash/filter";

export const reducer = (state, actions) => {
  switch (actions.type) {
    case "setEvents":
      return {
        ...state,
        events: [...state.events, ...actions.events],
      };
    case "setUserEvents":
      return {
        ...state,
        userEvents: [...state.userEvents, ...actions.userEvents],
      };
    case "deleteUserEvent":
      return {
        ...state,
        events: filter(state.events, (event) => event.id !== actions.eventId),
        userEvents: filter(
          state.userEvents,
          (event) => event.id !== actions.eventId
        ),
      };
    default:
      return state;
  }
};
