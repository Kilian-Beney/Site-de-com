export const ProductionSection = (): JSX.Element => {
  const photos = Array(6).fill(null);

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-6">
        Réalisation
      </h2>

      <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px] mb-10 max-w-[900px]">
        Découvrez le processus de création et les différentes étapes du développement de l'expérience interactive tablette.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {photos.map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-[#E5E5E5] border border-gray-300 rounded-none flex items-center justify-center"
          >
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-gray-500 text-lg md:text-xl">
              Photo
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
