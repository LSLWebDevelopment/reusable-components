import type { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

export function Panel({ children, className, ...events }: PanelProps) {
  return (
    <button
      {...events}
      className={`border rounded p-3 shadow bg-white w-full ${className}`}
    >
      {children}
    </button>
  );
}
