import React from "react";
import styles from "./Button.module.css";

function Button({children}) {

    const handleOnClick = (e) => {
        e.preventDefault(); 
    }

    return (
        <button 
        className={styles.button}
        onClick={(e) => handleOnClick(e)}
        >
                {children}
            </button>
    );
}

export default Button;