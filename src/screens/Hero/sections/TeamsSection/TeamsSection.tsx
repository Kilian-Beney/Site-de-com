import { useState } from "react";

export const TeamsSection = (): JSX.Element => {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const teams = [
    {
      title: "UX/UI\nDesign",
      description: "Conception de l'interface interactive et expérience utilisateur optimisée pour le contexte muséal.",
    },
    {
      title: "Direction\nArtistique & 3D",
      description: "Direction visuelle, création 3D et mise en valeur esthétique de l'univers artistique de Jean Dupas.",
    },
    {
      title: "Développement",
      description: "Architecture technique et développement de la plateforme interactive et de ses fonctionnalités.",
    },
    {
      title: "Stratégie &\nCommunication",
      description: "Stratégie de médiation, communication institutionnelle et accompagnement du projet.",
    },
    {
      title: "Rédaction",
      description: "Rédaction des contenus éditoriaux, textes biographiques et information du projet.",
    },
    {
      title: "Gestion de\nProjet",
      description: "Coordination générale, planification et suivi du projet en collaboration avec le MusBA.",
    },
  ];

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <h2 className="title-bar font-musba text-black text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] leading-tight mb-8 md:mb-10">
        Présentation des MMI Bordeaux
      </h2>

      <div className="max-w-[900px] flex flex-col gap-6 mb-12 md:mb-16">
        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          Les Métiers du Multimédia et de l’Internet (MMI) de Bordeaux rassemblent des profils complémentaires autour de la création numérique, du développement et de la stratégie de communication. Cette diversité de compétences permet de concevoir des projets complets, mêlant réflexion, créativité et maîtrise technique.
        </p>

        <p className="reveal slide-left font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed md:leading-[32px]">
          À travers le projet Dupas, les étudiants MMI ont travaillé de manière transversale pour imaginer une expérience adaptée au contexte muséal, respectueuse de l’identité du MusBA et accessible à tous les publics. De la conception de l’interface à la narration du projet, chaque pôle a contribué à donner vie à une expérience interactive cohérente, immersive et porteuse de sens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teams.map((team, index) => (
          <div
            key={index}
            className="h-80 cursor-pointer perspective"
            onClick={() => toggleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center border border-black p-8 md:p-10 bg-white"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="font-swiss font-medium text-black text-xl md:text-2xl lg:text-[28px] tracking-[-0.5px] leading-tight text-center whitespace-pre-line">
                  {team.title}
                </h3>
              </div>

              <div
                className="absolute w-full h-full flex flex-col items-center justify-center border border-black p-6 md:p-8 bg-white"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="font-swiss font-normal text-black text-sm md:text-base lg:text-[16px] tracking-[-0.4px] leading-relaxed text-center">
                  {team.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-8 font-swiss">
        Cliquez sur les cartes pour découvrir ce que chaque équipe a apporté au projet
      </p>
    </section>
  );
};
