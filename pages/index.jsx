import * as React from 'react';
import { Box, Container, } from '@mui/material';
import JokeDisplay from '../components/JokeDisplay';
import JokeButton from '../components/JokeButton';
import Error from '../components/Error';
import callAPI from '../utility/callAPI';

export default function Index(props) {
  const [display, setDisplay] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Get your Joke!");
  const [setup, setSetup] = React.useState("");
  const [punchline, setPunchline] = React.useState("");

  const endpoint = '/general/random';

  async function onButtonPress(e) {
    e.preventDefault();

    let data = await callAPI(endpoint);
    
    if (data) {
      data = data[0];
      setError(false);
      setButtonText("Get Another Joke");
      setSetup(data.setup);
      setPunchline(data.punchline);
      setDisplay(true);
    } else {
      setError(true);
      setButtonText("Try Again?");
    }
  }

  return (
    <Container>
      <Container maxWidth="sm">
        <Box sx={{p: 3}}>
          { display ? <JokeDisplay punchline={punchline} setup={setup} /> : <></>}
          { error ? <Error /> : <></>}
          <JokeButton buttonText={buttonText} onButtonPress={onButtonPress}/>
        </Box>
      </Container>
    </Container>
  )
}

