"use client";

import { cn } from "@/lib/utils";

const JCI_BORDER_GRADIENT =
  "linear-gradient(90deg, #120A44, #00AEEF, #76D2D2, #00AEEF, #120A44)";

export function PostularButton({
  href,
  variant = "light",
  className,
}: {
  href: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";

  if (isLight) {
    return (
      <a
        href={href}
        className={cn(
          "inline-block rounded-full p-[3px] transition-transform duration-300 hover:scale-[1.03]",
          "shadow-[0_4px_20px_rgba(0,174,239,0.25),0_2px_8px_rgba(18,10,68,0.12)]",
          className
        )}
        style={{ background: JCI_BORDER_GRADIENT }}
      >
        <span className="block rounded-full bg-toyp-gold px-10 py-3 text-base sm:text-lg font-bold text-white transition-colors duration-300 hover:bg-toyp-gold/95">
          Postular
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "inline-block relative py-3 px-10 rounded-full font-bold text-base sm:text-lg",
        "bg-white text-[#3A67B1] border-2 border-transparent",
        "shadow-lg transition-opacity duration-300 hover:opacity-90",
        className
      )}
    >
      <span className="relative z-10">Postular</span>
      <span
        className="absolute inset-0 rounded-full p-[2px] pointer-events-none"
        style={{
          background: JCI_BORDER_GRADIENT,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />
    </a>
  );
}
