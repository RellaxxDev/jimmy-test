import { IManufacture } from "./IManufacture";

export const SET_MANUFACTURES = "SET_MANUFACTURES";
export const LOAD_MANUFACTURES = "LOAD_MANUFACTURES";

export interface ISetManufactures {
  type: typeof SET_MANUFACTURES,
  manufactures: IManufacture[]
}

export interface ILoadManufactures {
  type: typeof LOAD_MANUFACTURES
}

export type ManufactureActionTypes =
  | ILoadManufactures
  | ISetManufactures;

export type AppActions = ManufactureActionTypes;
