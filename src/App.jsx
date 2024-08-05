import { useEffect, useState } from "react";
import "./App.css";
import pokemon from "pokemontcgsdk";
import SearchOptions from "./components/SearchOptions";
import CardResults from "./components/CardResults";

// https://github.com/PokemonTCG/pokemon-tcg-sdk-javascript

pokemon.configure({ apiKey: import.meta.env.VITE_API_KEY });

function App() {
  const [cards, setCards] = useState();
  const [textInput, setTextInput] = useState("");
  const [cardQuery, setCardQuery] = useState("name:charizard");


  useEffect(() => {
    pokemon.card
      .where({ orderBy: "-set.releaseDate", q: cardQuery, pageSize: 15 })
      // .where({q: `name:charizard (rarity:"rare holo" OR rarity:"illustration rare")`, orderBy:"-set.releaseDate", pageSize: 10})
      .then((response) => {
        setCards(response.data);
        return response.data;
      })
      .then((data) => console.log(data));
  }, [cardQuery]);

  return (
    <>
      <SearchOptions
        textInput={textInput}
        setTextInput={setTextInput}
        setCardQuery={setCardQuery}
        cardQuery={cardQuery}
      />
      
      <CardResults cards={cards}/>
    </>
  );
}

export default App;
