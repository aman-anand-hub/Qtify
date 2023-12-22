import React from "react";
import styles from "./AlbumSectionHeader.module.css";

function AlbumSectionHeader({ children }) {
    return (
        <div className={styles.heading}>
                <span className={styles.heading1}>{children}</span>

                <span className={styles.heading2}>Show all</span>
        </div>
    )
}

export default AlbumSectionHeader;