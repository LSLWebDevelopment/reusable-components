import axios from "axios";
import type { DropdownEntity } from "../entities/ComponentsEntities";

export async function getDropdownDataService(): Promise<DropdownEntity[]> {
  const response = await axios.get("http://localhost:3000/dropdownData");
  return response.data;
}
