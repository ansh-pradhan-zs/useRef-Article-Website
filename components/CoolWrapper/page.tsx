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
  return (
    <main
      className={styles.wrapper}
      style={{
        width:
          wrapperWidth === "small"
            ? "40%"
            : wrapperWidth === "medium"
            ? "60%"
            : wrapperWidth === "large"
            ? "90%"
            : wrapperWidth === "full"
            ? "100%"
            : "fit-content",
        boxShadow: `-10px 10px 0px ${wrapperShadowColor}`,
        padding: `${wrapperPadding}px`,
        marginTop:
          marginTop === "large"
            ? "3rem"
            : marginTop === "medium"
            ? "2rem"
            : "1rem",
      }}
    >
      {children}
    </main>
  );
};

export default CoolWrapper;
