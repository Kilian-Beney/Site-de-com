export const LogbookSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12 lg:px-[114px]">
      <div className="flex flex-col gap-12">
        <div className="max-w-[794px]">
            <h2 className="title-bar [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-4 uppercase">
            Problématique
          </h2>
          <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[-0.72px] leading-relaxed md:leading-[31px]">
            Ce projet consiste à concevoir une expérience interactive sur tablette permettant au public de découvrir des œuvres de l&apos;artiste Dupas normalement inaccessibles car situées ou perdues à travers le monde.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-[#E5E5E5] rounded-lg"></div>
          
          <div className="flex flex-col items-start gap-6 md:w-1/2">
            <h2 className="title-bar [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight uppercase">
              Notre réponse
            </h2>
            <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[-0.72px] leading-relaxed md:leading-[31px]">
              Ce projet consiste à concevoir une expérience interactive sur tablette permettant au public de découvrir des œuvres de l&apos;artiste.
            </p>
            <button className="bg-[#59C0EB] text-white px-8 py-2 md:py-3 rounded-full [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-sm md:text-base lg:text-[18px] uppercase tracking-[-0.72px]">
              Télécharger
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="aspect-square bg-[#E5E5E5] rounded-lg w-full"></div>
          <div className="aspect-square bg-[#E5E5E5] rounded-lg w-full"></div>
          <div className="aspect-square bg-[#E5E5E5] rounded-lg w-full"></div>
        </div>
      </div>
    </section>
  );
};
