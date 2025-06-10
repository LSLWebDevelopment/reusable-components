import classNames from "classnames";
import type React from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonHandlers = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonHandlers {
  children: ReactNode;
  severity?: "primary" | "secondary" | "success" | "warning" | "danger";
  rounded?: boolean;
  outline?: boolean;
  className?: string;
  icon?: boolean;
}

export function Button({
  children,
  severity,
  rounded,
  outline,
  className,
  icon,
  ...handlers
}: ButtonProps) {
  const classes = twMerge(
    classNames(
      "py-1.5 px-3 border-2 border-black text-white bg-black",
      {
        "flex justify-between items-center": icon,
        "bg-blue-500 border-blue-700": severity === "primary",
        "bg-gray-500 border-gray-700": severity === "secondary",
        "bg-green-500 border-green-700": severity === "success",
        "bg-yellow-500 border-yellow-700": severity === "warning",
        "bg-red-500 border-red-700": severity === "danger",
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline === true && severity === "primary",
        "text-gray-500": outline === true && severity === "secondary",
        "text-green-500": outline === true && severity === "success",
        "text-yellow-500": outline === true && severity === "warning",
        "text-red-500": outline === true && severity === "danger",
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
