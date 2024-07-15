
import { useState, useEffect  } from 'react';
import './App.css'
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";

// declare keys from .env file
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  // initialize search input from POST request
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  // fetch access token
  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
    };
  
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
      // [] makes sure it runs only once
  }, []);

  // search function - GET request for artists
  async function search() {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Get the artist
    // searchInput gets what the user typed to search for the artist. Then return the first search result
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

      console.log("Search input: " + searchInput);
      console.log("Artist ID: " + artistID);
  }

  return (
   <>
      <Container>
        <InputGroup>
          <FormControl
            placeholder = "look up an artist"
            type = "input"
            arial-label = "Search For An Artist"
            onKeyDown = {(event) => {
              if (event.key == "Enter"){
                search();
              }
            }} // search function

            onChange = {(event) => setSearchInput(event.target.value)} // setSearch
            style = {{
              width: "300px",
              height: "35px",
              borderWidth: "0px",
              borderStyle: "solid",
              borderRadius: "5px",
              marginRight: "10px",
              paddingLeft: "10px",
            }}
          />

          <Button onClick={search}>search</Button>
        </InputGroup>
      </Container>
    </>
  )
}

export default App
