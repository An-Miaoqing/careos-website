import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import HelperProfileCard from "./HelperProfileCard";
import { MapPlaceholder } from "../../contact/components/ContactDetails";
import { trust, helperProfiles } from "../../../content/alltagshilfe/trust";

export default function TrustSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={trust.label} title={trust.title} description={trust.intro} />

      <div className="mt-10 rounded-3xl border border-teal/10 bg-white/80 p-6 text-center shadow-sm sm:p-8">
        <p className="text-lg font-bold text-teal">{trust.association.name}</p>
        <p className="mt-2 text-base text-gray-700">
          ZVR-Zahl: {trust.association.zvrNumber} · {trust.association.founded}
        </p>
        <p className="mt-2 text-base text-gray-700">{trust.serviceAreaNote}</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helperProfiles.map((profile) => (
          <HelperProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      <div className="mt-10">
        <MapPlaceholder />
      </div>
    </Section>
  );
}
