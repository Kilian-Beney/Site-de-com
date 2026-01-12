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
    <footer className="w-full bg-[#59c0eb] py-12">
      <div className="flex items-start justify-between gap-12 px-[105px] max-w-[1512px] mx-auto">
        <div className="flex flex-col gap-2 min-w-[460px]">
          <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#ffff85] text-[100px] tracking-[-9.00px] leading-[71px] whitespace-nowrap">
            Musba.
          </div>

          <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-[23px] tracking-[-2.07px] leading-[16px] whitespace-nowrap">
            x Métiers du Multimédia et de l&apos;Internet
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-4xl tracking-[-3.24px] leading-[26px] whitespace-nowrap">
              EXPOSITION
            </div>

            <img className="w-[37px] h-1" alt="Vector" src="/vector-1.svg" />

            <div className="flex items-center justify-start [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-4xl tracking-[-3.24px] leading-[26px] whitespace-nowrap">
              JEAN DUPAS
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[29.75px] min-w-[587px]">
          <div className="flex gap-[54.42px]">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-[11.61px] w-[174.87px]"
              >
                <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-[26.1px] tracking-[-2.35px] leading-[30.5px]">
                  {section.title}
                </div>

                <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-[26.1px] tracking-[-2.35px] leading-[21.0px] whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[11.61px]">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffff85] text-[26.1px] tracking-[-2.35px] leading-[30.5px]">
              HORAIRES
            </div>

            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ffff85] text-[26.1px] tracking-[-2.35px] leading-[21.0px] max-w-[391.09px]">
              11h-18h, sauf les mardis et jours fériés (ouvert le 14/07 et le
              15/08).
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
