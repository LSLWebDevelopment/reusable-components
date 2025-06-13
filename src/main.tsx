import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AccordionProvider } from "./context/AccordionContext";
import "./index.css";
import { DropdownProvider } from "./context/DropdownContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccordionProvider>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </AccordionProvider>
  </StrictMode>
);
