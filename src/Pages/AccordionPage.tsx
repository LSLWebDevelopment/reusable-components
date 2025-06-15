import { Accordion } from "../components/Accordion";
import { useAccordionContext } from "../hooks/useAccordionContext";

export function AccordionPage() {
  const { accordionData } = useAccordionContext();

  return <Accordion accordionData={accordionData} />;
}
