import { Box, Container, Typography, Link } from '@mui/material';
import * as React from 'react';

export default function About(props) {

  return (
    <Container>
      <Container maxWidth="md">
        <Box pt={3}>
          <Typography variant="h4" component="h1">
            About
          </Typography>
          <Typography variant="h5" component="h2">
            Hello there and welcome to this random place on the internet!
          </Typography>
          <Typography variant="h6" component="p">
            This little site was made as a small project for some practice and for others to enjoy, I hope you like it!
          </Typography>
          <Typography variant="h6" component="p">
            I built the site using the following:
            <ul>
              <li>
                <Link href="https://nextjs.org/">Next.js</Link> - A Javascript Framework built off of React.
              </li>
              <li>
                <Link href="https://mui.com/">Material UI</Link> - A UI component set for React.
              </li>
              <li>
                <Link href="https://github.com/15Dkatz/official_joke_api">David Katz&apos;s Official Joke API</Link> - A fun and free API for getting random jokes. 
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" component="p">
            You can take a look at my other work on <Link href="https://github.com/Adam-Isaak-dev">Github</Link>.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};