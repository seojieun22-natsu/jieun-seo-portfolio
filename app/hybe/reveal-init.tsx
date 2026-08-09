"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = document.querySelectorAll(".reveal-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
