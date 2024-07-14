
import './App.css'

// declare keys from .env file
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

console.log(clientId, clientSecret);

function App() {
  

  return (
   <>
      <h1>Codédex Project Template</h1>
    </>
  )
}

export default App
