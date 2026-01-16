import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyVideo } from "../../../../components/LazyVideo";

export const SocialSliderSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: "making-of",
      title: "Réunion de travail",
      description: "Le processus de création complet",
      videoUrl: "/Réunion.mp4",
      orientation: "landscape"
    },
    {
      id: 2,
      type: "reel",
      title: "MusBA Vidéo 1",
      description: "Découverte de l'expérience interactive",
      videoUrl: "/musba vidéo 1 v1.mp4",
      orientation: "portrait"
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
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Communication
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          La communication autour du projet Dupas a été pensée pour valoriser à la fois l’expérience interactive et la démarche pédagogique du projet. À travers des formats dynamiques tels que des vidéos, des réels et des contenus visuels adaptés aux réseaux sociaux, nous avons cherché à rendre le projet accessible et attractif pour un public élargi.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Ces supports permettent de montrer les coulisses du projet, de mettre en avant le travail des étudiants et de susciter la curiosité autour de l’œuvre de Jean Dupas. La communication devient ainsi un prolongement de l’expérience, invitant chacun à découvrir ou redécouvrir l’artiste sous un nouveau regard.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        <button
          onClick={prev}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Slide précédent"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={`flex-1 mx-auto transition-all duration-500 ${
          slides[currentIndex].orientation === "portrait" ? "max-w-md" : "max-w-4xl"
        }`}>
          <div className={`bg-[#E5E5E5] border border-gray-300 rounded-lg overflow-hidden relative group shadow-lg transition-all duration-500 min-h-[300px] ${
            slides[currentIndex].orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
          }`}>
            {slides[currentIndex].videoUrl ? (
              <LazyVideo
                key={slides[currentIndex].id}
                src={slides[currentIndex].videoUrl}
                className="w-full h-full object-cover"
                autoPlay={false}
                muted={true}
                loop={true}
                controls={true}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Vidéo à venir
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-8 text-center text-white pointer-events-none">
              <span className="text-4xl">
                {slides[currentIndex].type === "instagram" ? "📸" : 
                 slides[currentIndex].type === "reel" ? "🎬" : 
                 slides[currentIndex].type === "making-of" ? "🎥" : ""}
              </span>
              <h3 className="font-swiss font-bold text-lg md:text-xl">
                {slides[currentIndex].title}
              </h3>
              <p className="font-swiss font-normal text-sm md:text-base">
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
