import { useState } from "react";

export const VideoSection = (): JSX.Element => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-12 md:mb-16">
        Expérience Interactive
      </h2>
        <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
            <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
                Ce projet consiste à concevoir une expérience interactive sur tablette permettant au public de découvrir des œuvres de l'artiste Dupas normalement inaccessibles car situées ou perdues à travers le monde.  </p>

            <p className="reveal slide-left [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
                L'expérience se présente comme un voyage immersif suivant les déplacements de l'artiste à l'international, via une carte interactive et un système de déplacement narratif.
            </p>

        </div>
      <div className="flex items-center justify-center w-full max-w-md mx-auto">
        <div className="w-full aspect-[9/16] bg-[#E5E5E5] border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
          {videoUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="Experience interactive"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
              <span className="text-gray-500 text-center text-sm">Vidéo de l'expérience interactive</span>
              <input
                type="text"
                placeholder="Entrez l'URL de la vidéo"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded text-sm w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
