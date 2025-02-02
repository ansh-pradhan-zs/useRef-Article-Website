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
  const fontWeight =
    titleFontWeight === "light"
      ? styles.fwLight
      : titleFontWeight === "medium"
      ? styles.fwMedium
      : styles.fwDark;

  const fontSize =
    titleFontSize === "small"
      ? styles.fsSmall
      : titleFontSize === "medium"
      ? styles.fsMedium
      : styles.fsLarge;

  return (
    <div>
      <h1 className={`${fontWeight} ${fontSize}`}>{title}</h1>
      <h3 className={styles.subTitle}>{subTitle}</h3>
    </div>
  );
};

export default Heading;
