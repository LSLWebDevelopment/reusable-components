import classNames from "classnames";
import { useNavigationContext } from "../hooks/useNavigationContext";

interface LinkProps {
  to: string;
  children: string;
  className?: string;
  activeClassName: string;
}

export function Link({ to, children, className, activeClassName }: LinkProps) {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500 pl-2",
    currentPath === to && activeClassName,
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}
