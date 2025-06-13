import { useEffect } from "react";
import { useAccordionContext } from "./hooks/useAccordionContext";
import { AccordionPage } from "./Pages/AccordionPage";

export function App() {
  const { fetchAccordionData } = useAccordionContext();

  useEffect(() => {
    fetchAccordionData();
  }, []);

  return (
    <div>
      <AccordionPage />
    </div>
  );
}
