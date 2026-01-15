import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SocialSliderSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: "instagram",
      title: "Post Instagram #1",
      description: "Découvrez nos dernières actualités sur Instagram",
    },
    {
      id: 2,
      type: "reel",
      title: "Reel Making-of",
      description: "Coulisses de la création du projet",
    },
    {
      id: 3,
      type: "instagram",
      title: "Post Instagram #2",
      description: "Galerie et détails du projet",
    },
    {
      id: 4,
      type: "making-of",
      title: "Making-of Complet",
      description: "Processus de création détaillé",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-12">
        Suivi du Projet
      </h2>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        <button
          onClick={prev}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Slide précédent"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex-1 max-w-2xl">
          <div className="aspect-square md:aspect-video bg-[#E5E5E5] border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center relative">
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center h-full">
              <span className="text-gray-400 text-4xl">
                {slides[currentIndex].type === "instagram" && "📸"}
                {slides[currentIndex].type === "reel" && "🎬"}
                {slides[currentIndex].type === "making-of" && "🎥"}
              </span>
              <h3 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-lg md:text-xl">
                {slides[currentIndex].title}
              </h3>
              <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-gray-600 text-sm md:text-base">
                {slides[currentIndex].description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-black w-6" : "bg-gray-300"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Slide suivant"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
