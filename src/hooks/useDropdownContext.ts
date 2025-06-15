import { useContext } from "react";
import { DropdownContext } from "../context/DropdownContext";

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw Error("Error creating context");
  }
  return context;
}
