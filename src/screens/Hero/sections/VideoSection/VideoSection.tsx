import { LazyVideo } from "../../../../components/LazyVideo";

export const VideoSection = (): JSX.Element => {
  const videoUrl = "/musba vidéo 1 v1.mp4";

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-4">
        Expérience interactive
      </h2>
      <h3 className="font-musba text-[#85A798] text-xl md:text-2xl lg:text-3xl mb-12 md:mb-16 pl-4 border-l-4 border-[#85A798]">
        Dupas : ses œuvres dans le monde entier
      </h3>
      
      <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Nous proposons une expérience interactive sur tablette qui invite le public à partir sur les traces de Jean Dupas, au-delà des murs du musée. Pensée comme un voyage, cette exploration permet de découvrir des œuvres aujourd’hui inaccessibles : fresques monumentales, décors architecturaux ou créations perdues dans l’immensité de l’océan ou intégrées à des bâtiments à travers le monde.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Loin d’un catalogue d’œuvres traditionnel, l’expérience repose sur une navigation immersive et intuitive. À travers une carte du monde interactive, le visiteur explore les lieux marqués par Jean Dupas, découvre l’histoire de chaque œuvre, son contexte de création et son implantation géographique. L’objectif est de faire ressentir la présence de ces œuvres comme si l’on s’y trouvait, tout en révélant la dimension profondément internationale de l’artiste.
        </p>
      </div>

      <div className="flex items-center justify-center w-full max-w-[400px] mx-auto">
        <div className="w-full aspect-[9/16] bg-[#E5E5E5] border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center shadow-inner relative group min-h-[500px]">
          <LazyVideo
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay={false}
            muted={true}
            loop={true}
            controls={true}
          />
        </div>
      </div>
    </section>
  );
};
