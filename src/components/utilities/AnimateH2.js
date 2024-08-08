import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimateH2() {
  const h2s = document.querySelectorAll("h2");
  const buttons = document.querySelectorAll("button");
  const body = document.getElementsByClassName("container");
  const tables = document.querySelectorAll("table");
  const bodyRef = useRef(null);
  // Animate tables
  gsap.from(tables, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.inOut",
    delay: 1,
    scrollTrigger: {
      trigger: tables,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animate table rows
  tables.forEach((table) => {
    gsap.from(table.rows, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
      stagger: 0.1,
      delay: 1.5,
      scrollTrigger: {
        trigger: table,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(table.cells, {
      duration: 1,
      opacity: 0,
      x: -20,
      ease: "power2.inOut",
      stagger: 0.1,
      delay: 3,
      scrollTrigger: {
        trigger: table,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate h2s
  h2s.forEach((h2) => {
    const text = h2.textContent;
    h2.textContent = "";

    Array.from(text).forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      h2.appendChild(span);

      gsap.from(span, {
        duration: 0.5,
        opacity: 0,
        x: -20,
        ease: "power2.inOut",
        delay: index * 0.05,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.5,
        scrollTrigger: {
          trigger: h2,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  // Animate buttons
  buttons.forEach((button) => {
    gsap.from(button, {
      duration: 1.5,
      scale: 0.5,
      opacity: 1,
      ease: "power2.inOut",
      delay: 0.5,
      yoyo: true,
      scrollTrigger: {
        trigger: button,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate body (container elements)
  useEffect(() => {
    const text = bodyRef;
    const words = text.textContent.split(" ");
    text.textContent = "";

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      text.appendChild(span);

      gsap.from(span, {
        duration: 0.5,
        opacity: 0,
        x: -20,
        ease: "power2.inOut",
        delay: index * 0.1,
      });
    });
  }, []);

  // Scale and fade-in animation for container elements
  gsap.fromTo(
    body,
    { scaleY: 0.8, y: 50 },
    {
      duration: 1,
      scaleY: 1,
      y: 0,
      ease: "power2.inOut",
      delay: 1,
      scrollTrigger: {
        trigger: body,
        start: "top 5px",
        toggleActions: "play",
      },
    }
  );
}

export default AnimateH2;
