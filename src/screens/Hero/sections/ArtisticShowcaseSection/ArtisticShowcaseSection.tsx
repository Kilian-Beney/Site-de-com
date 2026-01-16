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

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 50);
      mouseY.set(y * 50);
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
      position: "top-[3%] left-[3%]",
      parallaxSpeed: -80,
      mouseInfluence: 1.8,
      isCenter: false
    },
    {
      id: 2,
      src: "/bourse_du_travail__frederic_Deval_ville_de_Bordeaux_6.webp",
      position: "top-[3%] right-[3%]",
      parallaxSpeed: -60,
      mouseInfluence: 2.0,
      isCenter: false
    },
    {
      id: 3,
      src: "/bourse_du_travail_Ph_F.Deval_12.webp",
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      parallaxSpeed: -20,
      mouseInfluence: 0.6,
      isCenter: true
    },
    {
      id: 4,
      src: "/bourse_du_travail_Ph_F.Deval_2.webp",
      position: "bottom-[3%] left-[3%]",
      parallaxSpeed: -100,
      mouseInfluence: 1.6,
      isCenter: false
    },
    {
      id: 5,
      src: "/bourse_du_travail_Ph_F.Deval_5.webp",
      position: "bottom-[3%] right-[3%]",
      parallaxSpeed: -70,
      mouseInfluence: 1.9,
      isCenter: false
    },
  ];

  const title = "Jean Dupas";

  const scrollIndicator = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-24 px-4 md:px-12 lg:px-[114px] bg-white flex flex-col items-center overflow-hidden"
    >
      <motion.div
        className="fixed left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full overflow-hidden z-50 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full bg-[#85A798]"
          style={{ height: useTransform(scrollIndicator, (v) => `${v}%`) }}
        />
      </motion.div>

      <div className="relative w-full h-[600px] sm:h-[700px] md:h-[900px] lg:h-[1100px] xl:h-[1200px] mb-12 md:mb-20">
        <div className="absolute inset-0">
          {artworks.map((artwork) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, artwork.parallaxSpeed]);
            const isCenterImage = artwork.isCenter;

            return (
              <motion.div
                key={artwork.id}
                className={`absolute ${artwork.position} ${
                  isCenterImage
                    ? 'w-[280px] sm:w-[380px] md:w-[550px] lg:w-[700px] xl:w-[800px] h-[380px] sm:h-[520px] md:h-[750px] lg:h-[950px] xl:h-[1100px] z-20'
                    : 'w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-[280px] sm:h-[380px] md:h-[550px] lg:h-[680px] xl:h-[750px] z-30'
                } overflow-hidden shadow-2xl`}
                style={{
                  x: useTransform(mouseXSpring, (val) => val * artwork.mouseInfluence),
                  y: useTransform([y, mouseYSpring], ([yVal, mouseVal]: [number, number]) =>
                    yVal + mouseVal * artwork.mouseInfluence
                  ),
                }}
                initial={{ opacity: 0, scale: 0.85, rotate: isCenterImage ? 0 : (artwork.id % 2 === 0 ? 2 : -2) }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: artwork.id * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  rotate: { type: "spring", damping: 15, stiffness: 100 }
                }}
                whileHover={{
                  scale: isCenterImage ? 1.03 : 1.08,
                  zIndex: 50,
                  rotate: isCenterImage ? 0 : (artwork.id % 2 === 0 ? 3 : -3),
                  transition: {
                    duration: 0.4,
                    type: "spring",
                    damping: 15,
                    stiffness: 200
                  }
                }}
              >
                <motion.img
                  src={artwork.src}
                  alt={`Oeuvre ${artwork.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.6 }
                  }}
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
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
                rotateX: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100
                }
              }}
              className="inline-block origin-bottom"
              style={{
                display: char === " " ? "inline" : "inline-block",
                transformStyle: "preserve-3d"
              }}
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
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.p
            className="font-swiss font-normal text-black text-lg md:text-xl lg:text-[24px] tracking-[-0.5px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="font-bold">Jean Dupas</span> (1882-1964) est peintre, dessinateur, affichiste et décorateur français. Il s'impose comme l'un des artistes les plus emblématiques de l'<span className="font-bold">Art Déco</span>.
          </motion.p>

          <motion.p
            className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Né à Bordeaux, il s'est illustré par un style élégant et monumental, mêlant classicisme et modernité.
          </motion.p>

          <motion.p
            className="font-swiss font-normal text-black text-base md:text-lg lg:text-[20px] tracking-[-0.4px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Il est notamment connu pour ses grandes compositions décoratives, comme celles réalisées pour le paquebot Normandie, qui ont contribué à faire de lui une figure majeure des arts décoratifs du XXᵉ siècle.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
