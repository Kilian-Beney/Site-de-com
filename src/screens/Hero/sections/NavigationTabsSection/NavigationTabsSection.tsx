"use client";

const navigationTabs = [
  {
    id: "musba-mmi",
    label: "MUSBA x MMI",
  },
  {
    id: "jean-dupas",
    label: "JEAN DUPAS",
  },
  {
    id: "carnet-de-bord",
    label: "CARNET DE BORD",
  },
];

interface NavigationTabsSectionProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export const NavigationTabsSection = ({
  activeTab,
  setActiveTab,
}: NavigationTabsSectionProps): JSX.Element => {

  return (
    <nav className="flex w-full max-w-full md:max-w-[661px] mx-auto items-center relative rounded-[62px] border-[0.4px] border-solid border-black px-2 md:px-0 my-4">
      {navigationTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-1 h-12 md:h-14 items-center justify-center gap-2.5 p-2 md:p-2.5 relative rounded-[241px] transition-colors ${
            activeTab === tab.id ? "bg-[#59c0eb]" : ""
          }`}
        >
          <span
            className={`relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-xs sm:text-base md:text-lg lg:text-[29.1px] text-center tracking-[-1px] md:tracking-[-2px] lg:tracking-[-2.62px] leading-tight whitespace-nowrap ${
              activeTab === tab.id ? "text-white" : "text-black"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
