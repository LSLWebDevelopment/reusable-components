import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import type { DropdownEntity } from "../entities/ComponentsEntities";
import { useDropdownContext } from "../hooks/useDropdownContext";

export function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);
  const { onColorSelected, selectedColor, dropdownData } = useDropdownContext();

  const handleColorSelection = (color: string) => {
    setIsOpened(!isOpened);
    onColorSelected(color);
  };

  const renderedDropdownItems = dropdownData.map((item: DropdownEntity) => {
    return (
      <li key={item.label} onClick={() => handleColorSelection(item.value)}>
        {item.label}
      </li>
    );
  });

  return (
    <div className="w-[10rem] border-2 my-10 m-auto">
      <div
        onClick={() => setIsOpened(!isOpened)}
        className={`flex justify-between items-center ${
          isOpened && "border-b-2"
        }`}
      >
        <h3 className="select-none">{selectedColor || "Select..."}</h3>
        <GoChevronDown className="text-2xl" />
      </div>
      {isOpened && <ul className="select-none">{renderedDropdownItems}</ul>}
    </div>
  );
}
