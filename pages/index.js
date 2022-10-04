import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          TEST text goes here, if you are reading this properly then it worked.
        </Typography>
      </Box>
    </Container>
  )
}

