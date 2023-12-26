import React, { useState, useEffect } from "react";
import styles from "./CarouselNavigationRight.module.css";
import {ReactComponent as RightArrow} from "../../../assets/rightArrow.svg";
import { useSwiper } from "swiper/react";

function CarouselNavigationRight() {
    const swiper= useSwiper();
    const [isEnd, setIsEnd]= useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    }, [swiper]);

    return (
        <div className={styles.navigationRight}>
            {
                !isEnd && <RightArrow onClick={() => swiper.slideNext()} />
            }
        </div>
    )
}
export default CarouselNavigationRight;