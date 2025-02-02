"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./article.module.css";
import Image from "next/image";
import cover from "../../public/react-useref.jpg";
import Heading from "../Heading/page";
import CoolWrapper from "../CoolWrapper/page";
import syntax from "../../public/syntax.jpeg";
import Highlight from "../Highlight/page";
import usecase2 from "../../public/usecase2.jpeg";
import usecase1 from "../../public/usecase1pic.jpeg";
import persist from "../../public/persist.jpeg";
import gameCode from "../../public/gamecode.jpeg";

const Article = () => {
  const [activeBox, setActiveBox] = useState<number>();
  const [startGame, setStartGame] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(5);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [avgReactionTime, setAvgReactionTime] = useState<number>(0);
  const reactionTimes = useRef<number[]>([]);
  const flashStartTime = useRef<number | null>(null);

  // ? scroll to section refs
  const definitionSection = useRef<HTMLElement | null>(null);
  const usageNSyntaxSection = useRef<HTMLElement | null>(null);
  const useCasesSection = useRef<HTMLElement | null>(null);
  const gameSection = useRef<HTMLElement | null>(null);

  function handleBoxClick(index: number) {
    if (index === activeBox && flashStartTime.current) {
      const reactionTime = performance.now() - flashStartTime.current;
      reactionTimes.current.push(reactionTime);
    }
  }

  function calculateAverageReactionTime() {
    const sum = reactionTimes.current.reduce((sum, current) => {
      sum += current;
      return sum;
    }, 0);
    setAvgReactionTime(
      parseFloat((sum / reactionTimes.current.length).toFixed(2))
    );
  }

  useEffect(() => {
    if (!startGame) return;

    function flashRandomBox() {
      const randomBoxIndex = Math.floor(Math.random() * 15);
      setActiveBox(randomBoxIndex);
      flashStartTime.current = performance.now();
    }
    const timerIntervalId = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    const intervalId = setInterval(flashRandomBox, 1000);
    const timeoutId = setInterval(() => {
      clearInterval(intervalId);
      clearInterval(timerIntervalId);
      setActiveBox(undefined);
      setStartGame(false);
      setTimeRemaining(5);
      setShowResult(true);
      calculateAverageReactionTime();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      clearInterval(timerIntervalId);
    };
  }, [startGame]);

  function scrollToSection(sectionRef: RefObject<HTMLElement>) {
    sectionRef?.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.articleContainer}>
      <div className={styles.coverImageContainer}>
        <Image
          src={cover}
          alt="useRef cover image"
          className={styles.coverImage}
        />
      </div>
      <button
        className={styles.gameActionButton}
        onClick={() => {
          // @ts-ignore
          scrollToSection(gameSection);
        }}
      >
        Let's Play
      </button>
      {/* Definition*/}
      <CoolWrapper
        wrapperShadowColor="#d14e98"
        wrapperWidth="large"
        marginTop="large"
      >
        <section ref={definitionSection}>
          <Heading
            title="Definition"
            subTitle="What is useRef() hook ?"
            titleFontWeight="dark"
          />
          <ul className={styles.list}>
            <li>
              In React, the useRef hook is used to create a mutable reference
              object that persists across renders.
            </li>
            <li>
              It is primarily used for directly accessing and interacting with
              DOM elements or for maintaining a mutable value that does not
              trigger re-renders when changed.
            </li>
          </ul>
        </section>
      </CoolWrapper>
      {/* Usage & Syntax */}
      <CoolWrapper
        wrapperShadowColor="#d14e98"
        wrapperWidth="large"
        marginTop="large"
      >
        <section ref={usageNSyntaxSection}>
          <Heading
            title="Usage & Syntax"
            subTitle="React syntax & best practices."
            titleFontSize="large"
            titleFontWeight="dark"
          />
          {/* Syntax */}
          <div className={styles.syntaxDiv}>
            <Heading
              title="Syntax"
              titleFontWeight="dark"
              titleFontSize="small"
            />
            <CoolWrapper wrapperShadowColor="#ff8b0f" wrapperPadding={10}>
              <div className={styles.syntaxInfo}>
                <Image
                  src={syntax}
                  alt="useref syntax"
                  className={styles.syntaxImg}
                />
                {/* syntax info */}
                <div>
                  <Heading title="How it works ?" titleFontSize="small" />
                  <ul className={styles.list}>
                    <li>Import the useRef hook from the react library.</li>
                    <li>Create the reference variable(divRef).</li>
                    <li>Pass Initial value to the useRef hook.</li>
                    <li>Supply the refence varibale to the desired div.</li>
                    <li>
                      Now you have reference of the div inside your component.
                    </li>
                  </ul>
                </div>
              </div>
            </CoolWrapper>
          </div>
          {/* usage */}
          <div className={styles.syntaxDiv}>
            <Heading
              title="Usages"
              titleFontWeight="dark"
              titleFontSize="small"
            />
            <CoolWrapper
              wrapperShadowColor="#ff8b0f"
              wrapperPadding={10}
              wrapperWidth="full"
            >
              <div className={styles.usages}>
                It can be used to access a{" "}
                <Highlight highlightColor="red">DOM</Highlight> element
                directly.
              </div>
            </CoolWrapper>
            <CoolWrapper
              wrapperShadowColor="#ff8b0f"
              wrapperPadding={10}
              wrapperWidth="full"
            >
              <div className={styles.usages}>
                The useRef Hook allows you to
                <Highlight highlightColor="red">persist</Highlight> values
                between renders.
              </div>
            </CoolWrapper>
            <CoolWrapper
              wrapperShadowColor="#ff8b0f"
              wrapperPadding={10}
              wrapperWidth="full"
            >
              <div className={styles.usages}>
                It can be used to store a
                <Highlight highlightColor="red">mutable</Highlight> value that
                does not cause a re-render when updated.
              </div>
            </CoolWrapper>
          </div>
        </section>
      </CoolWrapper>
      {/* Use Cases */}
      <CoolWrapper wrapperWidth="large" marginTop="large">
        <section ref={useCasesSection}>
          <Heading title="Interesting Use Cases" />
          {/* Programatic input file trigger */}
          <div className={styles.useCases}>
            <Heading
              title="Programmatic File Input Trigger"
              titleFontSize="small"
              titleFontWeight="dark"
            />
            <CoolWrapper wrapperShadowColor="#ff8b0f" wrapperPadding={10}>
              <div className={styles.useCase1}>
                <div className={styles.syntaxInfo}>
                  <div>
                    <Heading title="How it works ?" titleFontSize="small" />
                    <ul className={styles.list}>
                      <li>There is a hidden input tag in the DOM.</li>
                      <li>The hidden file input tag is supplied with a ref.</li>
                      <li>
                        Clicking on the camera icon programmatically clicks the
                        hidden input tag.
                      </li>
                      <li>Hence giving the user a better user experience.</li>
                    </ul>
                  </div>
                  <video
                    src="./inputRef.mov"
                    className={styles.inputRefVideo}
                    autoPlay
                    loop
                  ></video>
                </div>
                <div className={styles.useCase1Code}>
                  <Image
                    src={usecase1}
                    alt="scroll to code"
                    className={styles.useCase2}
                  />
                </div>
              </div>
            </CoolWrapper>
          </div>
          {/* Scroll to animation with useRef */}
          <div className={styles.useCases}>
            <Heading
              title="Scroll-To Animation"
              titleFontSize="small"
              titleFontWeight="dark"
            />
            <CoolWrapper wrapperShadowColor="#ff8b0f" wrapperPadding={10}>
              <div className={styles.useCase1}>
                <div className={styles.syntaxInfo}>
                  <video
                    src="./scrollToAnimations.mov"
                    className={styles.inputRefVideo}
                    autoPlay
                    loop
                  ></video>
                  <div>
                    <Heading title="How it works ?" titleFontSize="small" />
                    <ul className={styles.list}>
                      <li>
                        The
                        <Highlight highlightColor="red">targetDivRef</Highlight>
                        is supplied to the div to scroll to.
                      </li>
                      <li>
                        On the click of a button a
                        <Highlight highlightColor="red">handleScroll</Highlight>
                        function is called.
                      </li>
                      <li>
                        HandleClick function uses the
                        <Highlight highlightColor="red">
                          scrollIntoView
                        </Highlight>
                        property
                      </li>
                      <li>
                        Hence allowing the user to navigate to different parts
                        of a{" "}
                        <Highlight highlightColor="orange">
                          single page application.
                        </Highlight>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.useCase1Code}>
                  <Image
                    src={usecase2}
                    alt="scroll to code"
                    className={styles.useCase2}
                  />
                </div>
              </div>
            </CoolWrapper>
          </div>
          {/* Persisting Values across renders */}
          <div className={styles.useCases}>
            <Heading
              title="Persisting Values Across Renders"
              titleFontSize="small"
              titleFontWeight="dark"
            />
            <CoolWrapper wrapperShadowColor="#ff8b0f" wrapperPadding={10}>
              <div className={styles.useCase1}>
                <div className={styles.syntaxInfo}>
                  <div>
                    <Heading title="How it works ?" titleFontSize="small" />
                    <ul className={styles.list}>
                      <li>
                        useRef(1) initializes
                        <Highlight highlightColor="red">
                          renders.current
                        </Highlight>
                        to 1 and
                        <Highlight highlightColor="red">persists</Highlight> it
                        across renders.
                      </li>
                      <li>
                        Clicking the button updates the count state, causing a
                        re-render.
                      </li>
                      <li>
                        HandleClick function uses the
                        <Highlight highlightColor="red">
                          scrollIntoView
                        </Highlight>
                        property
                      </li>
                      <li>
                        renders.current updates on each click but
                        <Highlight highlightColor="red">
                          does not trigger
                        </Highlight>
                        a re-render since changing a ref does not affect the
                        component's state.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.useCase1Code}>
                  <Image
                    src={persist}
                    alt="scroll to code"
                    className={styles.useCase2}
                  />
                </div>
              </div>
            </CoolWrapper>
          </div>
        </section>
      </CoolWrapper>
      {/* Game to show useref functionality */}
      <CoolWrapper wrapperWidth="large" marginTop="large">
        <section ref={gameSection} className={styles.gameSection}>
          <Heading title="Lets Play A Game" />
          <CoolWrapper wrapperWidth="full" wrapperShadowColor="green">
            {/* game div */}
            <div className={styles.gameDiv}>
              <div className={styles.gameHeadingContainer}>
                <Heading
                  title="Reaction Test"
                  subTitle="Test your reaction time."
                  titleFontSize="small"
                  titleFontWeight="medium"
                />
                <div className={styles.gameStartButtonTimerDiv}>
                  {startGame && <span>{timeRemaining}s</span>}
                  <button
                    className={styles.startGameButton}
                    onClick={() => {
                      reactionTimes.current = [];
                      setShowResult(false);
                      setStartGame(true);
                    }}
                    disabled={startGame}
                  >
                    Start Game
                  </button>
                </div>
              </div>
              {showResult ? (
                <div className={styles.reactionTime}>
                  Your Average Reaction Time Is:
                  {Number.isNaN(avgReactionTime) ? (
                    <Highlight highlightColor="red">
                      Press Reaction Boxes
                    </Highlight>
                  ) : (
                    <Highlight highlightColor="green">
                      {avgReactionTime + "ms"}
                    </Highlight>
                  )}
                </div>
              ) : (
                <div className={styles.reactionGrid}>
                  {Array(15)
                    .fill(0)
                    .map((_, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => handleBoxClick(index)}
                          className={
                            index === activeBox
                              ? styles.reactionBox
                              : styles.reactionBoxPlaceholder
                          }
                        ></div>
                      );
                    })}
                </div>
              )}
            </div>
          </CoolWrapper>
          {/* Game Logic Explaination */}
          <div className={styles.gameWorkingDetails}>
            <div className={styles.gameCodeContainer}>
              <Heading title="How it works ?" titleFontSize="small" />
              <ul className={styles.list}>
                <li>
                  useRef() hook has been used to store the reaction times in an
                  array and also the flash start time.
                </li>
                <li>
                  At the end of 5 seconds the game shows you your average
                  reaction time
                </li>
                <li>
                  useRef() hook is useful here as it does not trigger a
                  re-render of the component when a new reaction time is added
                  to the reactionTimes array.
                </li>
              </ul>
            </div>
            <Image
              src={gameCode}
              alt="scroll to code"
              className={styles.useCase2}
            />
          </div>
        </section>
      </CoolWrapper>
      <span className={styles.creatorMessage}>
        Made with ❤️ by Ansh Pradhan
      </span>
    </div>
  );
};

export default Article;
