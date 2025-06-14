import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import type { DropdownEntity } from "../entities/ComponentsEntities";
import { useDropdownContext } from "../hooks/useDropdownContext";
import { Panel } from "./Panel";

export function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);
  const { onColorSelected, selectedColor, dropdownData } = useDropdownContext();

  const handleColorSelection = (color: string) => {
    setIsOpened(!isOpened);
    onColorSelected(color);
  };

  const renderedDropdownItems = dropdownData.map((item: DropdownEntity) => {
    return (
      <div
        className="hover:bg-sky-300 rounded cursor-pointer p-1"
        key={item.label}
        onClick={() => handleColorSelection(item.value)}
      >
        {item.label}
      </div>
    );
  });

  return (
    <div className="w-48 my-10 m-auto relative">
      <Panel
        onClick={() => setIsOpened(!isOpened)}
        className={`flex justify-between items-center cursor-pointer ${
          isOpened && "border-b-2"
        }`}
      >
        <h3 className="select-none">{selectedColor || "Select..."}</h3>
        <GoChevronDown className="text-2xl" />
      </Panel>
      {isOpened && (
        <Panel className="select-none absolute top-full">
          {renderedDropdownItems}
        </Panel>
      )}
    </div>
  );
}
