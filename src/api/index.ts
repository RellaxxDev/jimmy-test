import { IManufacture } from "../types/IManufacture";

const manufacturesNormalization =
  ({ Mfr_ID: id, Mfr_CommonName: name, Country: country }:
     { Mfr_ID: number; Mfr_CommonName: string, Country: string; }): IManufacture => ({ id, name, country });

export const loadManufactures = async (): Promise<IManufacture[]> => {
  const request = new Request("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json", {
    method: "GET",
  });
  const { Results } = await fetch(request).then((res) => res.json());
  console.log(Results);

  return Results.map(manufacturesNormalization);
};
