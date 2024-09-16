import React from "react";
import Checkbox from "../GenericComponents/Checkbox.jsx";

const StageFilters = ({ tickedStages, setTickedStages }) => {
  function stageBoxChecked(event) {
    let selectedBox = event.target.name;
    if (tickedStages.includes(selectedBox) == false) {
      setTickedStages([...tickedStages, selectedBox]);
    } else {
      let remBox = [...tickedStages];
      remBox.splice(remBox.indexOf(selectedBox), 1);
      setTickedStages(remBox);
    }
  }

  return (
    <div>
      <h3>Filter by Stage</h3>
      <Checkbox boxName={"Basic"} tickHandler={stageBoxChecked} />
      <Checkbox boxName={"Stage 1"} tickHandler={stageBoxChecked} />
      <Checkbox boxName={"Stage 2"} tickHandler={stageBoxChecked} />
    </div>
  );
};

export default StageFilters;
