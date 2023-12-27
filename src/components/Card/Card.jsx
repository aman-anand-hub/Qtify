import React from "react";
import styles from "./Card.module.css";
import Tooltip from '@mui/material/Tooltip';

function Card({ imgLink, number, genreName, numberSongs, cardType }) {
  return (
    cardType ? (
      <Tooltip title={`${numberSongs} songs`} arrow>
        <div className={styles.cardContainer}>
          <div className={styles.wrapper}>
            <div className={styles.cardImage}>
              <img src={imgLink} alt={genreName} />
            </div>
            <div className={styles.followSection}>
              <div className={styles.followTem}>
                <p className={styles.followText}>{number} follows</p>
              </div>
            </div>
          </div>
          <div className={styles.genreText}>
            <p className={styles.genreTextPara}>{genreName}</p>
          </div>
        </div>
      </Tooltip>
    ) : (
      <div className={styles.cardContainer}>
        <div className={styles.wrapper}>
          <div className={styles.cardImage}>
            <img src={imgLink} alt={genreName} />
          </div>
          <div className={styles.followSection}>
            <div className={styles.followTem}>
              <p className={styles.followText}>
                {number} {cardType ? "Follows" : "Likes"}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.genreText}>
          <p className={styles.genreTextPara}>{genreName}</p>
        </div>
      </div>
    )
  );
}

export default Card;
