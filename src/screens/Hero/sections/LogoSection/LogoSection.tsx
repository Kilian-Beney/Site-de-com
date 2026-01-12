export const LogoSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 px-4">
      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#59c0eb] text-5xl md:text-7xl lg:text-[100px] text-center tracking-[-4px] md:tracking-[-7px] lg:tracking-[-9.00px] leading-tight">
        MusBA
      </div>

      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#59c0eb] text-sm md:text-lg lg:text-[23px] text-center tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2.07px] leading-tight">
        x Métiers du Multimédia et de l&apos;Internet
      </div>

      <div className="flex relative items-center gap-4 md:gap-8 lg:gap-[67px] flex-wrap justify-center">
        <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#59c0eb] text-xl md:text-3xl lg:text-4xl text-center tracking-[-2px] md:tracking-[-2.8px] lg:tracking-[-3.24px] leading-tight whitespace-nowrap">
          EXPOSITION
        </div>

        <img className="w-[25px] md:w-[30px] lg:w-[37px] h-1" alt="Vector" src="/vector-1.svg" />

        <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#59c0eb] text-xl md:text-3xl lg:text-4xl text-center tracking-[-2px] md:tracking-[-2.8px] lg:tracking-[-3.24px] leading-tight whitespace-nowrap">
          JEAN DUPAS
        </div>
      </div>
    </section>
  );
};
