import { createContext, useEffect, useState, type ReactNode } from "react";

interface NavigationContextEntity {
  currentPath: string;
  navigate: (to: string) => void;
}

interface NavigationContextProps {
  children: ReactNode;
}

export const NavigationContext = createContext<NavigationContextEntity | null>(
  null
);

export function NavigationProvider({ children }: NavigationContextProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // when the user navigates using the back and forward buttons
    // update the currentPath
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
