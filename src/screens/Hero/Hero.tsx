import { useState } from "react";
import { ArtistBiographySection } from "./sections/ArtistBiographySection";
import { ArtisticShowcaseSection } from "./sections/ArtisticShowcaseSection";
import { CollaborationSection } from "./sections/CollaborationSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { LogoSection } from "./sections/LogoSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { ProductionSection } from "./sections/ProductionSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection";
import { ProjectIntroSection } from "./sections/ProjectIntroSection";
import { TeamsSection } from "./sections/TeamsSection";
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
          <ArtisticShowcaseSection />
          <TeamsSection />
          <CollaborationSection />
          <ProductionSection />
        </>
      )}

      {activeTab === "jean-dupas" && <ArtistBiographySection />}

      {activeTab === "carnet-de-bord" && <LogbookSection />}

      <ContactInfoSection />
    </div>
  );
};
