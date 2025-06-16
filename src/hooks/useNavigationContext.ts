import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("Error creating context");
  }
  return context;
}
