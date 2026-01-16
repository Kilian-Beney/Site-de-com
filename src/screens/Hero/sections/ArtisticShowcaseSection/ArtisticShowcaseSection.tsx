export const ArtisticShowcaseSection = (): JSX.Element => {
  const artworks = [
    { 
      id: 1, 
      src: "/BAL_1195286.webp",
      position: "top-[2%] left-[0%]", 
      width: "w-[120px] sm:w-[150px] md:w-[300px]", 
      height: "h-[80px] sm:h-[100px] md:h-[200px]",
      delay: "delay-100"
    },
    { 
      id: 2, 
      src: "/bourse_du_travail__frederic_Deval_ville_de_Bordeaux_6.webp",
      position: "top-[5%] right-[0%]", 
      width: "w-[140px] sm:w-[170px] md:w-[340px]", 
      height: "h-[100px] sm:h-[120px] md:h-[220px]",
      delay: "delay-200"
    },
    { 
      id: 3, 
      src: "/bourse_du_travail_Ph_F.Deval_2.webp",
      position: "bottom-[10%] left-[0%]", 
      width: "w-[110px] sm:w-[140px] md:w-[280px]", 
      height: "h-[70px] sm:h-[90px] md:h-[180px]",
      delay: "delay-300"
    },
    { 
      id: 4, 
      src: "/bourse_du_travail_Ph_F.Deval_5.webp",
      position: "bottom-[5%] right-[0%]", 
      width: "w-[120px] sm:w-[150px] md:w-[320px]", 
      height: "h-[90px] sm:h-[110px] md:h-[210px]",
      delay: "delay-400"
    },
    { 
      id: 5, 
      src: "/bourse_du_travail_Ph_F.Deval_12.webp",
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      width: "w-[130px] sm:w-[170px] md:w-[300px]",
      height: "h-[85px] sm:h-[110px] md:h-[220px]",
      zIndex: "z-20",
      delay: "delay-0"
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 px-4 md:px-12 lg:px-[114px] bg-white flex flex-col items-center overflow-hidden">
      {/* Collage d'images */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] mb-12 md:mb-20">
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
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center px-4 overflow-hidden">
        <h1 className="reveal slide-up font-musba text-black text-[35px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[180px] tracking-tighter leading-none mb-8 md:mb-12">
          Jean Dupas
        </h1>

        <div className="reveal slide-up delay-200 flex flex-col gap-6 max-w-[850px]">
          <p className="font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed">
            <span className="font-bold">Jean Dupas</span> (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s’impose comme l’un des artistes les plus emblématiques de l’<span className="font-bold">Art Déco</span>.
          </p>

          <p className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed">
            Né à Bordeaux, il s’est illustré par un style élégant et monumental, mêlant classicisme et modernité.
          </p>

          <p className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed">
            Il est notamment connu pour ses grandes compositions décoratives, comme celles réalisées pour le paquebot Normandie, qui ont contribué à faire de lui une figure majeure des arts décoratifs du XXᵉ siècle.
          </p>
        </div>
      </div>
    </section>
  );
};
