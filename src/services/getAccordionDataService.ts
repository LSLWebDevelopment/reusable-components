import axios from "axios";
import type { AccordionEntity } from "../entities/AccordionEntity";

interface AccordionDataResponse {
  id: number;
  title: string;
  description: string;
}

export async function getAccordionDataService(): Promise<AccordionEntity[]> {
  const response = await axios.get<AccordionDataResponse[]>(
    "http://localhost:3000/accordionData"
  );

  const data: AccordionEntity[] = response.data.map(
    (item: AccordionDataResponse) => {
      return {
        accordionId: item.id,
        accordionTitle: item.title,
        accordionDescription: item.description,
      };
    }
  );

  return data;
}
