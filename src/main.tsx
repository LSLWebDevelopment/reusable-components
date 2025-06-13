import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AccordionProvider } from "./context/AccordionContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccordionProvider>
      <App />
    </AccordionProvider>
  </StrictMode>
);
