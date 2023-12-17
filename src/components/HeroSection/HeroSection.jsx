import React from "react";
import styles from "./HeroSection.module.css";
import {ReactComponent as Headphone} from "../../assets/headphone.svg"

function HeroSection() {
    return (
        <div className={styles.hero}>
            <Headphone />
        </div>
    )
}

export default HeroSection;