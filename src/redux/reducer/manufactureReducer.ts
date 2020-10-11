import { IManufacture } from "../../types/IManufacture";
import { SET_MANUFACTURES, ManufactureActionTypes } from "../../types/actions";

const initialState: IManufacture[] = [];

export const manufactureReducer = (state = initialState, action: ManufactureActionTypes) => {
  switch (action.type) {
    case SET_MANUFACTURES:
      return [ ...action.manufactures ];
    default:
      return state;
  }
};
