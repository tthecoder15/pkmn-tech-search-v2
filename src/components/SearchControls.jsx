import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RarityFilters from "./SearchFilters/RarityFilters";
import TypeFilters from "./SearchFilters/TypeFilters";
import AttackCostFilters from "./SearchFilters/AttackCostFilters";
import StageFilters from "./SearchFilters/StageFilters";

const SearchControls = ({ setCards, setCardQuery, setDisplayRange }) => {
  const [textInput, setTextInput] = useState("");
  const [tickedRarities, setTickedRarities] = useState([]);
  const [tickedTypes, setTickedTypes] = useState([]);
  const [tickedAtkCosts, setTickedAtkCosts] = useState([]);
  const [tickedStages, setTickedStages] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setCards([])
    // Handle search box input
    let nameString;
    if (textInput.length !== 0) {
      nameString = `name:${textInput}`;
    }

    // Handle rarity checkboxes
    let rarityString;
    if (tickedRarities.length !== 0) {
      // Retrieve rarity query string and map it to one string
      rarityString = tickedRarities.map((rarity) => {
        return rarityStringsObj[rarity];
      });
      rarityString = `(${rarityString.join(" OR ")})`;
    }

    // Handle type checkboxes
    let typeString;
    if (tickedTypes.length !== 0) {
      typeString = tickedTypes.map((type) => {
        return `!types:"${type}"`;
      });
      typeString = `(${typeString.join(" OR ")})`;
    }

    // Handle attack cost checkboxes
    let costsString;
    if (tickedAtkCosts.length !== 0) {
      costsString = tickedAtkCosts.map((cost) => {
        return `!attacks.convertedEnergyCost:${cost}`;
      });
      costsString = `(${costsString.join(" OR ")})`;
    }

    // Handle stage checkboxes
    let stagesString;
    if (tickedStages.length !== 0) {
      stagesString = tickedStages.map((stage) => {
        return `!subtypes:"${stage}"`;
      });
      stagesString = `(${stagesString.join(" OR ")})`;
    }

    // Combine all queries
    let queryArray = [nameString, rarityString, typeString, costsString, stagesString];
    let queryString = queryArray.join(" ");
    setCardQuery(queryString);
    console.log("The submitted queryString", queryString);
    setDisplayRange([0, 15]);
  }

  const rarityStringsObj = {
    "art rare": 'rarity:"rare secret" OR rarity:"illustration rare"',
    "ultra rare":
      'rarity:"double rare" OR rarity:"rare holo gx" OR rarity:"rare prime" OR rarity:"rare holo v" OR rarity:"rare holo vmax" OR rarity:"illustration rare" OR rarity:"hyper rare"',
    rare: '!rarity:"rare holo" OR !rarity:"rare"',
    uncommon: '!rarity:"uncommon"',
    common: '!rarity:"common"',
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <SearchBar textInput={textInput} setTextInput={setTextInput} />
        <button>Submit</button>
        <RarityFilters
          setTickedRarities={setTickedRarities}
          tickedRarities={tickedRarities}
        />
        <TypeFilters
          setTickedTypes={setTickedTypes}
          tickedTypes={tickedTypes}
        />
        <AttackCostFilters
          setTickedAtkCosts={setTickedAtkCosts}
          tickedAtkCosts={tickedAtkCosts}
        />
        <StageFilters setTickedStages={setTickedStages} tickedStages={tickedStages}/>
      </form>
    </>
  );
};

export default SearchControls;
