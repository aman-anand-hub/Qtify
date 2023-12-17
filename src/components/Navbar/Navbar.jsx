import React from "react";
import styles from "./Navbar.module.css";
import {ReactComponent as AppIcon } from "../../assets/AppIcon.svg";
import Search from "./Search/Search.jsx";
import Button from "./Button/Button.jsx";

function Navbar() {
    return (
        <div className={styles.nav} >
            
            <div className={styles.logo}>
                <AppIcon />
            </div>

            <Search>Search a album of your choice</Search>

            <Button>Give Feedback</Button>

        </div>
    )
}

export default Navbar;