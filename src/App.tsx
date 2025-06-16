import { useEffect } from "react";
import { Route } from "./components/Route";
import { Sidebar } from "./components/Sidebar";
import { useAccordionContext } from "./hooks/useAccordionContext";
import { useDropdownContext } from "./hooks/useDropdownContext";
import { AccordionPage } from "./Pages/AccordionPage";
import { ButtonPage } from "./Pages/ButtonPage";
import { DropdownPage } from "./Pages/DropdownPage";

export function App() {
  const { fetchAccordionData } = useAccordionContext();
  const { selectedColor, fetchDropdownData } = useDropdownContext();

  useEffect(() => {
    fetchAccordionData();
    fetchDropdownData();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="col-span-5">
        <Route path={"/"}>
          <ButtonPage />
        </Route>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/dropdown"}>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}
