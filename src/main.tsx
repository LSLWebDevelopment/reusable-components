import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AccordionProvider } from "./context/AccordionContext";
import "./index.css";
import { DropdownProvider } from "./context/DropdownContext";
import { NavigationProvider } from "./context/NavigationContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccordionProvider>
      <DropdownProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </DropdownProvider>
    </AccordionProvider>
  </StrictMode>
);
