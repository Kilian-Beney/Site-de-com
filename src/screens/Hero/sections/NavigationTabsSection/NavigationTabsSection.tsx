"use client";

import { useState } from "react";

const navigationTabs = [
  {
    id: "musba-mmi",
    label: "MUSBA x MMI",
    width: "w-[217px]",
  },
  {
    id: "jean-dupas",
    label: "JEAN DUPAS",
    width: "w-[183px]",
  },
  {
    id: "carnet-de-bord",
    label: "CARNET DE BORD",
    width: "w-[261px]",
  },
];

export const NavigationTabsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("musba-mmi");

  return (
    <nav className="flex w-full max-w-[661px] items-center relative rounded-[62px] border-[0.4px] border-solid border-black">
      {navigationTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex ${tab.width} h-14 items-center justify-center gap-2.5 p-2.5 relative rounded-[241px] transition-colors ${
            activeTab === tab.id ? "bg-[#59c0eb]" : ""
          }`}
        >
          <span
            className={`relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[29.1px] text-center tracking-[-2.62px] leading-[29.1px] whitespace-nowrap ${
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
