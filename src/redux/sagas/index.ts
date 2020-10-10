import { fork } from "redux-saga/effects";
import { loadManufacturesWatcher } from "./LoadManufacturesSaga";

export default function* rootSaga() {
  yield fork(loadManufacturesWatcher);
}
