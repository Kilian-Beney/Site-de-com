export const ProjectIntroSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12 lg:px-[114px]">
      <div className="max-w-[794px]">
        <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl tracking-[-0.72px] leading-tight mb-6 md:mb-8">
          UN PROJET<br />MUSBA x MMI
        </h2>

        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[-0.72px] leading-relaxed md:leading-[31px] mb-6">
          Ce projet consiste à concevoir une expérience interactive sur tablette permettant au public de découvrir des œuvres de l&apos;artiste Dupas normalement inaccessibles car situées ou perdues à travers le monde.
        </p>
      </div>
    </section>
  );
};
