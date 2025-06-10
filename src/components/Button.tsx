import classNames from "classnames";
import type React from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonHandlers = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonHandlers {
  children: ReactNode;
  severity: "primary" | "secondary" | "success" | "warning" | "danger";
  rounded?: boolean;
  outline?: boolean;
  className?: string;
}

export function Button({
  children,
  severity,
  rounded,
  outline,
  className,
  ...handlers
}: ButtonProps) {
  const classes = twMerge(
    classNames(
      "py-1.5 px-3 border-2 text-white",
      {
        "bg-blue-500 border-blue-700": severity === "primary",
        "bg-gray-500 border-gray-700": severity === "secondary",
        "bg-green-500 border-green-700": severity === "success",
        "bg-yellow-500 border-yellow-700": severity === "warning",
        "bg-red-500 border-red-700": severity === "danger",
        "rounded-full": rounded === true,
        outline: outline === true,
        "bg-white text-blue-500": outline === true && severity === "primary",
        "bg-white text-gray-500": outline === true && severity === "secondary",
        "bg-white text-green-500": outline === true && severity === "success",
        "bg-white text-warning-500": outline === true && severity === "warning",
        "bg-white text-red-500": outline === true && severity === "danger",
      },
      className
    )
  );

  return (
    <button {...handlers} className={classes}>
      {children}
    </button>
  );
}
