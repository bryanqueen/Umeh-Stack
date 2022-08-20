import { Box, Stack } from '@mui/system';
import React from 'react';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import Add from '../components/Add';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

function HomePage() {
    const [mode, setMode] = useState("light")
    const darkTheme = createTheme ({
      palette:{
        mode: mode,
      }
    })
    return (
        
        <ThemeProvider  theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />
            <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="space-between"
                bgcolor={"background.default"} 
                color={"text.primary"}
            >
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed />
            <Rightbar />
            </Stack>
            <Add />
        </Box>
        </ThemeProvider>
    );
}

export default HomePage;