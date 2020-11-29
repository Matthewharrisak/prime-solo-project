import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* eventSaga(){
    yield takeLatest('GOT_EVENTS' , fetchEvent)
    yield takeEvery('NEW_EVENT' , setEvent)
    yield takeEvery('DELETE_ITEM' , deleteItem)
    yield takeEvery('UPDATE_ITEM' , updateItem)
    yield takeEvery('GET_DETAILS' , getDetails)
    yield takeLatest('USER_EVENT' , userEvent)

}

//  SAGA to get event from Event table. 
function* fetchEvent() {
    try{
        const eventResponse = yield axios.get('/api/events');
        yield put({type: 'SET_EVENT', payload: eventResponse.data})
    }catch(error) {
        console.log('error from fetch event saga' ,error);
     }
}

// SAGA to fetch event data dependent on the event_id
function* getDetails(action) {
  console.log(action);
   try{
      const eventResponse = yield axios.get(`/api/events/${action.payload.event_id}`);
      yield put({type: 'SET_EVENT', payload: eventResponse.data})
  }catch(error) {
   }
}

// SAGA to get event data depending on user_id
function* userEvent(action) {
  console.log('in the user SAGA');
   try{
    const eventResponse = yield axios.get(`/api/events/userEvent/${action.payload.user_id}`);
    yield put({type: 'SET_EVENT', payload: eventResponse.data})
  }catch(error) {
   }
}

// SAGA to send axios post data to our server
function* setEvent(action) {
    try{
        yield axios.post('/api/events', action.payload)
    } catch (error){
        console.log('error in the post' , error);
    }
}

function* deleteItem(action) {
    yield console.log('DELETED ITEM:', action)
    try {
      yield axios.delete(`/api/events/${action.payload}`);
    } catch (error) {
      console.log('ERROR in axios delete', error);
    }
  }


  function* updateItem(action) {
    yield console.log('UPDATING  ITEM:', action)
    try {
      yield axios.put(`/api/events/${action.payload.event_id}` , action.payload);
    } catch (error) {
      console.log('ERROR in axios update', error);
    }
  }




export default eventSaga;