import { IManufacture } from "../types/IManufacture";
import {IModel} from "../types/IModel";

const API_LINK = "https://vpic.nhtsa.dot.gov/api/vehicles";

const manufacturesNormalization =
  ({ Mfr_ID: id, Mfr_CommonName: name, Country: country }:
     { Mfr_ID: string; Mfr_CommonName: string, Country: string; }): IManufacture => ({ id, name, country });

const modelsNormalization =
  ({ VehicleTypeId: id, VehicleTypeName: name }:
     { VehicleTypeId: string; VehicleTypeName: string }): { id: string; name: string } => ({ id, name });

const makersNormalization =
  ({ Make_ID: id, Make_Name: name }:
     { Make_ID: string; Make_Name: string }): {id: string; name: string} => ({ id, name });

export const getManufactures = async (): Promise<IManufacture[]> => {
  const request = new Request(`${API_LINK}/GetAllManufacturers?format=json`, {
    method: "GET"
  });
  const { Results } = await fetch(request).then((res) => res.json());
  return Results.map(manufacturesNormalization);
};

const getModelsForMakeId = async (id: string): Promise<IModel[]> => {
  const requestMakers = new Request(`${API_LINK}/GetVehicleTypesForMakeId/${id}?format=json`, {
    method: "GET",
  });
  const { Results } = await fetch(requestMakers).then((res) => res.json());
  return Results.map(modelsNormalization);
};

export const getModels = async (id: string): Promise<IModel[]> => {
  const requestMakers = new Request(`${API_LINK}/GetMakeForManufacturer/${id}?format=json`, {
    method: "GET",
  });
  const { Results } = await fetch(requestMakers).then((res) => res.json());
  const makers = Results.map(makersNormalization);

  const promises: Promise<IModel[]>[] = [];
  for (const makerObject of makers) {
    const { id: makeId } = makerObject;
    promises.push(getModelsForMakeId(makeId));
  }

  return await Promise
    .all(promises)
    .then(response => {
      const result: IModel[] = [];
      for (let i = response.length - 1; i >= 0; i--) {
        result.push(...response[i]);
      }
      return result;
    });
};
