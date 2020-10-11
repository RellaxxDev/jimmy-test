import { IModel } from "../../types/IModel";
import { AppActions, GET_MODELS, SET_MODELS, RESET_MODELS } from "../../types/actions";

export const getModels = (make: string): AppActions => ({
  type: GET_MODELS,
  make
});

export const setModels = (models: IModel[]): AppActions => ({
  type: SET_MODELS,
  models,
});

export const resetModels = (): AppActions => ({
  type: RESET_MODELS
});
