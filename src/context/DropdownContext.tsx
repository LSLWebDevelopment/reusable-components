import { createContext, useCallback, useState, type ReactNode } from "react";
import type { DropdownEntity } from "../entities/ComponentsEntities";
import { getDropdownDataService } from "../services/getDropdownDataService";

interface DropdownContextEntity {
  dropdownData: DropdownEntity[];
  selectedColor: string;
  onColorSelected: (color: string) => void;
  fetchDropdownData: () => void;
}

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownContext = createContext<DropdownContextEntity | null>(
  null
);

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [dropdownData, setDropdownData] = useState<DropdownEntity[]>([]);
  const [selectedColor, setSelectedColor] = useState("");

  const onColorSelected = (colorSelectd: string) => {
    setSelectedColor(colorSelectd);
  };

  const fetchDropdownData = useCallback(async () => {
    const response = await getDropdownDataService();
    setDropdownData(response);
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        dropdownData,
        fetchDropdownData,
        onColorSelected,
        selectedColor,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
