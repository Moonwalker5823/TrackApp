import { forwardRef, useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tracks from './components/Tracks';
import { TrackContext } from './useSongContext';
import { Context } from './useSongContext'

function App() {

  const {track} = TrackContext();
  
  

  return (
    <Context.Provider value={{track}} >
    <div className="app">
      <Navbar title={"Track App"}/>
      <Tracks/>
    </div>
     </Context.Provider>
    
  );
}

export default App;
