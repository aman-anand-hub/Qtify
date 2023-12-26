// Api end-points Qtify:
// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres

import React, {useState, useEffect, useContext} from "react";
import styles from "./AlbumSection.module.css";
import AlbumSectionHeader from "../AlbumSectionHeader/AlbumSectionHeader.jsx";
import GridOfCards from "../GridOfCards/GridOfCards.jsx";
import Carousel from "../Carousel/Carousel.jsx";


function AlbumSection() {

    const [newAlbum, setNewAlbum]= useState([]);
    const [topAlbum, setTopAlbum]= useState([]);
    const [showAllTopAlbum, setShowAllTopAlbum]= useState(true);
    const [showAllNewAlbum, setShowAllNewAlbum]= useState(true);

    useEffect(() => {
        const fetchNewAlbumData = async () => {
            try {
                const req = await fetch("https://qtify-backend-labs.crio.do/albums/new");
                let request = await req.json();
                console.log(request);
                setNewAlbum(request);
            } catch (error) {
                console.log("Error fetching the albums", error);
            }
        }

        const fetchTopAlbumData = async () => {
            try {
                const req = await fetch("https://qtify-backend-labs.crio.do/albums/top");
                let request = await req.json();
                console.log(request);
                setTopAlbum(request);
            } catch (error) {
                console.log("Error fetching the albums", error); // Corrected error logging
            }
        }

        fetchNewAlbumData();
        fetchTopAlbumData();

    }, []);

    const handleOnClick1= () =>{
        setShowAllTopAlbum((prevValue) => !prevValue);
    }

    const handleOnClick2= () =>{
        setShowAllNewAlbum((prevValue) => !prevValue);
    }

    return (
        <div className={styles.albumDiv}>

            {/* top album header rendering */}
            {
                showAllTopAlbum ? 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick1} param={true}>Top Albums
                    </AlbumSectionHeader>
                ) : 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick1}
                     param={false}>Top Albums</AlbumSectionHeader>
                )
            }
            {/* album rendering */}
            {
                showAllTopAlbum ? 
                (<Carousel album={newAlbum}/>) : 
                (<GridOfCards album={newAlbum}/>)
            }
            
            {/* new album header rendering */}
            {
                showAllNewAlbum ? 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick2} param={true}>New Albums</AlbumSectionHeader>
                ) : 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick2}
                     param={false}>New Albums</AlbumSectionHeader>
                )
            }
            {/* album rendering */}
            {
                showAllNewAlbum ? 
                (<Carousel album={topAlbum}/>) : 
                (<GridOfCards album={topAlbum}/>)
            }

        </div>
    );
}

export default AlbumSection;