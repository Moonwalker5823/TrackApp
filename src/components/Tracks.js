import React, {useContext} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Track from './Track';
import { Context } from '../useSongContext';
import {Grid} from "@mui/material"



function Tracks(){
  const {track, isPaused} = useContext(Context)
      return (
       <>
        <CssBaseline />
        <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'whitesmoke', height: '90vh'}} >
          <Grid container spacing={1}>
            <Grid  container item spacing={1} sm={20}>
       {track.map(el => 
          <Track 
            key={el.id} 
            artist={el.artist} 
            track={el.track}
            isPaused={isPaused}
            />)}
        </Grid>
        </Grid>
        </Box>
      </Container>
       </>
    )
}

export default Tracks
