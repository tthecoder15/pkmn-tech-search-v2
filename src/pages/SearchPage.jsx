import React from "react";
import CardDisplay from "../components/CardDisplay.jsx";
import pokemon from "pokemontcgsdk";
import { useEffect, useState } from "react";
import SearchControls from "../components/SearchControls";

// https://github.com/PokemonTCG/pokemon-tcg-sdk-javascript

pokemon.configure({ apiKey: import.meta.env.VITE_API_KEY });

const SearchPage = () => {
  // Card objects array, used for data
  const [cards, setCards] = useState();
  // Sets card query parameters, handled in search controls
  const [cardQuery, setCardQuery] = useState("name:sudowoodo");
  // displayRange used for setting which results show
  const [displayRange, setDisplayRange] = useState([0, 15]);
  // displayMessage user for setting display message
  const [loadingSearch, setLoadingSearch] = useState(true);

  async function loadCards() {
    try {
      setLoadingSearch(true)
      const response = await pokemon.card.where({
        orderBy: "-set.releaseDate",
        q: cardQuery,
      });
      setCards(response.data);
      console.log(response.data);
      if (response) {
        setLoadingSearch(false)
      }
      
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  useEffect(() => {
    loadCards();
  }, [cardQuery]);

  return (
    <div id="search-page">
      <h1>Pokémon Card Tech Search</h1>
      <SearchControls
        setCardQuery={setCardQuery}
        cardQuery={cardQuery}
        setDisplayRange={setDisplayRange}
        setCards={setCards}        
      />
      {cards ? (
        <CardDisplay
          cards={cards}
          displayRange={displayRange}
          setDisplayRange={setDisplayRange}
          loadingSearch={loadingSearch}
        />
      ) : null}
    </div>
  );
};

export default SearchPage;
