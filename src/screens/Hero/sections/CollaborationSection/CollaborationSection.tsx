export const CollaborationSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Collaboration avec le MusBA
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Ce projet est né d’une collaboration étroite avec le Musée des Beaux-Arts de Bordeaux (MusBA), dans une démarche de médiation culturelle innovante. Ensemble, nous avons réfléchi à de nouvelles façons de valoriser les œuvres de Jean Dupas, en mettant en lumière celles qui échappent habituellement au regard du public.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Le MusBA a accompagné le projet sur les plans scientifique, artistique et institutionnel, garantissant la justesse des contenus et le respect de la direction artistique du musée. Cette collaboration a permis de croiser expertise muséale et innovation numérique, afin de proposer une expérience fidèle à l’œuvre de Jean Dupas tout en renouvelant les modes de transmission culturelle.
        </p>
      </div>
    </section>
  );
};
