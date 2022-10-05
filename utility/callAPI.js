const callAPI = async (endpoint) => {
    return await fetch(`https://official-joke-api.appspot.com/jokes${endpoint}`)
    .then(response => response.json())
    .catch((response) => {
      console.error(`Error: ${response.status}`, response.text);
    });
}

export default callAPI;