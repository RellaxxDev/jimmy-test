import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { manufactureReducer } from "../reducer/manufactureReducer";
import { modelReducer } from "../reducer/modelReducer";
import rootSaga from "../sagas";

export const rootReducer = combineReducers({
  manufactures: manufactureReducer,
  models: modelReducer
});

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
