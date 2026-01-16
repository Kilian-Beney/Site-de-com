import { useEffect } from "react";
import { ArtisticShowcaseSection } from "./sections/ArtisticShowcaseSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { ProductionSection } from "./sections/ProductionSection";
import { TeamsSection } from "./sections/TeamsSection";
import { CollaborationSection } from "./sections/CollaborationSection";
import { VideoSection } from "./sections/VideoSection";
import { SocialSliderSection } from "./sections/SocialSliderSection";
import { CommunicationSection } from "./sections/CommunicationSection";

export const Hero = (): JSX.Element => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white w-full flex flex-col">
      <LogoSection />

      <ArtisticShowcaseSection />
      <VideoSection />
      <TeamsSection />
      <CollaborationSection />
      <ProductionSection />
      <SocialSliderSection />
      <CommunicationSection />

      <ContactInfoSection />
    </div>
  );
};
