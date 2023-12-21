import React from "react";
import styles from "./Card.module.css";

function Card({imgLink, numberFollows, genreName}) {
    return (
        <div className={styles.cardContainer}>

            <div className={styles.wrapper}>

                <div className={styles.cardImage}>
                    <img src={imgLink} alt={genreName}></img>
                </div>

                <div className={styles.followSection}>
                    <div className={styles.followTem}>
                        <p className={styles.followText}>{numberFollows} Follows</p>
                    </div>
                </div>

            </div>

            <div className={styles.genreText}>
                <p className={styles.genreTextPara}>{genreName}</p>
            </div>
        </div>
    );
}

export default Card;