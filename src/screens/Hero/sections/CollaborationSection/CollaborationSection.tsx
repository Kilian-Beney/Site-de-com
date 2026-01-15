export const CollaborationSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Collaboration avec le MusBA
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6">
        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Le Musée des Beaux-Arts de Bordeaux et le département MMI de l'IUT Bordeaux Montaigne s'associent pour proposer une médiation culturelle innovante autour de l'œuvre de Jean Dupas.
        </p>

        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Notre rôle consiste à concevoir et développer une interface interactive permettant aux visiteurs du musée d'explorer l'univers de l'artiste de manière immersive. Cette collaboration entre institution culturelle et formation universitaire permet de conjuguer expertise muséale et innovation numérique.
        </p>

        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Le dispositif développé enrichit le parcours de visite en donnant accès à des œuvres dispersées dans le monde entier, tout en proposant une expérience narrative unique qui retrace les voyages et les créations de Jean Dupas.
        </p>
      </div>
    </section>
  );
};
