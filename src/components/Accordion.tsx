import { useState } from "react";
import type { AccordionEntity } from "../entities/AccordionEntity";
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
      const icon = showItem ? (
        <GoChevronRight className="text-4xl" />
      ) : (
        <GoChevronDown className="text-4xl font-extrabold" />
      );
      return (
        <div key={item.accordionId}>
          <div
            className="flex justify-between"
            onClick={() => handleOpenCloseAccordion(index)}
          >
            {item.accordionTitle}
            {icon}
          </div>
          {showItem && <div>{item.accordionDescription}</div>}
        </div>
      );
    }
  );

  return <div>{renderedItems}</div>;
}
