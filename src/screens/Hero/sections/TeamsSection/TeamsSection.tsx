export const TeamsSection = (): JSX.Element => {
  const teams = [
    {
      title: "UX/UI\nDesign",
      description: "",
    },
    {
      title: "Direction\nArtistique & 3D",
      description: "",
    },
    {
      title: "Développeme\nnt",
      description: "",
    },
    {
      title: "Stratégie &\nCommunication",
      description: "",
    },
    {
      title: "Rédact\nion",
      description: "",
    },
    {
      title: "Gestion de\nProjet",
      description: "",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-12">
        Nos équipes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-black rounded-none p-8 md:p-10 aspect-[3/4] bg-white hover:bg-gray-50 transition-colors"
          >
            <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-xl md:text-2xl lg:text-[28px] tracking-[-0.5px] leading-tight text-center whitespace-pre-line">
              {team.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
