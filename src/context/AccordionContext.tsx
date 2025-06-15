import { createContext, useCallback, useState, type ReactNode } from "react";
import type { AccordionEntity } from "../entities/ComponentsEntities";
import { getAccordionDataService } from "../services/getAccordionDataService";

interface AccordionContextEntity {
  accordionData: AccordionEntity[];
  fetchAccordionData: () => void;
}

interface AccordionProviderProps {
  children: ReactNode;
}

export const AccordionContext = createContext<AccordionContextEntity | null>(
  null
);

export function AccordionProvider({ children }: AccordionProviderProps) {
  const [accordionData, setAccordionData] = useState<AccordionEntity[]>([]);

  const fetchAccordionData = useCallback(async () => {
    const response = await getAccordionDataService();
    setAccordionData(response);
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        accordionData,
        fetchAccordionData,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}
