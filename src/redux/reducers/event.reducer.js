import { combineReducers } from 'redux';

const event =  (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENT':
            return action.payload;
        default:
            return state;
    }
}

// const userEvent =  (state = [], action) => {
//     switch (action.type) {
//         case 'USER_EVENT':
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default combineReducers({
    event,
    // userEvent
  });
