import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* eventSaga(){
    yield takeLatest('GOT_EVENTS' , fetchEvent)
    yield takeEvery('NEW_EVENT' , setEvent)
    yield takeEvery('DELETE_ITEM' , deleteItem)
    yield takeEvery('UPDATE_ITEM' , updateItem)
}


function* fetchEvent() {
    try{
        const eventResponse = yield axios.get('/api/events');
        yield put({type: 'SET_EVENT', payload: eventResponse.data})
    }catch(error) {
        console.log('error from fetch event saga' ,error);
     }
}

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
      yield axios.put(`/api/events/${action.payload}`);
    } catch (error) {
      console.log('ERROR in axios update', error);
    }
  }



export default eventSaga;