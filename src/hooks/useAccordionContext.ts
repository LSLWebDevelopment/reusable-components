import { useContext } from "react";
import { AccordionContext } from "../context/AccordionContext";

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Error creating the context");
  }
  return context;
}
