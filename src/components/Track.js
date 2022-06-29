import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';


function Track({track, artist, isPaused}) {

 return (
         <Card sx={{display: "flex"}}>
            <Box sx={{display:"flex", flexDirection: "column"}}>
                <CardMedia
                    component="img"
                    sx={{width: 151, display: "flex", justifyContent: "center"}}
                    image="https://media.istockphoto.com/vectors/vinyl-record-template-vector-id481475560?s=170667a"
                    alt={`${track} + ${artist} + ${track} video `}
                 />
                    <CardContent sx={{flex: '1 0 auto'}}>
                     <Typography component="div" variant="h4">
                     {track}
                     </Typography>
                     <Typography variant="subtitle1" component="div">
                     {artist}
                     </Typography>
                    </CardContent>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <IconButton aria-label="previous">
                       <SkipPreviousIcon/>
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={() => !isPaused}>
                       {isPaused ? <PauseIcon/> : <PlayArrowIcon/>}
                    </IconButton>
                    <IconButton aria-label="next">
                       <SkipNextIcon/>
                    </IconButton>
                </Box>
             </Box>
         </Card>
        
    )
}

export default Track
