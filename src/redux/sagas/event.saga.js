import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* eventSaga(){
    yield takeLatest('GOT_EVENTS' , fetchEvent)
}


function* fetchEvent() {
    try{
        const eventResponse = yield axios.get('/api/events');
        yield put({type: 'SET_EVENT', payload: eventResponse.data})
    }catch(error) {
        console.log('error from fetch event saga' ,error);
     }
}