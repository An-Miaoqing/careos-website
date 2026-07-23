import type { ReactNode } from "react";
import Hero from "../Hero/Hero";

type PageLayoutProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageLayout({ eyebrow, title, description, children }: PageLayoutProps) {
  return (
    <>
      <Hero eyebrow={eyebrow} title={title} description={description} />
      {children}
    </>
  );
}
