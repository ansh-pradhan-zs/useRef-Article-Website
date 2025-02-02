import React from "react";
import styles from "./heading.module.css";

interface HeadingTypes {
  title: string;
  subTitle?: string;
  titleFontWeight?: "light" | "medium" | "dark";
  titleFontSize?: "small" | "medium" | "large";
}

const Heading = ({
  title,
  subTitle,
  titleFontWeight,
  titleFontSize,
}: HeadingTypes) => {
  return (
    <div>
      <h1
        className={styles.title}
        style={{
          fontWeight:
            titleFontWeight === "light"
              ? 200
              : titleFontWeight === "medium"
              ? 500
              : 900,
          fontSize:
            titleFontSize === "small"
              ? "1.5rem"
              : titleFontSize === "medium"
              ? "2.5rem"
              : "3.5rem",
        }}
      >
        {title}
      </h1>
      <h3 className={styles.subTitle}>{subTitle}</h3>
    </div>
  );
};

export default Heading;
