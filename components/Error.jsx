import * as React from 'react';
import { Typography, Container, Card, CardContent, CardActions, Grid, CardHeader } from '@mui/material';


export default function Error() {
  return (
    <Container>
      <Card>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <CardContent disableGutters>
              <Typography id="error-code">
                Error
              </Typography>
              <Typography id="error-description" variant="h6" component="h4" sx={{textAlign: "center"}}>
                Oops, look's like somethings gone wrong with getting the joke.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}