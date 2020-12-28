import { all, fork, call, put, takeEvery, delay } from "redux-saga/effects";

function* increseRequestAction() {
  console.log('GlobalSaga OPEN')
  yield takeEvery("INCREMENT_REQUEST", countRequestActionSaga);
}

function* decreseRequestAction() {
  console.log('GlobalSaga OPEN')
  yield takeEvery("DECREMENT_REQUEST", countRequestActionSaga)
}

function* countRequestActionSaga(action) {

  yield delay(1000);
  console.log("1초 지났습니다.");
  console.log('4. actionCounter.js => case => globalSaga =>countAction');

  if (action.type === "INCREMENT_REQUEST") {
    console.log('5-1. INCREMENT actoin called');
    yield put({ type: "INCREMENT", payload: action.payload });
    console.log('7-1. countAction => if');
    console.log("숫자를 증가시켰습니다.");
  } else {
    yield put({ type: "DECREMENT", payload: action.payload });
    console.log('5-2. countAction => if');
    console.log("숫자를 감소시켰습니다.");
  }
}

export function* globalSaga() {
  yield all([
    increseRequestAction(),
    decreseRequestAction()
  ])
}
