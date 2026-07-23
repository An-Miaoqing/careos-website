import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "white" | "outline-white";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white shadow-lg shadow-orange/30 hover:bg-orange-dark",
  secondary: "bg-teal text-white shadow-lg shadow-teal/20 hover:bg-teal-dark",
  outline: "border-2 border-teal bg-white text-teal hover:bg-teal-light",
  white: "bg-white text-teal hover:bg-teal hover:text-white",
  "outline-white": "border-2 border-white bg-transparent text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  disabled,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-bold transition-colors disabled:cursor-not-allowed disabled:bg-gray-300 ${variantClass[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
