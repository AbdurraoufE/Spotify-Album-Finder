
import { useState } from 'react';
import './App.css'
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";

// declare keys from .env file
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
   <>
      <Container>
        <InputGroup>
          <FormControl
            placeholder = "Search For An Artist"
            type = "input"
            arial-label = "Search For An Artist"
            onKeyDown = {""} // search function
            onChange = {""} // setSearch
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

          <Button onClick={{}}>Search</Button>
        </InputGroup>
      </Container>
    </>
  )
}

export default App
