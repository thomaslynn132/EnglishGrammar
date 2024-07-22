// animate-h2.js
import { gsap } from "gsap";

function AnimateH2() {
  const h2s = document.querySelectorAll("h1");
  const buttons = document.querySelectorAll("button");
  const body = document.getElementsByClassName("Container");
  const table = document.querySelectorAll("table");

  gsap.from(table, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.inOut",
    delay: 1,
  });

  gsap.from(table.rows, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.inOut",
    stagger: 0.1,
    delay: 1.5,
  });

  gsap.from(table.cells, {
    duration: 1,
    opacity: 0,
    x: -20,
    ease: "power2.inOut",
    stagger: 0.1,
    delay: 3,
  });
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
      });
    });
  });

  buttons.forEach((button) => {
    gsap.from(button, {
      duration: 0.5,
      scale: 0.5,
      opacity: 0,
      ease: "power2.inOut",
      delay: 0.5,
    });
  });

  // new animation for body tag
  gsap.from(body, {
    duration: 1,
    opacity: 0,
    y: 50, // move 50px from top and bottom
    ease: "power2.inOut",
    delay: 1, // delay after h2 and button animations
  });

  // fade in top and bottom 50px of the screen
  gsap.fromTo(
    body,
    { scaleY: 0.5, y: 50 },
    {
      duration: 1,
      scaleY: 1,
      y: 0,
      ease: "power2.inOut",
      delay: 1.5, // delay after body animation
    }
  );
}

export default AnimateH2;
