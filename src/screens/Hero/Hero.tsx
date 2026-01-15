import { ArtisticShowcaseSection } from "./sections/ArtisticShowcaseSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { ProductionSection } from "./sections/ProductionSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection";
import { ProjectIntroSection } from "./sections/ProjectIntroSection";
import { TeamsSection } from "./sections/TeamsSection";
import { CollaborationSection } from "./sections/CollaborationSection";
import { VideoSection } from "./sections/VideoSection";
import { SocialSliderSection } from "./sections/SocialSliderSection";

export const Hero = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <LogoSection />

      <ProjectIntroSection />
      <ProjectDescriptionSection />
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
