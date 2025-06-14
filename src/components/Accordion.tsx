import { useState } from "react";
import type { AccordionEntity } from "../entities/ComponentsEntities";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

interface AccordionProps {
  accordionData: AccordionEntity[];
}

export function Accordion({ accordionData }: AccordionProps) {
  const [isOpened, setIsOpened] = useState(-1);

  const handleOpenCloseAccordion = (index: number) => {
    setIsOpened((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = accordionData.map(
    (item: AccordionEntity, index: number) => {
      const showItem = index === isOpened;
      const icon = (
        <span>
          {showItem ? (
            <GoChevronRight className="text-4xl" />
          ) : (
            <GoChevronDown className="text-4xl font-extrabold" />
          )}
        </span>
      );
      return (
        <div key={item.accordionId}>
          <div
            className="flex p-3 bg-gray-300 border-b items-center justify-between cursos-pointer"
            onClick={() => handleOpenCloseAccordion(index)}
          >
            {item.accordionTitle}
            {icon}
          </div>
          {showItem && (
            <div className="borde-b p-5 bg-amber-200">
              {item.accordionDescription}
            </div>
          )}
        </div>
      );
    }
  );

  return (
    <div className="w-[40rem] my-10 m-auto border-x border-5 rouded">
      {renderedItems}
    </div>
  );
}
