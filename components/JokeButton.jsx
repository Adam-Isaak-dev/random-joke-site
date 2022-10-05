import * as React from "react";
import { Box, Button, Container, Grid } from "@mui/material";

export default function JokeButton(props) {

  return (
    <Container>
      <Box sx={{
        p: 4
      }}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={(e) => {props.onButtonPress(e)}}>
              {props.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};