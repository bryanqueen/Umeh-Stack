import { Avatar, Fab, Modal, styled, Tooltip, Typography, Box, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import React, { useState } from 'react';
import {Add as AddIcon, EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange } from '@mui/icons-material';
// import { Box } from '@mui/system';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})


function Add({mode, setmode}) {
    const [open, setOpen] = useState(false)
    return (
        <>
         <Tooltip 
         title="Delete" 
         sx={{position: "fixed", bottom: 10, left: {xs:"calc(50% - 25px)", md: 30} }}
         onClick={(e) => setOpen(true)}
        >
            <Fab color="primary" arial-lebel="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            arial-labelledby="modal-modal-title"
            arial-description="modal-modal-description"
        >
            <Box 
                width={400} 
                bgcolor={"background.default"} 
                color={"text.primary"}
                height={280}
                p={3} 
                borderRadius={5} 
            >
                <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                <UserBox >
                    <Avatar
                        src='https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000'
                        sx={{ width: 30, height: 30}}/>
                    <Typography fontWeight={500} variant="span">Machala</Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind"
                    variant='standard'
                />
                <Stack direction="row" gap={1}  mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image color="secondary"/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color="error"/>
                
                </Stack>
                <ButtonGroup
                    fullWidth
                    variant='contained'
                    aria-label="outlined primary button group"
                >
                    <Button>Post</Button>
                    <Button sx={{ width:"100px "}}>
                        <DateRange />
                    </Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
        </>
    );
}

export default Add;