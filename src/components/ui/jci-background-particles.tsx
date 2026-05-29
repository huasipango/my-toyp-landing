"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type JciColor = "navy" | "sky" | "blue" | "gold" | "gold-light";

const JCI_COLOR_STYLES: Record<
  JciColor,
  { gradient: string; border: string; shadow: string; glow: string }
> = {
  navy: {
    gradient: "from-toyp-navy/22 via-toyp-navy/12",
    border: "border-toyp-navy/15",
    shadow: "shadow-[0_4px_24px_0_rgba(27,42,74,0.1)]",
    glow: "after:bg-[radial-gradient(circle_at_50%_50%,rgba(27,42,74,0.15),transparent_70%)]",
  },
  sky: {
    gradient: "from-toyp-sky/24 via-toyp-sky/14",
    border: "border-toyp-sky/18",
    shadow: "shadow-[0_4px_24px_0_rgba(0,151,215,0.12)]",
    glow: "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,151,215,0.18),transparent_70%)]",
  },
  blue: {
    gradient: "from-toyp-blue/22 via-toyp-blue/12",
    border: "border-toyp-blue/15",
    shadow: "shadow-[0_4px_24px_0_rgba(58,103,177,0.1)]",
    glow: "after:bg-[radial-gradient(circle_at_50%_50%,rgba(58,103,177,0.15),transparent_70%)]",
  },
  gold: {
    gradient: "from-toyp-gold/26 via-toyp-gold/14",
    border: "border-toyp-gold/20",
    shadow: "shadow-[0_4px_24px_0_rgba(201,162,39,0.14)]",
    glow: "after:bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.2),transparent_70%)]",
  },
  "gold-light": {
    gradient: "from-toyp-gold-light/28 via-toyp-gold-light/15",
    border: "border-toyp-gold-light/22",
    shadow: "shadow-[0_4px_24px_0_rgba(237,190,56,0.15)]",
    glow: "after:bg-[radial-gradient(circle_at_50%_50%,rgba(237,190,56,0.22),transparent_70%)]",
  },
};

const LIGHT_PARTICLES: Array<{
  delay: number;
  width: number;
  height: number;
  rotate: number;
  color: JciColor;
  className: string;
  floatDuration?: number;
  hideOnMobile?: boolean;
}> = [
  {
    delay: 0.2,
    width: 720,
    height: 170,
    rotate: 14,
    color: "sky",
    className: "left-[-12%] md:left-[-6%] top-[10%] md:top-[14%]",
  },
  {
    delay: 0.35,
    width: 580,
    height: 140,
    rotate: -18,
    color: "gold",
    className: "right-[-8%] md:right-[-2%] top-[62%] md:top-[68%]",
  },
  {
    delay: 0.45,
    width: 420,
    height: 110,
    rotate: -6,
    color: "gold-light",
    className: "left-[2%] md:left-[6%] bottom-[4%] md:bottom-[8%]",
    hideOnMobile: true,
  },
  {
    delay: 0.55,
    width: 320,
    height: 85,
    rotate: 22,
    color: "navy",
    className: "right-[10%] md:right-[16%] top-[8%] md:top-[12%]",
  },
  {
    delay: 0.65,
    width: 260,
    height: 70,
    rotate: -28,
    color: "blue",
    className: "left-[18%] md:left-[22%] top-[4%] md:top-[8%]",
    floatDuration: 10,
  },
  {
    delay: 0.75,
    width: 200,
    height: 55,
    rotate: 32,
    color: "gold",
    className: "right-[28%] md:right-[32%] bottom-[18%] md:bottom-[22%]",
    floatDuration: 9,
    hideOnMobile: true,
  },
  {
    delay: 0.85,
    width: 180,
    height: 48,
    rotate: -12,
    color: "sky",
    className: "left-[42%] md:left-[46%] top-[72%] md:top-[76%]",
    floatDuration: 11,
    hideOnMobile: true,
  },
  {
    delay: 0.95,
    width: 140,
    height: 40,
    rotate: 40,
    color: "gold-light",
    className: "right-[4%] md:right-[8%] top-[38%] md:top-[42%]",
    floatDuration: 8,
    hideOnMobile: true,
  },
  {
    delay: 1.05,
    width: 120,
    height: 35,
    rotate: -35,
    color: "blue",
    className: "left-[8%] md:left-[12%] top-[42%] md:top-[46%]",
    floatDuration: 7,
    hideOnMobile: true,
  },
];

function JciParticle({
  delay,
  width,
  height,
  rotate,
  color,
  className,
  floatDuration = 12,
  hideOnMobile = false,
}: {
  delay: number;
  width: number;
  height: number;
  rotate: number;
  color: JciColor;
  className?: string;
  floatDuration?: number;
  hideOnMobile?: boolean;
}) {
  const styles = JCI_COLOR_STYLES[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.4 },
      }}
      className={cn("absolute max-md:scale-[0.55] md:scale-100", hideOnMobile && "hidden md:block", className)}
    >
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, 4, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            styles.gradient,
            styles.border,
            "border md:border-2",
            "md:shadow-none",
            styles.shadow,
            "after:absolute after:inset-0 after:rounded-full md:after:block after:hidden",
            styles.glow
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function JciBackgroundParticles({
  className,
  ambient = "default",
}: {
  className?: string;
  ambient?: "default" | "soft";
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none",
        "opacity-[0.38] sm:opacity-55 md:opacity-70 lg:opacity-80",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 blur-3xl",
          ambient === "soft"
            ? "bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,151,215,0.06),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(201,162,39,0.07),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_15%_15%,rgba(0,151,215,0.08),transparent_45%),radial-gradient(ellipse_at_85%_75%,rgba(201,162,39,0.09),transparent_45%),radial-gradient(ellipse_at_55%_40%,rgba(58,103,177,0.05),transparent_55%)]"
        )}
      />
      {LIGHT_PARTICLES.map((particle) => (
        <JciParticle key={`${particle.color}-${particle.className}`} {...particle} />
      ))}
    </div>
  );
}

export function JciContentScrim({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.82)_45%,rgba(255,255,255,0.4)_75%,transparent_100%)]",
        "md:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.35)_50%,transparent_80%)]",
        className
      )}
    />
  );
}
