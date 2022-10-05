import * as React from 'react';
import { Button, Dialog, DialogContent, Typography, Container, Card, CardContent, CardActions, Grid } from '@mui/material';
import '@fontsource/dynapuff';

export default function JokeDisplay(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Card>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12}>
            <CardContent >
              <Typography id="joke-setup" variant="h5" component="h3" sx={{textAlign: "center", fontFamily: "DynaPuff"}}>
                {props.setup} 
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardActions>
              <Button variant="contained" onClick={handleClickOpen}> 
                Reveal the Punchline!
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labeledby="punchline-dialog-title"
        aria-describedby="punchline-dialog-description"
      >
        <DialogContent>
          <Typography id="joke-punchline" variant="h5" component="h3" sx={{textAlign: "center", fontFamily: "DynaPuff"}}>
            {props.punchline}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
}