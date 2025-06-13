import { useEffect } from "react";
import { useAccordionContext } from "./hooks/useAccordionContext";
import { AccordionPage } from "./Pages/AccordionPage";
import { DropdownPage } from "./Pages/DropdownPage";
import { useDropdownContext } from "./hooks/useDropdownContext";

export function App() {
  const { fetchAccordionData } = useAccordionContext();
  const { selectedColor, fetchDropdownData } = useDropdownContext();

  useEffect(() => {
    fetchAccordionData();
    fetchDropdownData();
  }, []);

  return (
    <div>
      <DropdownPage />
      <div
        className={`flex justify-center text-center items-center w-[10rem] h-[10rem] m-auto border-2 text- bg-${selectedColor}-500 `}
      >
        <span className="font-bold">Choose my color above...</span>
      </div>
      {/* <AccordionPage /> */}
    </div>
  );
}
