import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD_MANUFACTURES } from "../../types/actions";
import { loadManufactures } from "../../api";
import { setManufactures } from "../actions/manufactures";

export function* loadManufacturesWatcher() {
  yield takeLatest(LOAD_MANUFACTURES, loadManufacturesFlow);
}

function* loadManufacturesFlow() {
  const manufactures = yield call(loadManufactures);
  console.log("----", manufactures);
  yield put(setManufactures(manufactures));
}
