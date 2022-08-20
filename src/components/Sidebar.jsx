import { AccountBox, Article, Home, ModeNight, People, PersonOutlined, Settings, Storefront } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Sidebar({mode, setMode}) {
    return (
        
            <Box 
            // bgcolor="pink" 
            flex={1} 
            p={2}
            sx={{ display: {xs:"none", sm: "block"} }}
            >
                <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                                <ListItemText primary="Homepage"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Article />
                                <ListItemText primary="Pages"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <People />
                                <ListItemText primary="Groups"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <Storefront />
                                <ListItemText primary="MarketPlace"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <PersonOutlined />
                                <ListItemText primary="Friends"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings />
                                <ListItemText primary="Settings"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AccountBox />
                                <ListItemText primary="Profile"/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="div" href="">
                            <ListItemIcon>
                                <ModeNight />
                                 {/* <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")}/>
                                 <Switch onChange={(e) => setMode(mode === "light" ? "dark" :"light")}/> */}
                                 <Switch onChange={(e) => setMode(mode === "dark" ? "light" : "dark")}/>
                                
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
                </Box>
            </Box> 
        
    );
}

export default Sidebar;