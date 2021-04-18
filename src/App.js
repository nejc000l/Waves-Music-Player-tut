import React, {useState} from 'react';
import './styles/App.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './utils';

function App() {
  //states
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying ={isPlaying}
        currentSong ={currentSong}
      />
    </div>
  );
}

export default App;
