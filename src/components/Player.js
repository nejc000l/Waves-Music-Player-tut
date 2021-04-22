import React, {useEffect}  from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,
        faAngleLeft,
        faAngleRight,
        faPause
        } from '@fortawesome/free-solid-svg-icons';
import {playAudio} from '../Utils';
const Player = ({
    setCurrentSong,
    songs,audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
    setSongInfo,
    songInfo,
    setSongs
}) => {
    // use effect
    useEffect(() =>{
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    },[currentSong])
    const playSongHandler =()=>{
        if (isPlaying){
            console.log(audioRef.current)
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
            
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying);
        }
    }
    const getTime = (time)=>{
        return (
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
            )
    }
    const dragHandler =(e)=>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo,currentTime: e.target.value})   
    }
   
    const skipTrackHandler =(direction)=>{
        let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
        
        if (direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex +1) % songs.length]);
        } if (direction === 'skip-back'){
            if((currentIndex - 1 )% songs.length === -1 ){
                setCurrentSong(songs[songs.length -1 ])
                playAudio(isPlaying,audioRef);

                return;
            }
            setCurrentSong(songs[(currentIndex -1) % songs.length]);
        }
        playAudio(isPlaying,audioRef);

     }
    return (
        <div className="player">
            <div className="time-controller">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime} 
                onChange={dragHandler}
                type="range"/>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                onClick={()=> skipTrackHandler('skip-back')}
                className="skip-back" 
                size="2x" 
                icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler}
                className='play' 
                size="2x" 
                icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon 
                onClick={()=>skipTrackHandler('skip-forward')}
                className="skip-forward" 
                size="2x" 
                icon={faAngleRight}/>
            </div>
        </div>
    );
}
export default Player;