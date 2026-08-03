import { useCallback, useState } from "react";
import Container from "../../../../shared/components/Container/Container";
import Badge from "../../../../shared/components/Badge/Badge";
import Panel from "../Panel/Panel";
import { panels } from "../../../../content/landing/panels";

export default function ThreePanelSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleEnter = useCallback((index: number) => setActiveIndex(index), []);
  const handleLeave = useCallback(() => setActiveIndex(null), []);

  return (
    <section id="drei-saeulen" className="bg-white py-12 sm:py-16">
      <Container className="text-center">
        <Badge variant="eyebrow">Wählen Sie Ihren Weg</Badge>
        <h2 className="mt-2 text-3xl font-extrabold text-teal sm:text-4xl">
          Drei Angebote, ein Ziel: Gut Begleitet
        </h2>
        <p className="mt-3 hidden text-sm text-grey-soft lg:block">
          → Fahren Sie über einen Bereich, um mehr zu erfahren
        </p>
      </Container>

      <div className="mt-10 flex flex-col lg:h-[80vh] lg:flex-row">
        {panels.map((panel, index) => (
          <Panel
            key={panel.id}
            panel={panel}
            isActive={activeIndex === index}
            isAnyActive={activeIndex !== null}
            onActivate={() => handleEnter(index)}
            onDeactivate={handleLeave}
          />
        ))}
      </div>
    </section>
  );
}
