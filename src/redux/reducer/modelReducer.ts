import { SET_MODELS, ModelActionTypes, RESET_MODELS } from "../../types/actions";
import { IModel } from "../../types/IModel";

const initialState: IModel[] = [];

export const modelReducer = (state = initialState, action: ModelActionTypes) => {
  switch (action.type) {
    case SET_MODELS:
      return [ ...action.models ];
    case RESET_MODELS:
      return initialState;
    default:
      return state;
  }
};
