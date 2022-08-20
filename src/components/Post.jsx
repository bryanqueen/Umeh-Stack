import { Favorite, FavoriteBorder, MoreVert, Share, } from '@mui/icons-material';
import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

function Post() {
    return (
        
             <Card sx={{margin:5 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red " }} aria-label="recipe">
            D 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Daniel Machala and Co. Inc."
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         This is a very nice Nft image that should cost about 0.69 SOL. Solana projects are booming nowadays...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      
      </CardActions>
     
    </Card>
    
    );
}

export default Post;