import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* forumSaga(){
 console.log('whats up from forumSaga');
}


function* fetchCatagories() {
    try{
        const forumResponse = yield axios.get('/https://community.nodebb.org/api/category/{category_id}/{slug}/{topic_index}');
        yield put({type: 'SET_CATAGORIES', payload: forumResponse.data})
    }   catch(error) {
        console.log('error from fetch event saga' ,error);
     }
}

export default forumSaga;