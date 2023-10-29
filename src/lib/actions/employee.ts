import { gqlCall } from "../utils";

export interface IActionEmployee {
  name: string;
  position: string;
  picture: string;
}

export async function fetchAllEmployee(): Promise<IActionEmployee[]> {
  const result = await gqlCall(`{employees {name, picture, position}}`);
  if (result?.employees) return result?.employees;

  throw new Error("Failed to fetch employees data");
}
