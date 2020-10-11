import { IManufacture } from "../../types/IManufacture";
import { AppActions, GET_MANUFACTURES, SET_MANUFACTURES } from "../../types/actions";

export const getManufactures = (): AppActions => ({
  type: GET_MANUFACTURES,
});

export const setManufactures = (manufactures: IManufacture[]): AppActions => ({
  type: SET_MANUFACTURES,
  manufactures,
});
