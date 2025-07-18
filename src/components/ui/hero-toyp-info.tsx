"use client";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroTOYPInfo() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#3A67B1]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#0097D7]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#EDBE38]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#3A67B1]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#0097D7]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center space-y-6">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
        >
          <Circle className="h-2 w-2 fill-green-500/80" />
          <span className="text-sm text-white/60 tracking-wide">¿Qué es TOYP 2025?</span>
        </motion.div>
        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            TOYP (Ten Outstanding Young Persons)
          </h2>
        </motion.div>
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/100 mb-8 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto px-4">
            es el programa insignia de JCI que selecciona cada año hasta diez jóvenes de todo el mundo en función de su excelencia profesional, su contribución social y su capacidad demostrada para generar un impacto significativo. Originalmente lanzado a nivel internacional en 1983, el certamen se inspira en las premiaciones nacionales similares que se organizan en más de 100 países afiliados a JCI. Los nominados compiten en diez categorías, que abarcan desde el emprendimiento y el liderazgo académico hasta la innovación médica y la defensa de los derechos humanos.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export function HeroTOYPInfoAndCTA() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#3A67B1]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#0097D7]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#EDBE38]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#3A67B1]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#0097D7]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center gap-10 md:gap-16">
        {/* Título y descripción TOYP */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 md:mb-6"
          >
            <Circle className="h-2 w-2 fill-green-500/80" />
            <span className="text-sm text-white/60 tracking-wide">¿Qué es TOYP 2025?</span>
          </motion.div>
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3A67B1] via-[#0097D7] to-[#EDBE38]">
              TOYP (Ten Outstanding Young Persons)
            </h2>
          </motion.div>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/100 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto px-4">
              es el programa insignia de JCI que selecciona cada año hasta diez jóvenes de todo el mundo en función de su excelencia profesional, su contribución social y su capacidad demostrada para generar un impacto significativo. Originalmente lanzado a nivel internacional en 1983, el certamen se inspira en las premiaciones nacionales similares que se organizan en más de 100 países afiliados a JCI. Los nominados compiten en diez categorías, que abarcan desde el emprendimiento y el liderazgo académico hasta la innovación médica y la defensa de los derechos humanos.
            </p>
          </motion.div>
        </div>
        {/* Requisitos y CTA */}
        <div className="space-y-6 max-w-xl mx-auto">
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 md:mb-6"
          >
            <Circle className="h-2 w-2 fill-green-500/80" />
            <span className="text-sm text-white/60 tracking-wide">Requisitos</span>
          </motion.div>
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="text-base sm:text-lg md:text-xl text-white/100 mb-4 leading-relaxed font-medium tracking-wide max-w-xl mx-auto space-y-3 text-left list-disc list-inside">
              <li>Tener entre 17 a 35 años.</li>
              <li>Haber nacido o ser residente de la provincia de Santo Domingo de los Tsáchilas.</li>
            </ul>
          </motion.div>
          <motion.div custom={5} variants={fadeUpVariants} initial="hidden" animate="visible">
            <a href="https://forms.gle/Hj7UCRd28q9MuACb9"
              className="inline-block relative py-3 px-8 rounded-full font-bold shadow-lg transition-opacity duration-300 bg-white text-[#3A67B1] border-2 border-transparent hover:opacity-90"
              style={{
                backgroundClip: 'padding-box',
              }}
            >
              <span className="relative z-10">Postular</span>
              <span
                className="absolute inset-0 rounded-full p-[2px] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, #3A67B1, #0097D7, #EDBE38)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
