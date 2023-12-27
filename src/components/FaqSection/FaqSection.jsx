import React from "react";
import styles from "./FaqSection.module.css";
import AccordionComponent from "../AccordionComponent/AccordionComponent";

function FaqSection() {

    const packageInfo1 = {
        question: "Is QTify free to use?",
        answer: "Yes! It is 100% free, and has 0% ads!"
    };

    const packageInfo2 = {
        question: "Can I download and listen to songs offline?",
        answer: "Sorry, unfortunately we don't provide the service to download any songs."
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.faq}>FAQs</p>
            <AccordionComponent contentAcc={packageInfo1} />
            <AccordionComponent contentAcc={packageInfo2} />
        </div>
    )
}

export default FaqSection;