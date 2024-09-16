import React from "react";
import Checkbox from "../GenericComponents/Checkbox.jsx";

const RarityFilters = ({ tickedRarities, setTickedRarities }) => {
  function rarityBoxChecked(event) {
    let selectedBox = event.target.name;
    if (tickedRarities.includes(selectedBox) == false) {
      setTickedRarities([...tickedRarities, selectedBox]);
    } else {
      let remBox = [...tickedRarities];
      remBox.splice(remBox.indexOf(selectedBox), 1);
      setTickedRarities(remBox);
    }
  }

  return (
    <div>
      <h3>Filter by Rarity</h3>
      <Checkbox boxName={"rare"} tickHandler={rarityBoxChecked} />
      <Checkbox boxName={"uncommon"} tickHandler={rarityBoxChecked} />
      <Checkbox boxName={"common"} tickHandler={rarityBoxChecked} />
    </div>
  );
};

export default RarityFilters;
