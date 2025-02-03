import React, { RefObject, useState } from "react";
import styles from "./scrolltonav.module.css";

interface ScrollToNavProps {
  scrollToSection: (sectionRef: RefObject<HTMLElement>) => void;
  sections: {
    definition: React.RefObject<HTMLElement>;
    usageSyntax: React.RefObject<HTMLElement>;
    useCases: React.RefObject<HTMLElement>;
    game: React.RefObject<HTMLElement>;
  };
}

const ScrollToNav = ({ scrollToSection, sections }: ScrollToNavProps) => {
  const [expandNavBar, setExpandNavBar] = useState<boolean>(false);

  return (
    <main
      onMouseEnter={() => setExpandNavBar(!expandNavBar)}
      onMouseLeave={() => setExpandNavBar(!expandNavBar)}
    >
      {expandNavBar ? (
        <div className={styles.scrollToNav}>
          <button onClick={() => scrollToSection(sections.definition)}>
            Definition
          </button>
          <button onClick={() => scrollToSection(sections.usageSyntax)}>
            Usage & Syntax
          </button>
          <button onClick={() => scrollToSection(sections.useCases)}>
            Use Cases
          </button>
          <button onClick={() => scrollToSection(sections.game)}>Game</button>
        </div>
      ) : (
        <div className={styles.scrollToNavCollapsed}>
          <span className={styles.navigationText}>Navigation</span>
        </div>
      )}
    </main>
  );
};

export default ScrollToNav;
