"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  JciBackgroundParticles,
  JciContentScrim,
} from "@/components/ui/jci-background-particles";
import { PostularButton } from "@/components/ui/postular-button";

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
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
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

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  titleImage,
  subtitle,
  showOnlyBackground = false,
  variant = "dark",
  formUrl,
  showPostularButton = false,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  titleImage?: string;
  subtitle?: string;
  showOnlyBackground?: boolean;
  variant?: "light" | "dark";
  formUrl?: string;
  showPostularButton?: boolean;
}) {
  const isLight = variant === "light";
  const postularHref = formUrl || "#postula";

  const getDelayedTransition = (index: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + index * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  });

  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
        isLight ? "bg-white" : "bg-[#030303]"
      )}
    >
      {!isLight && (
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]" />
      )}

      {isLight ? (
        <JciBackgroundParticles ambient="soft" />
      ) : (
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
      )}

      {!showOnlyBackground && (
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center space-y-6">
          {isLight && <JciContentScrim />}
          <div className="relative">
          <motion.div
            {...getDelayedTransition(0)}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 md:mb-6",
              isLight
                ? "bg-toyp-sky/10 border border-toyp-sky/25"
                : "bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            )}
          >
            <Circle
              className={cn(
                "h-2 w-2",
                isLight ? "fill-toyp-sky/80" : "fill-green-500/80"
              )}
            />
            <span
              className={cn(
                "text-sm tracking-wide",
                isLight ? "text-toyp-sky font-medium" : "text-white/60"
              )}
            >
              {badge}
            </span>
          </motion.div>

          <motion.div
            {...getDelayedTransition(1)}
            className="flex flex-col items-center gap-6 md:gap-8"
          >
            {titleImage ? (
              <h1>
                <img
                  src={titleImage}
                  alt={`TOYP 2026 — ${title1} ${title2}${subtitle ? `. ${subtitle}` : ""}`}
                  width={1259}
                  height={1029}
                  decoding="async"
                  fetchPriority="high"
                  className="w-[min(100%,25rem)] sm:max-w-lg md:max-w-[38rem] lg:max-w-3xl xl:max-w-4xl h-auto mx-auto select-none"
                />
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                {isLight ? (
                  <>
                    <span className="text-toyp-navy">{title1}</span>
                    <br />
                    <span className="text-toyp-gold">{title2}</span>
                  </>
                ) : (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A67B1] via-[#0097D7] to-[#EDBE38]">
                    {title1} {title2}
                  </span>
                )}
              </h1>
            )}
            {(showPostularButton || (formUrl && titleImage)) && (
              <PostularButton href={postularHref} variant={isLight ? "light" : "dark"} />
            )}
          </motion.div>

          {subtitle && !titleImage && (
            <motion.div {...getDelayedTransition(2)}>
              <p
                className={cn(
                  "text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto px-4",
                  isLight ? "text-neutral-700" : "text-white/100"
                )}
              >
                {subtitle}
              </p>
            </motion.div>
          )}

          {formUrl && !titleImage && (
            <motion.div {...getDelayedTransition(3)}>
              <PostularButton href={postularHref} variant={isLight ? "light" : "dark"} />
            </motion.div>
          )}
          </div>
        </div>
      )}

      {isLight ? null : (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      )}
    </div>
  );
}

export { HeroGeometric };
