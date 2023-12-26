import React from "react";
import styles from "./AlbumSectionHeader.module.css";

function AlbumSectionHeader({ children, handleOnClick, param}) {

    return (
        <div className={styles.heading}>

            <span className={styles.heading1}>{children}</span>

            {
                param ? 
                (
                    <span 
                    className={styles.heading2}
                    onClick={handleOnClick}
                    >
                    Show All
                    </span>
                ):
                (
                    <span className={styles.heading2} onClick={handleOnClick}>
                    Collapse
                    </span>
                )
            }

        </div>
    )
}

export default AlbumSectionHeader;