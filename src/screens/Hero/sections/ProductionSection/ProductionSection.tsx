import { useEffect, useRef, useState } from "react";

export const ProductionSection = (): JSX.Element => {
  const iframeUrl = "https://exposition-dupas-musba.netlify.app/";
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setScale(width / 3840);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Réalisations
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Le projet Dupas s’est concrétisé à travers la conception d’une interface interactive sur tablette, de maquettes graphiques, de cartes du monde illustrées et de contenus visuels immersifs. Chaque élément a été pensé pour guider le visiteur dans son exploration et renforcer la sensation de voyage.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Les visuels du projet témoignent des différentes étapes de conception : recherches graphiques, prototypes, tests d’interface et mise en situation dans un contexte muséal. Ces réalisations illustrent la richesse du travail collaboratif et l’attention portée aux détails, tant sur le plan esthétique que fonctionnel.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div 
          ref={containerRef}
          className="aspect-video bg-[#F5F5F5] border border-gray-200 rounded-lg overflow-hidden shadow-lg relative group"
        >
          <div 
            className="w-[3840px] h-[2160px] origin-top-left absolute top-0 left-0"
            style={{
              transform: `scale(${scale})`,
            }}
          >
            <iframe
              src={iframeUrl}
              className="w-full h-full border-none"
              title="Exposition Dupas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
