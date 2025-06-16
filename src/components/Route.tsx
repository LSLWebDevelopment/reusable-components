import type { ReactNode } from "react";
import { useNavigationContext } from "../hooks/useNavigationContext";

interface RouteProps {
  path: string;
  children: ReactNode;
}

export function Route({ path, children }: RouteProps) {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  return null;
}
