import * as React from 'react';
import Link from 'next/link'
import { AppBar, Button, Container, Toolbar,  } from '@mui/material';
import '@fontsource/slackey';

const pages = [{'text': 'Home', 'link': ''}, {'text': 'About', 'link': 'about'}];

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
          <Link href="/">
            <Button variant="text" sx={{fontFamily: 'Slackey', color: "white", fontSize: 20}} >
              Random Dad Joke's
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
