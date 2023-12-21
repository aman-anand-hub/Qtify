import React from "react";
import styles from "./AlbumSectionHeader.module.css";

function AlbumSectionHeader() {
    return (
        <div className={styles.heading}>
            <div className={styles.headingdiv}>
                <p className={styles.heading1}>Top Albums</p>
            </div>
            <div className={styles.headingdiv}>
                <p className={styles.heading2}>Show all</p>
            </div>
        </div>
    )
}

export default AlbumSectionHeader;