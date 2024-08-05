import React, { useState } from "react";

const SearchOptions = ({
  cardQuery,
  setCardQuery,
  textInput,
  setTextInput,
}) => {
  const [queryRarity, setQueryRarity] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(queryRarity);
    if (queryRarity.length == 0) {
      setCardQuery(`name:${textInput}`);
    } else {
      setCardQuery(`name:${textInput} (${queryRarity.join(" OR ")})`);
    }
    console.log(cardQuery);
  }

  const rarityStrings = {
    "ultra rare":
      'rarity:"double rare" OR rarity:"rare holo gx" OR rarity:"rare prime" OR rarity:"rare holo v" OR rarity:"rare holo vmax" OR rarity:"illustration rare" OR rarity:"hyper rare"',
    rare: '!rarity:"rare holo" OR !rarity:"rare"',
    uncommon: 'rarity:"uncommon"',
    common: 'rarity:"common"',
  };

  // Make a rarity box that is ultra rare but removes art rares, or super rare box that hangles those

  function rarityBoxChecked(event) {
    console.log(`${event.target.name} button clicked`);
    if (
      queryRarity.find((string) => string == rarityStrings[event.target.name])
    ) {
      console.log("found");
      setQueryRarity(
        queryRarity.filter((rem) => rem !== rarityStrings[event.target.name])
      );
      console.log(queryRarity);
    } else {
      console.log("not found");
      setQueryRarity([...queryRarity, rarityStrings[event.target.name]]);
      console.log(queryRarity);
    }
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
        <button>Submit</button>
        <div>
          <label>
            <input
              name="ultra rare"
              type="checkbox"
              onClick={rarityBoxChecked}
            />
            Ultra Rare
          </label>
          <label>
            <input name="rare" type="checkbox" onClick={rarityBoxChecked} />
            Rare
          </label>
          <label>
            <input name="uncommon" type="checkbox" onClick={rarityBoxChecked} />
            Uncommon
          </label>
          <label>
            <input name="common" type="checkbox" onClick={rarityBoxChecked} />
            Common
          </label>
        </div>
      </form>
    </>
  );
};

export default SearchOptions;
