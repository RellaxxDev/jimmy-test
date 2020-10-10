import { ITableData } from "./ITableData";

export interface IManufacture extends ITableData {
  id: number;
  name: string;
  country: string;
}
