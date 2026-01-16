export const ArtisticShowcaseSection = (): JSX.Element => {
  const artworks = [
    { 
      id: 1, 
      src: "/BAL_1195286.JPG.webp",
      position: "top-[2%] left-[0%]", 
      width: "w-[220px] md:w-[420px]", 
      height: "h-[150px] md:h-[280px]",
      delay: "delay-100"
    },
    { 
      id: 2, 
      src: "/bourse_du_travail__frederic_Deval_ville_de_Bordeaux_6.webp",
      position: "top-[5%] right-[0%]", 
      width: "w-[250px] md:w-[480px]", 
      height: "h-[180px] md:h-[320px]",
      delay: "delay-200"
    },
    { 
      id: 3, 
      src: "/bourse_du_travail_Ph_F.Deval_2.webp",
      position: "bottom-[10%] left-[0%]", 
      width: "w-[200px] md:w-[380px]", 
      height: "h-[140px] md:h-[250px]",
      delay: "delay-300"
    },
    { 
      id: 4, 
      src: "/bourse_du_travail_Ph_F.Deval_5.webp",
      position: "bottom-[5%] right-[0%]", 
      width: "w-[220px] md:w-[450px]", 
      height: "h-[160px] md:h-[300px]",
      delay: "delay-400"
    },
    { 
      id: 5, 
      src: "/bourse_du_travail_Ph_F.Deval_12.webp",
      // recentrer l'œuvre n°5 en haut-centre entre les 4 œuvres du haut
      position: "top-[4%] left-1/2 -translate-x-1/2",
      width: "w-[240px] md:w-[420px]",
      height: "h-[160px] md:h-[320px]",
      zIndex: "z-20",
      delay: "delay-0"
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 px-4 md:px-12 lg:px-[114px] bg-white flex flex-col items-center">
      {/* Collage d'images */}
      <div className="relative w-full h-[600px] md:h-[900px] mb-12 md:mb-20">
        <div className="absolute inset-0">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`absolute ${artwork.position} ${artwork.width} ${artwork.height} ${artwork.zIndex || 'z-10'} overflow-hidden shadow-2xl reveal fade-up ${artwork.delay}`}
            >
              <img 
                src={artwork.src} 
                alt={`Oeuvre ${artwork.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Titre et Texte */}
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center px-4">
        <h1 className="reveal slide-up font-musba text-black text-[50px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] tracking-tighter leading-none mb-8 md:mb-12 whitespace-nowrap">
          Jean Dupas
        </h1>

        <div className="reveal slide-up delay-200 flex flex-col gap-6 max-w-[850px]">
          <p className="font-swiss font-normal text-black text-xl md:text-2xl lg:text-[28px] tracking-[-0.5px] leading-relaxed">
            <span className="font-bold">Jean Dupas</span> (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s’impose comme l’un des artistes les plus emblématiques de l’<span className="font-bold">Art Déco</span>.
          </p>

          <p className="font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.4px] leading-relaxed">
            Né à Bordeaux, il s’est illustré par un style élégant et monumental, mêlant classicisme et modernité.
          </p>

          <p className="font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.4px] leading-relaxed">
            Il est notamment connu pour ses grandes compositions décoratives, comme celles réalisées pour le paquebot Normandie, qui ont contribué à faire de lui une figure majeure des arts décoratifs du XXᵉ siècle.
          </p>
        </div>
      </div>
    </section>
  );
};
