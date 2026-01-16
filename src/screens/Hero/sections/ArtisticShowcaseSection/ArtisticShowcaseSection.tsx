import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export const ArtisticShowcaseSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 30);
      mouseY.set(y * 30);
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", () => {
      mouseX.set(0);
      mouseY.set(0);
    });

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const artworks = [
    {
      id: 1,
      src: "/BAL_1195286.webp",
      position: "top-[5%] left-[5%]",
      parallaxSpeed: -40,
      mouseInfluence: 1.2
    },
    {
      id: 2,
      src: "/bourse_du_travail__frederic_Deval_ville_de_Bordeaux_6.webp",
      position: "top-[8%] right-[5%]",
      parallaxSpeed: -30,
      mouseInfluence: 1.5
    },
    {
      id: 3,
      src: "/bourse_du_travail_Ph_F.Deval_2.webp",
      position: "bottom-[8%] left-[8%]",
      parallaxSpeed: -50,
      mouseInfluence: 1.3
    },
    {
      id: 4,
      src: "/bourse_du_travail_Ph_F.Deval_5.webp",
      position: "bottom-[5%] right-[8%]",
      parallaxSpeed: -35,
      mouseInfluence: 1.4
    },
    {
      id: 5,
      src: "/bourse_du_travail_Ph_F.Deval_12.webp",
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      parallaxSpeed: -20,
      mouseInfluence: 0.8,
      isCenter: true
    },
  ];

  const title = "Jean Dupas";

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-24 px-4 md:px-12 lg:px-[114px] bg-white flex flex-col items-center overflow-hidden"
    >
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] mb-12 md:mb-20">
        <div className="absolute inset-0">
          {artworks.map((artwork) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, artwork.parallaxSpeed]);
            const isCenterImage = artwork.isCenter;

            return (
              <motion.div
                key={artwork.id}
                className={`absolute ${artwork.position} ${
                  isCenterImage
                    ? 'w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px] h-[280px] sm:h-[380px] md:h-[560px] lg:h-[700px] z-30'
                    : 'w-[150px] sm:w-[200px] md:w-[300px] lg:w-[380px] h-[200px] sm:h-[270px] md:h-[400px] lg:h-[500px] z-20'
                } overflow-hidden shadow-2xl`}
                style={{
                  x: useTransform(mouseXSpring, (val) => val * artwork.mouseInfluence),
                  y: useTransform([y, mouseYSpring], ([yVal, mouseVal]: [number, number]) =>
                    yVal + mouseVal * artwork.mouseInfluence
                  ),
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: artwork.id * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.08,
                  zIndex: 40,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={artwork.src}
                  alt={`Oeuvre ${artwork.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col items-center text-center px-4 overflow-hidden">
        <h1 className="font-musba text-black text-[35px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[180px] tracking-tighter leading-none mb-8 md:mb-12">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="flex flex-col gap-6 max-w-[850px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed">
            <span className="font-bold">Jean Dupas</span> (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s'impose comme l'un des artistes les plus emblématiques de l'<span className="font-bold">Art Déco</span>.
          </p>

          <p className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed">
            Né à Bordeaux, il s'est illustré par un style élégant et monumental, mêlant classicisme et modernité.
          </p>

          <p className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed">
            Il est notamment connu pour ses grandes compositions décoratives, comme celles réalisées pour le paquebot Normandie, qui ont contribué à faire de lui une figure majeure des arts décoratifs du XXᵉ siècle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
