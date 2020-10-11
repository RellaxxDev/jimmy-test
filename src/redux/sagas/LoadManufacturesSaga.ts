import { takeLatest, call, put } from "redux-saga/effects";

import { GET_MANUFACTURES } from "../../types/actions";
import { getManufactures } from "../../api";
import { setManufactures } from "../actions/manufactureActions";

export function* loadManufacturesWatcher() {
  yield takeLatest(GET_MANUFACTURES, loadManufacturesFlow);
}

function* loadManufacturesFlow() {
  const manufactures = yield call(getManufactures);
  yield put(setManufactures(manufactures));
}
