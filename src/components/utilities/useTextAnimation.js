import { useEffect } from "react";
import { gsap } from "gsap";

export const useTextAnimation = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      const textElements = container.querySelectorAll("h1, h2, h3, p");

      textElements.forEach((textElement) => {
        const text = textElement.textContent;
        textElement.textContent = "";

        text.split(" ").forEach((word, index) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          textElement.appendChild(span);

          gsap.from(span, {
            duration: 0.5,
            opacity: 0,
            x: -20,
            ease: "power2.inOut",
            delay: index * 0.1,
          });
        });
      });
    });
  }, []);
};
