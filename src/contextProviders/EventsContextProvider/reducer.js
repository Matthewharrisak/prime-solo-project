export const reducer = (state, actions) => {
    switch (actions.type) {
        case 'setEvents':
            return {
                ...state,
                events: [...state.events, ...actions.events]
            }
        default:
            return state;
    }
}