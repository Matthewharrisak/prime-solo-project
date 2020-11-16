import { combineReducers } from 'redux';

const event =  (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENT':
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    event,
    
  });
