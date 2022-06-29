import { useState, createContext, useMemo, useCallback, useEffect} from 'react';
import axios from 'axios';
const trackList = {
  tracks: [{
    id: 1,
    track: "Your All I Need",
    artist: "Method Man"
  },
  {
    id: 2,
    track: "Count Me Out",
    artist: "Kendrick Lamar"
  },
  {
    id: 3,
    track: "Tell Me",
    artist: "Groove Theory"
  },
  {
    id: 4,
    track: "Remember The Time",
    artist: "Micheal Jackson"
  },
  {
    id: 5,
    track: "Big Boss Rabbit",
    artist: "Freddie Gibbs"
  },
  {
    id: 6,
    track: "Unforgiven",
    artist: "Metallica"
  },
  {
    id: 7,
    track: "Jail",
    artist: "Kanye West ft Jay-Z"
  },
  {
    id: 8,
    track: "Neck & Wrist",
    artist: "Pusha T ft Jay-Z"
  },
  {
    id: 9,
    track: "Ready To Die",
    artist: "Notorious B.I.G"
  },
  {
    id: 10,
    track: "Marcy Me",
    artist: "Jay-Z"
  }],
  count: 0
}


export const Context = createContext();

export const TrackContext = () => {

const [track, setTrack] = useState(trackList.tracks)
const [isPaused, setIsPaused] = useState(true)
const [selected, setSelected] = useState(trackList.tracks[trackList.count])

//Find Music API to fetch Songs from 

// useEffect(() => {
//   const fetch = async () => {
//     const result = await axios.get('https://shazam.p.rapidapi.com/charts/track');
//     setTrack(result.data)
//   }
//     fetch();
// }, [track])


// const options = {
//   method: 'GET',
//   url: 'https://shazam.p.rapidapi.com/charts/track',
//   params: {locale: 'en-US', pageSize: '10', startFrom: '0'},
//   headers: {
//     'X-RapidAPI-Key': '842b691e7cmsha371683a7f43d13p1bc7d7jsnb19f451ac903',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



  const forward = useCallback(
  ({id}) => {
    if(trackList.count === track.length) {
      trackList.count = 0
      setSelected(trackList.tracks[trackList.count])
    }else
    setSelected(trackList.count++)
  },[track.length]
  )

  const backward = useCallback(
    () => {
    if(trackList.count === 0) {
    trackList.count = trackList.tracks.length - 1
    setSelected(trackList.tracks[trackList.count])
  }else
  setSelected(trackList.tracks[trackList.count--])
  },[]
  );

    return useMemo(
      () => ({
          track, 
          isPaused, 
          selected,
          forward,
          backward
      }),
      [
        track, 
        isPaused, 
        selected,
        forward,
        backward
      ]
    );
}
