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
import FilterSection from "../FilterSection/FilterSection.jsx"

function AlbumSection() {

    const [newAlbum, setNewAlbum]= useState([]);
    const [topAlbum, setTopAlbum]= useState([]);
    const [showAllTopAlbum, setShowAllTopAlbum]= useState(true);
    const [showAllNewAlbum, setShowAllNewAlbum]= useState(true);
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        const fetchNewAlbumData = async () => {
            try {
                const req = await fetch("https://qtify-backend-labs.crio.do/albums/new");
                let request = await req.json();
                setNewAlbum(request);
            } catch (error) {
                console.log("Error fetching the albums", error);
            }
        }

        const fetchTopAlbumData = async () => {
            try {
                const req = await fetch("https://qtify-backend-labs.crio.do/albums/top");
                let request = await req.json();
                setTopAlbum(request);
            } catch (error) {
                console.log("Error fetching the albums", error); // Corrected error logging
            }
        }

        const fetchAllSongs= async() => {
            try
            {
                const req= await fetch("https://qtify-backend-labs.crio.do/songs");
                const reqData= await req.json();
                setAllSongs(reqData);
            }
            catch(error)
            {
                console.log("Error fetching all songs", error);
            }
        }

        fetchNewAlbumData();
        fetchTopAlbumData();
        fetchAllSongs();

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
                    <AlbumSectionHeader handleOnClick={handleOnClick1} param={true}    albumHeader={true}>Top Albums
                    </AlbumSectionHeader>
                ) : 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick1}
                    param={false} albumHeader={true}>Top Albums
                    </AlbumSectionHeader>
                )
            }
            {/* album rendering */}
            {
                showAllTopAlbum ? 
                (<Carousel album={newAlbum} cardType={true} />) : 
                (<GridOfCards album={newAlbum} cardType={true}/>)
            }
            
            {/* new album header rendering */}
            {
                showAllNewAlbum ? 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick2} param={true} albumHeader={true}>New Albums</AlbumSectionHeader>
                ) : 
                (
                    <AlbumSectionHeader handleOnClick={handleOnClick2}
                     param={false} albumHeader={true}>New Albums</AlbumSectionHeader>
                )
            }
            {/* album rendering */}
            {
                showAllNewAlbum ? 
                (<Carousel album={topAlbum} cardType={true} />) : 
                (<GridOfCards album={topAlbum} cardType={true}/>)
            }

            {/* green line */}

            {/* songs section */}
            {/* song section header */}
            <div className={styles.songSection}>

                <AlbumSectionHeader>Songs</AlbumSectionHeader>

                <div className={styles.filterWrapper}>
                    <FilterSection album={allSongs} />
                </div>
            </div>

        </div>
    );
}

export default AlbumSection;