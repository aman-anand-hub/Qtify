import React, { useEffect, useState } from "react";

import { useSwiper } from "swiper/react";


import styles from "./CarouselNavigationLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/leftArrow.svg";


function CarouselNavigationLeft() {
    const swiper= useSwiper();
    const [isBeginning, setIsBeginning]= useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning);
        })
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {
               !isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()} />
            }
        </div>
    )
}

export default CarouselNavigationLeft;