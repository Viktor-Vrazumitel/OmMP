import axios from 'axios';
import { call, put,  takeLatest, takeEvery } from 'redux-saga/effects'
import { URL_BASE } from '../../config';
import { searchAction } from '../actions/searchAction';
import { SEARCH_ROOM_S } from '../type/typeSaga';


const searchBaseRoom =(title) => {
  return  axios.get(`${URL_BASE}/search/${title}`)
    .then(res=> res.data)
}
function* searchRoom(action) {
   try {
      const room = yield call(searchBaseRoom, action.payload);
      console.log(action);
      yield put(searchAction(room));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}




function* searchSaga() {
  yield takeEvery(SEARCH_ROOM_S, searchRoom);
}

export default searchSaga;