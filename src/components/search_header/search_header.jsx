import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onLogoClick, onSearch }) => {
  const inputRef = useRef();
  const onKeyPress = (event) => {
    let value = inputRef.current.value;
    if (event.key === "Enter" && value !== "") {
      onSearch(value);
      inputRef.current.value = "";
    }
  };

  return (
    <header className={styles.header}>
      <button href="#" className={styles.logo} onClick={onLogoClick}>
        <img
          className={styles.logoImg}
          src={require("./youtubeLogo.png")}
          alt="youtube"
        />
        <h2 className={styles.title}>Hantube</h2>
      </button>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder=" Search..."
        onKeyPress={onKeyPress}
      />
    </header>
  );
});

export default SearchHeader;
