import React from 'react'
import styles from "./GridOfCards.module.css";
import Card from "../Card/Card.jsx";

function GridOfCards({album}) {
  return (
    <div className={styles.newAlbumContainer}>

        {album.map((albumItem) => (
            <Card 
                key={albumItem.id}
                imgLink={albumItem.image} 
                number={albumItem.follows} 
                genreName={albumItem.title}
                albumCard
            />
        ))}

    </div>
  )
}

export default GridOfCards;