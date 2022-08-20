import { Avatar,
        AvatarGroup,
        Box, 
        Divider, 
        ImageList, 
        ImageListItem, 
        List, 
        ListItem, 
        ListItemAvatar, 
        ListItemText, 
        Typography 
    } from '@mui/material';
import React from 'react';
// import { FixedSizeList } from 'react-window';

function Rightbar() {
    return (
        
            <Box  
            flex={2} 
            p={2}
            sx={{ display: {xs:"none", sm: "block"} }}
        
            >
                <Box position="fixed" width={250} >
                    <Typography variant="h6" fontWeight={100}>Online friends</Typography>
                    <AvatarGroup max={5}>
                        <Avatar alt='Remy Martins' src='https://material-ui.com/static/images/avatar/1.jpg'/>
                        <Avatar alt='Daniel Machala' src='https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000'/>
                        <Avatar alt='Wisdom Wanamaka' src='https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000'/>
                        <Avatar alt='Savage Tchalla' src=''/>
                        <Avatar alt='Njobu Tchaka' src='https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000'/>
                        <Avatar alt='Tim 0. Werner' src='https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000'/>
                    </AvatarGroup>
                    <Typography variant="h6" fontWeight={100} >Latest Photos</Typography>
                    <ImageList cols={3} rowHeight={100} gap={5} m={2}>
                        <ImageListItem>
                            <img
                                src='https://material-ui.com/static/images/image-list/breakfast.jpg'
                                alt='Breakfast'
                                />
                                </ImageListItem>
                                <ImageListItem>
                            <img
                                src='https://material-ui.com/static/images/image-list/breakfast.jpg'
                                alt='Burger'
                            />
                                     </ImageListItem>
                                     <ImageListItem>
                            <img
                                src='https://material-ui.com/static/images/avatar/1.jpg'
                                alt='Food'
                            />
                                     </ImageListItem>
                    </ImageList>
                    <Typography variant="h6" fontWeight={100}>
                        Latest Conversations
                    </Typography>
                    {/* <FixedSizeList
                        height={400}
                        width={360}
                        itemSize={46}
                        itemCount={200}
                        overscanCount={5}
                    > */}

                    <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
          />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
              <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
          />
      </ListItem>
    </List>
          {/* </FixedSizeList> */}

                </Box>
            </Box>
    
    );
}

export default Rightbar;