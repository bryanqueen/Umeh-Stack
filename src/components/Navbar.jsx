import { Toolbar, styled, AppBar, Typography, InputBase, Menu, MenuItem } from '@mui/material';
// import { width } from '@mui/system';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import { Mail, Notifications } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';







const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
});
const Search =styled("div")(({theme})=>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex"
}))

const Icons =styled("Box")(({theme})=>({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));
const UserBox =styled("Box")(({theme})=>({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <Typography 
      variant="h6"
      sx={{ fontSize: {xs:"1rem", sm: "1.5em"} }}
      >
         Umeh~Stack
      </Typography>
      <Search >
        <InputBase placeholder="search...."/>
        {/* <Notifications color="dark"/> */}

      </Search>


      <Icons>
        <Badge badgeContent={4} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={10} color="error">
        <Notifications/>
        </Badge>
        <Badge>
        <Avatar 
        sx={{width:"30", height:"30"}} 
        src="https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000"
        onClick={e=>setOpen(true)}
        />
        </Badge>
      </Icons> 


      <UserBox>
      <Badge>
        <Avatar sx={{width:"30", height:"30"}} 
        src="https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000"
        onClick={e=>setOpen(true)}
        />
        
        </Badge>
      <Typography variant="span">Machala</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        arial-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right', 
        }}
        transformOrigin={{
          vertical:'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
     
    </AppBar>
  )
};

export default Navbar;