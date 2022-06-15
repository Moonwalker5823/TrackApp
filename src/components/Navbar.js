import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar({title}) {
    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor: "purple"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
           {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar
