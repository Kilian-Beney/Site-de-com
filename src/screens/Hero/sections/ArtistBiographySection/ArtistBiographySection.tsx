export const ArtistBiographySection = (): JSX.Element => {
  return (
    <section className="w-full pb-12 md:pb-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <div className="max-w-[900px] flex flex-col gap-6">
        <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Jean Dupas (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s’impose comme l’un des artistes les plus emblématiques de l’Art Déco.
        </p>
        <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Né à Bordeaux, il s’est illustré par un style élégant et monumental, mêlant classicisme et modernité.
        </p>
        <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Il est notamment connu pour ses grandes compositions décoratives, comme celles réalisées pour le paquebot Normandie, qui ont contribué à faire de lui une figure majeure des arts décoratifs du XXᵉ siècle.
        </p>
      </div>
    </section>
  );
};
