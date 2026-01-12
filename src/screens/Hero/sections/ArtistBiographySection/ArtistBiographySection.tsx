export const ArtistBiographySection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 px-4 md:px-12 lg:px-[114px] relative z-10">
        <img
          className="w-full md:w-[300px] lg:w-[397px] h-auto md:h-[375px] lg:h-[498px] object-cover flex-shrink-0"
          alt="Jd"
          src="/jd-1.png"
        />

        <div className="flex flex-col items-start gap-6 md:gap-[33px] flex-1 pt-0">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[-0.72px] leading-relaxed md:leading-[31px]">
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

          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[-0.72px] leading-relaxed md:leading-[31px]">
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

      <div className="absolute -bottom-[9%] left-0 right-0 flex justify-start overflow-hidden pointer-events-none z-20">
        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[100px] md:text-[200px] lg:text-[333.6px] tracking-[-10px] md:tracking-[-20px] lg:tracking-[-25.52px] leading-[80px] md:leading-[160px] lg:leading-[283.9px] whitespace-nowrap">
          <span className="text-[#59c0eb]">JEAN DUPAS</span>
        </div>
      </div>
    </section>
  );
};
