import { useEffect, useState } from "react";
import "./App.css";
import pokemon from "pokemontcgsdk";

// https://github.com/PokemonTCG/pokemon-tcg-sdk-javascript

pokemon.configure({ apiKey: import.meta.env.VITE_API_KEY });

function App() {
  const [cards, setCards] = useState("No cards yet");
  const [textInput, setTextInput] = useState("")
  const [cardQuery, setCardQuery] = useState("name:charizard")

  function handleSubmit(event) {
    event.preventDefault()
    console.log(textInput)  
    console.log(`'name:${textInput}'`)
    setCardQuery(`name:${textInput}`)
  }

  useEffect(() => {
    pokemon.card.where({ q: cardQuery })
      .then(data => {setCards(data) 
        return data});
  }, [cardQuery]);

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
        <button>Submit</button>
      </form>
      {cards != "No cards yet" ? 
        <>
          <img src={cards.data[0].images.small}></img> 
          <p>{cards.data[0].name}</p>
        </>
        : 
        <p>No Cards Yet</p>}
      
    </>
  );
}

export default App;
