import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Merriweather&family=Roboto:ital,wght@1,300&display=swap');
</style> 

function Search({children}) {
    return (
        <form className={styles.wrapper}>
            <input placeholder={children} className={styles.input}></input>
            <button className={styles.searchIcon}>
                <SearchIcon />
            </button>
        </form>
    )
}

export default Search;