import { useEffect } from "react";
import { ArtisticShowcaseSection } from "./sections/ArtisticShowcaseSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { ProductionSection } from "./sections/ProductionSection";
import { ArtistBiographySection } from "./sections/ArtistBiographySection";
import { TeamsSection } from "./sections/TeamsSection";
import { CollaborationSection } from "./sections/CollaborationSection";
import { VideoSection } from "./sections/VideoSection";
import { SocialSliderSection } from "./sections/SocialSliderSection";

export const Hero = (): JSX.Element => {
  useEffect(() => {
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

      <ArtistBiographySection />
      <ArtisticShowcaseSection />
      <VideoSection />
      <TeamsSection />
      <CollaborationSection />
      <ProductionSection />
      <SocialSliderSection />

      <ContactInfoSection />
    </div>
  );
};
