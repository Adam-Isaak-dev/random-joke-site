import * as React from 'react';
import Link from 'next/link'
import { AppBar, Box, Button, Container, Toolbar, Typography,  } from '@mui/material';
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
    <Container>
      <Box sx={{ height: 100, width: 100}}></Box>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display: 'flex', alignItems: "center", justifyContent: "center", flexFlow: "column", p: 1}}>
            <Link href="/about">
              <Button variant="text" sx={{color: "white", fontSize: 16}} >
                About
              </Button>
            </Link>
            <Typography variant="subtitle1">
              An app made by Adam Isaak
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};
export default TopBar;