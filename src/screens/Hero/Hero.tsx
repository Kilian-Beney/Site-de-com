import { ArtistBiographySection } from "./sections/ArtistBiographySection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection";
import { ProjectIntroSection } from "./sections/ProjectIntroSection";

export const Hero = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <LogoSection />

      <NavigationTabsSection />

      <ArtistBiographySection />

      <ProjectIntroSection />

      <ProjectDescriptionSection />

      <ContactInfoSection />
    </div>
  );
};
