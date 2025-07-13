"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface AgendaItem {
  date: string; // ISO format date
  title: string;
  subtitle: string;
}

export function AgendaTimeline({ items }: { items: AgendaItem[] }) {
  const now = new Date();
  let current = items.findIndex((item) => now <= new Date(item.date));
  if (current === -1) current = items.length - 1;

  return (
    <div className="flex justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {items.map((item, index) => {
          const state =
            index < current ? "past" : index === current ? "current" : "future";
          return (
            <li key={item.title} className="mb-10 ms-6">
              <span
                className={cn(
                  "absolute -start-3 flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-[#121214] dark:ring-[#121214]",
                  state === "current"
                    ? "bg-blue-600"
                    : state === "past"
                    ? "bg-gray-400 dark:bg-gray-600"
                    : "bg-gray-200 dark:bg-gray-700"
                )}
              />
              <h3 className="font-medium leading-tight">{item.title}</h3>
              <time className="block mb-1 text-sm text-gray-400">
                {item.subtitle}
              </time>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
