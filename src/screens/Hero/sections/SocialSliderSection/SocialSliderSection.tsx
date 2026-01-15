import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SocialSliderSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: "reel",
      title: "Reel #1",
      description: "Aperçu de notre projet en vidéo",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      type: "reel",
      title: "Reel #2",
      description: "Coulisses et détails de l'expérience",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      type: "making-of",
      title: "Making-of",
      description: "Le processus de création complet",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
    },
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
      <h2 className="title-bar [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-12 md:mb-16">
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

        <div className="flex-1 max-w-4xl">
          <div className="aspect-square md:aspect-video bg-[#E5E5E5] border border-gray-300 rounded-lg overflow-hidden relative group">
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-8 text-center text-white">
              <span className="text-4xl">
                {slides[currentIndex].type === "instagram" ? "📸" : 
                 slides[currentIndex].type === "reel" ? "🎬" : 
                 slides[currentIndex].type === "making-of" ? "🎥" : ""}
              </span>
              <h3 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-lg md:text-xl">
                {slides[currentIndex].title}
              </h3>
              <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-sm md:text-base">
                {slides[currentIndex].description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
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
