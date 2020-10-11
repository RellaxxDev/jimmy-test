import { IManufacture } from "./IManufacture";
import { IModel } from "./IModel";

export const GET_MODELS = "GET_MODELS";
export const SET_MODELS = "SET_MODELS";
export const RESET_MODELS = "RESET_MODELS";
export const GET_MANUFACTURES = "GET_MANUFACTURES";
export const SET_MANUFACTURES = "SET_MANUFACTURES";

export interface IGetModels {
  type: typeof GET_MODELS,
  make: string
}

export interface ISetModels {
  type: typeof SET_MODELS,
  models: IModel[]
}

export interface IResetModels {
  type: typeof RESET_MODELS
}

export interface IGetManufactures {
  type: typeof GET_MANUFACTURES
}

export interface ISetManufactures {
  type: typeof SET_MANUFACTURES,
  manufactures: IManufacture[]
}

export type ManufactureActionTypes =
  | IGetManufactures
  | ISetManufactures;

export type ModelActionTypes =
  | IGetModels
  | ISetModels
  | IResetModels;

export type AppActions = ManufactureActionTypes | ModelActionTypes;
