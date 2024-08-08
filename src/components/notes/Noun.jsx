import React, { useRef, useEffect } from "react";
import "../../App.css";
import { gsap } from "gsap";

export default function Noun() {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const paragraphRef = useRef(null);
  const listRefs = useRef([]);

  useEffect(() => {
    const animateText = (element) => {
      const textContent = element.textContent;
      element.textContent = "";
      const words = textContent.split(" ");

      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        element.appendChild(span);

        gsap.from(span, {
          duration: 0.5,
          opacity: 0,
          x: -20,
          ease: "power2.inOut",
          delay: index * 0.1,
        });
      });
    };

    animateText(containerRef.current);

    headingRefs.current.forEach((heading) => animateText(heading));

    animateText(paragraphRef.current);

    listRefs.current.forEach((listItem) => animateText(listItem));
  }, []);
  return (
    <div ref={containerRef}>
      <p ref={paragraphRef}>
        Nouns are names of things, actions or feelings.
        <br />
        <b>
          There are four types of nouns according to their meanings and four
          types according to their composition.
        </b>
        <br />
        Four types of nouns according to their meanings:
        <ol ref={(el) => (listRefs.current[0] = el)} type="123">
          <li>Proper Noun (Eg. Mr Thomas, Eiffel Tower, Shwe Dagon Pagoda)</li>
          <li>Common Noun (Eg. Man, Tree, Car)</li>
          <li>Abstract Noun (Eg. Kindness, Neglect, Care)</li>
          <li>Collective Noun</li>
        </ol>
        <br />
        Four types of nouns according to their compositions:
        <ol ref={(el) => (listRefs.current[1] = el)} type="123">
          <li>Simple Noun (Eg. Bike, House, Liqueor)</li>
          <li>Compound Noun (Eg. Toothbrush, firefighter, father-in-law)</li>
          <li>Phrasal Noun (Eg. breakup, takeoff, hangover)</li>
          <li>
            Noun derived from other words (Eg. Reading, Sadness, Kindness)
          </li>
        </ol>
        <br />
        <br />
        <h3 ref={(el) => (headingRefs.current[0] = el)}>
          Four types of nouns according to their meanings:
        </h3>
        <h5 ref={(el) => (headingRefs.current[1] = el)}>1. Proper Noun</h5>
        A noun that represents only one specific individual is called a proper
        noun. <br /> (Eg. Earth, Sun, Mount Everest)
        <h5 ref={(el) => (headingRefs.current[2] = el)}>2. Common Noun</h5>
        A noun that represents the general, non-specific thing is called a
        common noun.
        <br /> (Eg. dog, human, planet)
        <h5 ref={(el) => (headingRefs.current[3] = el)}>3. Abstract Noun</h5>
        A noun that represents emotions, ideas, concepts, qualities.
        <br />
        (Eg. freedom, love, heat)
        <h5 ref={(el) => (headingRefs.current[4] = el)}>4. Collective Noun</h5>
        A noun that represents a group or collection of individual people or
        things is called a collective noun.
        <br />
        (Eg. team, family, club)
        <br />
        <br />
        <h3 ref={(el) => (headingRefs.current[5] = el)}>
          Four types of nouns according to their compositions:
        </h3>
        <h5 ref={(el) => (headingRefs.current[6] = el)}>1. Simple Noun</h5>
        A noun that consists only a single word and is not derived from verbs,
        adjectives or adverbs is called a simple noun.
        <br /> (Eg. book, man, car)
        <h5 ref={(el) => (headingRefs.current[7] = el)}>2. Compound Noun</h5>
        A noun that is formed by the combination of two or more words (nouns,
        verbs, adverbs) to create a single noun is called a compound noun. There
        are two main types of compound nouns:
        <br />
        <b>
          1. Closed or Solid Compound (Eg. firefighter, football, toothbrush)
          <br /> 2. Hyphenated Compound Nouns (Eg. sister-in-law, pick-me-up)
        </b>
        <br />
        <h5 ref={(el) => (headingRefs.current[8] = el)}>3. Phrasal Noun</h5>
        A noun that is formed by combining a noun and a preposition creating a
        new meaning is called a phrasal noun.
        <br />
        (Eg. breakup (break+up), takeoff (take+off), handout (hand+out))
        <h5 ref={(el) => (headingRefs.current[9] = el)}>
          4. Noun derived from other words
        </h5>
        Some nouns are derived mostly from gerunds (V-ing) or adjectives. <br />{" "}
        (Eg. swimming, reading, happiness, kindness)
        <br />
        <br />
      </p>
      <h3 ref={(el) => (headingRefs.current[10] = el)}>
        Changing Singular Nouns Into Plural Nouns
      </h3>
      <div className="SgToPl">
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[11] = el)}>Simply adding -s</h5>
          Example
          <br />
          Boy - Boys
          <br />
          Book - Books
          <br /> Cake - Cakes
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[12] = el)}>
            If nouns end in "s, sh, ch, x, z"
          </h5>
          Example <br /> bus - buses
          <br /> dish - dishes
          <br />
          match - matches
          <br /> box - boxes
          <br />
          quiz - quizzes
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[13] = el)}>
            If nouns end in "f" or "fe",
          </h5>
          Example.
          <br /> leaf - leaves
          <br />
          wolf - wolves
          <br /> knife - knives
          <br />
          <b>
            (Exception: <br />
            cliff - cliffs
            <br />
            roof - roofs)
          </b>
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[14] = el)}>
            If nouns end in vowel + "y",
          </h5>{" "}
          Example
          <br />
          day - days
          <br /> key - keys <br />
          guy - guys
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[15] = el)}>
            If the nouns end in consonant + "y",
          </h5>{" "}
          Example
          <br /> city - cities <br /> baby - babies <br /> story - stories{" "}
          <br /> party - parties
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[16] = el)}>
            If the nouns end in vowel + "o"
          </h5>{" "}
          zoo - zoos <br />
          raido - radios <br /> video - videos <br /> stereo - stereos <br />{" "}
          studio - studdios
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[17] = el)}>
            If the nouns end in consonant + "o",
          </h5>{" "}
          Example
          <br />
          hero - heroes <br /> echo - echoes <br /> tomato - tomatoes <br />{" "}
          potato - potatoes <br />{" "}
          <b>
            {" "}
            (Exception
            <br /> piano - pianoes
            <br /> photo - photos)
          </b>
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[18] = el)}>Irregular nouns</h5>{" "}
          Example <br />
          man - men <br />
          foot - feet <br />
          tooth - teeth <br />
          mouse - mice
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[19] = el)}>
            Some nouns have same plural nouns as singular nouns
          </h5>{" "}
          Example
          <br />
          sheep - sheep <br /> fish - fish <br /> deer - deer <br /> moose -
          moose
        </div>

        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[20] = el)}>
            By adding "en" or "ren"
          </h5>{" "}
          ox - oxen <br /> child - children
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[21] = el)}>
            Some nouns end in "-us",
          </h5>{" "}
          Example
          <br /> cactus - cacti <br /> fungus - fungi <br /> octopus - octopi
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[22] = el)}>
            Some nouns end in "-a",
          </h5>{" "}
          Example <br />
          formula - formulae <br />
          vertebra - vertebrae <br />
          larva - larvae
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[23] = el)}>
            Some nouns end in "-ix" or "-ex" and add "-ices" or "-es"
          </h5>
          Example
          <br />
          appendix - appendices <br />
          (Sometimes appendixes)
          <br />
          index - indices
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[24] = el)}>
            If some nouns end in "-on" or "-um", end with "a"{" "}
          </h5>{" "}
          Example
          <br />
          criterion - criteria <br /> bacterium - bacteria <br /> medium - media
        </div>
        <div className="MiniSgToPl">
          <h5 ref={(el) => (headingRefs.current[25] = el)}>
            If some nouns end in "-is", end with "-es"
          </h5>{" "}
          Example <br />
          analysis - analyses <br /> crisis - crises <br /> thesis - theses
        </div>
      </div>
    </div>
  );
}
