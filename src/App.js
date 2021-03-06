import React, {useState,useRef} from 'react';
import './styles/App.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './data';
import Library from './components/Library'


function App() {
  //ref 
  const audioRef = useRef(null)
  //states
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)
  const[songInfo, setSongInfo]=useState({
    currentTime:0,
    duration: 0,
})

const timeUpdateHandler =(e)=>{
  const current = e.target.currentTime;
  const duration = e.target.duration
  setSongInfo({...songInfo, currentTime:current, duration:duration})   
}
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying ={isPlaying}
        currentSong ={currentSong}
        
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
      <audio 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}></audio>

    </div>
  );
}

export default App;
