import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/vibrating-headphone 1.png"

function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroTextDiv}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <img src={Headphone} alt="headphone"></img>
        </div>
    )
}

export default HeroSection;