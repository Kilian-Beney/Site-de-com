import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SocialSliderSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, url: "/Carnet de bord/FIRST.pdf" },
    { id: 2, url: "/Carnet de bord/A METTRE APRÈS FIRST.pdf" },
    { id: 3, url: "/Carnet de bord/CARNET DE BORD-1.pdf" },
    { id: 4, url: "/Carnet de bord/CARNET DE BORD-2.pdf" },
    { id: 5, url: "/Carnet de bord/CARNET DE BORD-3.pdf" },
    { id: 6, url: "/Carnet de bord/CARNET DE BORD-4.pdf" },
    { id: 7, url: "/Carnet de bord/CARNET DE BORD-5.pdf" },
    { id: 8, url: "/Carnet de bord/CARNET DE BORD-6.pdf" },
    { id: 9, url: "/Carnet de bord/CARNET DE BORD-7.pdf" },
    { id: 10, url: "/Carnet de bord/CARNET DE BORD-8.pdf" },
    { id: 11, url: "/Carnet de bord/CARNET DE BORD-9.pdf" },
    { id: 12, url: "/Carnet de bord/CARNET DE BORD-10.pdf" },
    { id: 13, url: "/Carnet de bord/CARNET DE BORD-11.pdf" },
    { id: 14, url: "/Carnet de bord/CARNET DE BORD-12.pdf" },
    { id: 15, url: "/Carnet de bord/CARNET DE BORD-13.pdf" },
    { id: 16, url: "/Carnet de bord/CARNET DE BORD-14.pdf" },
    { id: 17, url: "/Carnet de bord/CARNET DE BORD-15.pdf" },
    { id: 18, url: "/Carnet de bord/CARNET DE BORD-16.pdf" },
    { id: 19, url: "/Carnet de bord/CARNET DE BORD-17.pdf" },
    { id: 20, url: "/Carnet de bord/CARNET DE BORD-18.pdf" },
    { id: 21, url: "/Carnet de bord/DERNIERE PAGE.pdf" },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Carnet de bord
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Le carnet de bord retrace l’ensemble du processus de création du projet Dupas. À travers ces pages, découvrez la démarche pédagogique, les recherches et les étapes qui ont mené à la réalisation de l’expérience interactive.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Chaque étape témoigne de l’évolution de notre réflexion, de la conception graphique à la médiation culturelle, offrant un regard approfondi sur les coulisses de ce projet ambitieux.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="w-full flex items-center justify-center gap-4 md:gap-8">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black hover:bg-black hover:text-white transition-colors shrink-0"
            aria-label="Page précédente"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex-1 max-w-4xl mx-auto transition-all duration-500">
            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg overflow-hidden relative shadow-lg aspect-video">
              {slides[currentIndex].url.endsWith('.pdf') ? (
                <iframe
                  src={`${slides[currentIndex].url}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none"
                  title={`Page ${currentIndex + 1}`}
                />
              ) : (
                <img
                  src={slides[currentIndex].url}
                  alt={`Page ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>

          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black hover:bg-black hover:text-white transition-colors shrink-0"
            aria-label="Page suivante"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-full px-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-black w-6" : "bg-gray-300"
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-black font-swiss text-sm md:text-base">
          Page {currentIndex + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
};
