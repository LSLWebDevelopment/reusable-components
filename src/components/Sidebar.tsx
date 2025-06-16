import { Link } from "./Link";

interface LinksEntity {
  label: string;
  path: string;
}

export function Sidebar() {
  const links = [
    { label: "Buttons", path: "/" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
  ];

  const renderedLinks = links.map((link: LinksEntity) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className="mb-3 ml-5"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}
