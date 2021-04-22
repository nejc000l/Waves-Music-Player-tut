import React from 'react';
import {playAudio} from '../Utils';



const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    id,
    audioRef,
    isPlaying,
    setSongs
}) => {
    const songSelectHandler = async () => {
        /* console.log(song.id);
        await setCurrentSong(song);
        audioRef.current.play(); */
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);
        //Add active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);

        //Check if the song is playing
        playAudio(isPlaying,audioRef);
       
};
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name} ></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong;