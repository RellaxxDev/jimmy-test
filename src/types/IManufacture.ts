import { ITableData } from "./ITableData";

export interface IManufacture extends ITableData {
  id: string;
  name: string;
  country: string;
}
