export const LogoSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 px-4">
      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#85A798] text-5xl md:text-7xl lg:text-[100px] text-center tracking-[-4px] md:tracking-[-7px] lg:tracking-[-9.00px] leading-tight">
        MusBA
      </div>

      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#85A798] text-sm md:text-lg lg:text-[23px] text-center tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2.07px] leading-tight">
        x Métiers du Multimédia et de l&apos;Internet
      </div>

      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#85A798] text-base md:text-lg lg:text-xl text-center tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] leading-tight">
        JEAN DUPAS & CO - LE GRAND ART DECO
      </div>
    </section>
  );
};
