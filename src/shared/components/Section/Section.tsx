import type { ReactNode } from "react";
import Container from "../Container/Container";

type SectionBackground = "none" | "white" | "teal-light";

type SectionProps = {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  id?: string;
};

const backgroundClass: Record<SectionBackground, string> = {
  none: "",
  white: "bg-white",
  "teal-light": "bg-teal-light",
};

export default function Section({ children, background = "none", className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${backgroundClass[background]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
