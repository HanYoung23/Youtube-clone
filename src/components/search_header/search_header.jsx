import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
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
      <div className={styles.logo}>
        <img
          className={styles.logoImg}
          src={require("./youtubeLogo.png")}
          alt="youtube"
        />
        <h1 className={styles.title}>Hantube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder=" Search..."
        onKeyPress={onKeyPress}
      />
    </header>
  );
};

export default SearchHeader;
