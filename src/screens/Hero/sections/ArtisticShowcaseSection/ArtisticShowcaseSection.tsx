export const ArtisticShowcaseSection = (): JSX.Element => {
  const artworks = [
    { 
      id: 1, 
      src: "/BAL_1195286.JPG.webp",
      position: "top-[5%] left-[5%]", 
      width: "w-[180px] md:w-[280px]", 
      height: "h-[120px] md:h-[200px]",
      delay: "delay-100"
    },
    { 
      id: 2, 
      src: "/bourse_du_travail__frederic_Deval_ville_de_Bordeaux_6.webp",
      position: "top-[10%] right-[5%]", 
      width: "w-[200px] md:w-[320px]", 
      height: "h-[150px] md:h-[240px]",
      delay: "delay-200"
    },
    { 
      id: 3, 
      src: "/bourse_du_travail_Ph_F.Deval_2.webp",
      position: "top-[45%] left-[2%]", 
      width: "w-[150px] md:w-[250px]", 
      height: "h-[110px] md:h-[180px]",
      delay: "delay-300"
    },
    { 
      id: 4, 
      src: "/bourse_du_travail_Ph_F.Deval_5.webp",
      position: "bottom-[15%] right-[2%]", 
      width: "w-[180px] md:w-[300px]", 
      height: "h-[130px] md:h-[220px]",
      delay: "delay-400"
    },
    { 
      id: 5, 
      src: "/bourse_du_travail_Ph_F.Deval_12.webp",
      position: "top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2", 
      width: "w-[260px] md:w-[450px]", 
      height: "h-[200px] md:h-[340px]", 
      zIndex: "z-20",
      delay: "delay-0"
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white flex flex-col items-center">
      {/* Collage d'images */}
      <div className="relative w-full h-[500px] md:h-[700px] mb-8 md:mb-12">
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
          <p className="font-swiss font-bold text-black text-xl md:text-2xl lg:text-[28px] tracking-[-0.5px] leading-relaxed">
            Jean Dupas (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s’impose comme l’un des artistes les plus emblématiques de l’Art Déco.
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
