import { axios } from "../config";

import { Element } from "./types";

export async function getElements(): Promise<Element[]> {
  const { data } = await axios.get<Element[]>("/elements");

  return data;
}
