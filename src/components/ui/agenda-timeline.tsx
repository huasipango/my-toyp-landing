"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface AgendaItem {
  date: string;
  title: string;
  subtitle: string;
}

export function AgendaTimeline({
  items,
  variant = "dark",
}: {
  items: AgendaItem[];
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";
  const now = new Date();
  let current = items.findIndex((item) => now <= new Date(item.date));
  if (current === -1) current = items.length - 1;

  return (
    <div className="flex justify-center">
      <ol
        className={cn(
          "relative border-s",
          isLight ? "border-toyp-navy/15" : "border-gray-200 dark:border-gray-700"
        )}
      >
        {items.map((item, index) => {
          const state =
            index < current ? "past" : index === current ? "current" : "future";
          return (
            <li key={item.title} className="mb-10 ms-6">
              <span
                className={cn(
                  "absolute -start-3 flex items-center justify-center w-6 h-6 rounded-full ring-8",
                  isLight ? "ring-white" : "ring-[#121214] dark:ring-[#121214]",
                  state === "current"
                    ? isLight
                      ? "bg-toyp-gold"
                      : "bg-blue-600"
                    : state === "past"
                      ? isLight
                        ? "bg-toyp-sky/60"
                        : "bg-gray-400 dark:bg-gray-600"
                      : isLight
                        ? "bg-neutral-200"
                        : "bg-gray-200 dark:bg-gray-700"
                )}
              />
              <h3
                className={cn(
                  "font-medium leading-tight",
                  isLight ? "text-toyp-navy" : undefined
                )}
              >
                {item.title}
              </h3>
              <time
                className={cn(
                  "block mb-1 text-sm",
                  isLight ? "text-neutral-500" : "text-gray-400"
                )}
              >
                {item.subtitle}
              </time>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
