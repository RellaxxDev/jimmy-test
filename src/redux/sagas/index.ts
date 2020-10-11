import { fork } from "redux-saga/effects";
import { loadManufacturesWatcher } from "./LoadManufacturesSaga";
import { loadModelsWatcher } from "./LoadModelsSaga";

export default function* rootSaga() {
  yield fork(loadManufacturesWatcher);
  yield fork(loadModelsWatcher);
}
