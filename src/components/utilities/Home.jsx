import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
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

  return (
    <>
      <div className="container">
        <h3>Home</h3>
        <p ref={textRef}>Let me introduce myself first.</p>
        <p ref={textRef}>
          You can call me Thomas. I am just a mere young man who loves both
          English and programming. In this project, I'll share everything I
          know, about English Grammar and vocabularies. Firstly, you all must
          understand the meanings and uses of all eight parts of Speech. And
          then, you will have to learn degrees of Adjectives and then you will
          have to be proficient in all twelve tenses of Verbs. After all that,
          you can start to write phrases, clauses and sentences. Let's imagine
          that we are proficient all the things that I mentioned above. Start
          learning advanced vocabularies like phrasal verbs, idioms, modern
          vocabs etc. I hope that you will be able to use English in your daily
          life as a professional in your environment. In this pages, I shared
          everythingI know about English Grammar from tiny little details.
        </p>
      </div>
    </>
  );
}
