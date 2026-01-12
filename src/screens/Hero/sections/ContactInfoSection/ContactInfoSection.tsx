export const ContactInfoSection = (): JSX.Element => {
  const contactSections = [
    {
      title: "ADRESSE",
      content: "20 Cr d'Albret, 33000 Bordeaux",
    },
    {
      title: "RENSEIGNEMENTS",
      content: "05 56 10 20 56\nmusba-publics@mairie-bordeaux.fr",
    },
  ];

  return (
    <footer className="w-full bg-[#59c0eb] py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 px-4 md:px-12 lg:px-[105px] max-w-full mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#ffff85] text-5xl md:text-7xl lg:text-[100px] tracking-[-4px] md:tracking-[-7px] lg:tracking-[-9.00px] leading-tight">
            Musba.
          </div>

          <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-sm md:text-lg lg:text-[23px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2.07px] leading-tight">
            x Métiers du Multimédia et de l&apos;Internet
          </div>

          <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-4 flex-wrap">
            <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-xl md:text-3xl lg:text-4xl tracking-[-2px] md:tracking-[-2.8px] lg:tracking-[-3.24px] leading-tight whitespace-nowrap">
              EXPOSITION
            </div>

            <img className="w-[25px] md:w-[30px] lg:w-[37px] h-1" alt="Vector" src="/vector-1.svg" />

            <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-xl md:text-3xl lg:text-4xl tracking-[-2px] md:tracking-[-2.8px] lg:tracking-[-3.24px] leading-tight whitespace-nowrap">
              JEAN DUPAS
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-[29.75px] w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-[54.42px]">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 md:gap-[11.61px]"
              >
                <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-lg md:text-xl lg:text-[26.1px] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.35px] leading-relaxed">
                  {section.title}
                </div>

                <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-lg md:text-xl lg:text-[26.1px] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.35px] leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-[11.61px]">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-lg md:text-xl lg:text-[26.1px] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.35px] leading-relaxed">
              HORAIRES
            </div>

            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-lg md:text-xl lg:text-[26.1px] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.35px] leading-relaxed max-w-full md:max-w-[391.09px]">
              11h-18h, sauf les mardis et jours fériés (ouvert le 14/07 et le
              15/08).
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
