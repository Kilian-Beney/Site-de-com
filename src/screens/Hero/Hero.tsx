import { useState } from "react";
import { ArtistBiographySection } from "./sections/ArtistBiographySection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection";
import { ProjectIntroSection } from "./sections/ProjectIntroSection";
import { LogbookSection } from "./sections/LogbookSection";

export const Hero = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("musba-mmi");

  return (
    <div className="bg-white w-full flex flex-col">
      <LogoSection />

      <NavigationTabsSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "musba-mmi" && (
        <>
          <ProjectIntroSection />
          <ProjectDescriptionSection />
        </>
      )}

      {activeTab === "jean-dupas" && <ArtistBiographySection />}

      {activeTab === "carnet-de-bord" && <LogbookSection />}

      <ContactInfoSection />
    </div>
  );
};
