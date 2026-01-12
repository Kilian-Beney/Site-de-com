export const LogoSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-3 py-8">
      <div className="flex items-center justify-center h-[71px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#59c0eb] text-[100px] text-center tracking-[-9.00px] leading-[166.3px] whitespace-nowrap">
        MusBA
      </div>

      <div className="flex items-center justify-center h-4 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#59c0eb] text-[23px] text-center tracking-[-2.07px] leading-[166.3px] whitespace-nowrap">
        x Métiers du Multimédia et de l&apos;Internet
      </div>

      <div className="flex relative items-center gap-[67px] h-[26px]">
        <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#59c0eb] text-4xl text-center tracking-[-3.24px] leading-[166.3px] whitespace-nowrap">
          EXPOSITION
        </div>

        <img className="w-[37px] h-1" alt="Vector" src="/vector-1.svg" />

        <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#59c0eb] text-4xl text-center tracking-[-3.24px] leading-[166.3px] whitespace-nowrap">
          JEAN DUPAS
        </div>
      </div>
    </section>
  );
};
