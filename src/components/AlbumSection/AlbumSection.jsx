// Api end-points Qtify:
// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres

import React, {useState, useEffect} from "react";
import styles from "./AlbumSection.module.css";
import AlbumSectionHeader from "../AlbumSectionHeader/AlbumSectionHeader.jsx";
import Card from "../Card/Card.jsx";


function AlbumSection() {

    const [album, setAlbum]= useState([]);
    // const [showAll, setShowAll]= useState(true);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const req = await fetch("https://qtify-backend-labs.crio.do/albums/top");
                let request = await req.json();
                console.log(request);
                setAlbum(request);
            } catch (error) {
                console.log("Error fetching the albums", error); // Corrected error logging
            }
        }

        fetchAlbumData();

    }, []);

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 7,
    //     slidesToScroll: 1
    //   };

    return (
        <div className={styles.container}>
            <AlbumSectionHeader />

            <div className={styles.temp}>

                {album.map((albumItem) => (
                    <Card 
                        key={albumItem.id}
                        imgLink={albumItem.image} 
                        numberFollows={albumItem.follows} 
                        genreName={albumItem.title} 
                    />
                ))}

            </div>

        </div>
    );
}

export default AlbumSection;