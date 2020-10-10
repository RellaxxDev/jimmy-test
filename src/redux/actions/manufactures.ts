import { IManufacture } from "../../types/IManufacture";
import {AppActions, LOAD_MANUFACTURES, SET_MANUFACTURES} from "../../types/actions";

export const loadManufactures = (): AppActions => ({
  type: LOAD_MANUFACTURES,
});

export const setManufactures = (manufactures: IManufacture[]): AppActions => ({
  type: SET_MANUFACTURES,
  manufactures
});


