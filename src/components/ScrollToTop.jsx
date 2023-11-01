import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  //   const [showBtn, setShowBtn] = useState("goTopHidden");
  //   const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleVisibleButton);
  //   });

  //   const handleVisibleButton = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);

  //     if (scrollPosition > 50) {
  //       return setShowBtn("goTop");
  //     } else if (scrollPosition < 50) {
  //       return setShowBtn("goTopHidden");
  //     }
  //   };

  //   const handleScrollUp = () => {
  //     refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  //   };

  return (
    <div>
      <button className={styles.scrollBtn} onClick={scrollToTop}>
        Scroll to top
      </button>
    </div>
  );
}
