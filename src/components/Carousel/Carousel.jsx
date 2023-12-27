import React, { useEffect } from 'react';
import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from 'swiper/react';

import Card from "../Card/Card.jsx"
import CarouselNavigationLeft from "./CarouselNavigationLeft/CarouselNavigationLeft.jsx"
import CarouselNavigationRight from './CarouselNavigationRight/CarouselNavigationRight.jsx';

const Controls= ({album}) => {
    const { swiper }= useSwiper();
    useEffect(() => {
        swiper?.slideTo(0);
    }, [album]);
    return <></>
}

function Carousel ({album, cardType}) {
  return (
    <div className={styles.wrapper}>
        <Swiper
          modules={{ Navigation }}
          spaceBetween={40}
          slidesPerView={6}
          style={{padding: "20px 30px"}}
          initialSlide={0}
          allowTouchMove
        >  
            <Controls album={album}/>

            <CarouselNavigationLeft />
            <CarouselNavigationRight />

            {album.map((albumItem) => (
                <SwiperSlide>
                  {
                    cardType ? 
                    (
                      <Card 
                      key={albumItem.id}
                      imgLink={albumItem.image} 
                      number={albumItem.follows} 
                      genreName={albumItem.title}
                      numberSongs={albumItem.songs.length}
                      cardType={cardType}
                      />
                    ) :
                    (
                      <Card
                      key={albumItem.id}
                      imgLink={albumItem.image}
                      number={albumItem.likes}
                      genreName={albumItem.title}
                      numberSongs={""}
                      cardType={cardType}
                      />
                    )
                  }
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
  );
};

export default Carousel;