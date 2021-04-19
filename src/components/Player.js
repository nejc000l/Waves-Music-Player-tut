import React,{useState} from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,
        faBook, 
        faAngleLeft,
        faAngleRight,
        faPause
        } from '@fortawesome/free-solid-svg-icons';


const Player = ({audioRef,currentSong,isPlaying,setIsPlaying,setSongInfo,songInfo}) => {

    // audio Ref
   

    //event handler


    //state

    

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
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                className="skip-back" 
                size="2x" 
                icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler}
                className="play" 
                size="2x" 
                icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon 
                className="skip-forward" 
                size="2x" 
                icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default Player;
