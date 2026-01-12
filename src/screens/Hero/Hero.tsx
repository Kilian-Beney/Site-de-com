import { ArtistBiographySection } from "./sections/ArtistBiographySection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection";

export const Hero = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1512px] flex flex-col">
      <LogoSection />

      <NavigationTabsSection />

      <ArtistBiographySection />

      <ProjectDescriptionSection />

      <ContactInfoSection />
    </div>
  );
};
