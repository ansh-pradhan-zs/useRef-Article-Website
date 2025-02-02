import React, { ReactNode } from "react";
import styles from "./highlight.module.css";

interface HighlightProps {
  children: ReactNode;
  highlightColor: "red" | "orange" | "yellow" | "green";
}

const Highlight = ({ children, highlightColor }: HighlightProps) => {
  return (
    <span
      style={{
        color:
          highlightColor === "red"
            ? "red"
            : highlightColor === "orange"
            ? "orange"
            : highlightColor === "green"
            ? "green"
            : "yellow",
      }}
      className={styles.highlight}
    >
      {" " + children + " "}
    </span>
  );
};

export default Highlight;
