import { LazyVideo } from "../../../../components/LazyVideo";

export const CommunicationSection = (): JSX.Element => {
  const videos = [
    {
      id: 1,
      src: "/Vidéo Sylvie.mp4",
      title: "Sylvie"
    },
    {
      id: 2,
      src: "/Poséidon.mp4",
      title: "Poséidon"
    },
    {
      id: 3,
      src: "/réunion.mp4",
      title: "Réunion"
    }
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-4">
            <div className="aspect-[9/16] bg-[#F5F5F5] border border-gray-200 rounded-lg overflow-hidden relative shadow-lg group">
              <LazyVideo
                src={video.src}
                className="w-full h-full object-cover"
                autoPlay={false}
                muted={true}
                loop={true}
                controls={true}
              />
            </div>
            <p className="font-musba text-[#85A798] text-center text-lg md:text-xl">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
