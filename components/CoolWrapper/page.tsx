import React, { ReactNode } from "react";
import styles from "./coolwrapper.module.css";

interface CoolWrapper {
  children: ReactNode;
  wrapperWidth?: "small" | "medium" | "large" | "full";
  wrapperShadowColor?: string;
  wrapperPadding?: number;
  marginTop?: "small" | "medium" | "large";
}

const CoolWrapper = ({
  children,
  wrapperWidth,
  wrapperShadowColor = "#d14e98",
  wrapperPadding = 30,
  marginTop,
}: CoolWrapper) => {
  const width =
    wrapperWidth === "small"
      ? styles.wSmall
      : wrapperWidth === "medium"
      ? styles.wMedium
      : wrapperWidth === "large"
      ? styles.wLarge
      : wrapperWidth === "full"
      ? styles.wFull
      : styles.wFitContent;

  const marginT =
    marginTop === "large"
      ? styles.mLarge
      : marginTop === "medium"
      ? styles.mMedium
      : styles.mSmall;

  return (
    <main
      className={`${styles.wrapper} ${width} ${marginT}`}
      style={{
        boxShadow: `-10px 10px 0px ${wrapperShadowColor}`,
        padding: `${wrapperPadding}px`,
      }}
    >
      {children}
    </main>
  );
};

export default CoolWrapper;
