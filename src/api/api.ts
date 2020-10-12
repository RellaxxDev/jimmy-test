import { IManufacture } from "../types/IManufacture";
import { IModel } from "../types/IModel";

const API_LINK = "https://vpic.nhtsa.dot.gov/api/vehicles";

const manufacturesNormalization = ({ Mfr_ID: id, Mfr_CommonName: name, Country: country }: { Mfr_ID: string; Mfr_CommonName: string; Country: string }): IManufacture => ({ id, name, country });

const modelsNormalization = ({ VehicleTypeId: id, VehicleTypeName: name }: { VehicleTypeId: string; VehicleTypeName: string }): { id: string; name: string } => ({ id, name });

const makersNormalization = ({ Make_ID: id, Make_Name: name }: { Make_ID: string; Make_Name: string }): { id: string; name: string } => ({ id, name });

export const getManufactures = async (): Promise<IManufacture[]> => {
  const request = new Request(`${API_LINK}/GetAllManufacturers?format=json`, {
    method: "GET",
  });
  return get(request, manufacturesNormalization);
};

const getModelsForMakeId = async (id: string): Promise<IModel[]> => {
  const request = new Request(`${API_LINK}/GetVehicleTypesForMakeId/${id}?format=json`, {
    method: "GET",
  });
  return get(request, modelsNormalization);
};

export const getModels = async (id: string): Promise<IModel[]> => {
  const request = new Request(`${API_LINK}/GetMakeForManufacturer/${id}?format=json`, {
    method: "GET",
  });
  const makers = await get(request, makersNormalization);

  const promises: Promise<IModel[]>[] = [];
  for (const makerObject of makers) {
    const { id: makeId } = makerObject;
    promises.push(getModelsForMakeId(makeId));
  }

  return await Promise.all(promises).then((response) => {
    const result: IModel[] = [];
    for (let i = response.length - 1; i >= 0; i--) {
      result.push(...response[i]);
    }
    return result;
  });
};

const get = async <T>(request: Request, normalizeFunction?: (...args: any[]) => T): Promise<T[]> => {
  const { Results } = await fetch(request)
    .then((result) => {
      if (!result.ok) {
        throw Error(result.statusText);
      }
      return result.json();
    })
    .catch((er) => {
      console.error(er);
      return { Results: [] };
    });
  return Results.map(normalizeFunction);
};
