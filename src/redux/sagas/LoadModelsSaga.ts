import { takeLatest, call, put } from "redux-saga/effects";

import { GET_MODELS, IGetModels } from "../../types/actions";
import { getModels } from "../../api";
import { setModels } from "../actions/modelActions";

export function* loadModelsWatcher() {
  yield takeLatest(GET_MODELS, loadModelsFlow);
}

function* loadModelsFlow(action: IGetModels) {
  const models = yield call(getModels, action.make);
  yield put(setModels(models));
}
