export const ArtistBiographySection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden py-6">
      <div className="flex flex-row items-start gap-8 px-[114px]">
        <img
          className="w-[397px] h-[498px] object-cover flex-shrink-0"
          alt="Jd"
          src="/jd-1.png"
        />

        <div className="flex flex-col items-start gap-[33px] flex-1 pt-0">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.72px] leading-[31px]">
            <span className="tracking-[-0.72px]">&nbsp;&nbsp; </span>
            <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold tracking-[-0.72px]">
              Jean Dupas
            </span>
            <span className="tracking-[-0.72px]">
              {" "}
              (1882-1964) est peintre, dessinateur, affichiste et décorateur
              français. Il s&apos;impose comme l&apos;un des artistes les plus
              emblématiques de l&apos;
            </span>
            <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold tracking-[-0.72px]">
              Art Déco
            </span>
            <span className="tracking-[-0.72px]">.</span>
          </p>

          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.72px] leading-[31px]">
            <span className="tracking-[-0.72px]">
              &nbsp;&nbsp; Né à Bordeaux, il s&apos;est illustré par un style
              élégant et monumental, mêlant classicisme et modernité. Il est
              notamment connu pour ses grandes compositions décoratives, comme
              celles réalisées pour le paquebot{" "}
            </span>
            <span className="[font-family:'Helvetica_Neue-Italic',Helvetica] italic tracking-[-0.72px]">
              Normandie
            </span>
            <span className="tracking-[-0.72px]">
              , qui ont contribué à faire de lui une figure majeure des arts
              décoratifs du XXᵉ siècle.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#59c0eb] text-[283.6px] tracking-[-25.52px] leading-[233.9px] whitespace-nowrap">
          JEAN DUPAS
        </div>
      </div>
    </section>
  );
};
