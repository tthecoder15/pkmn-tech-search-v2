import React from "react";
import Checkbox from "../GenericComponents/Checkbox.jsx";

const TypeFilters = ({ tickedTypes, setTickedTypes }) => {
  function typeBoxChecked(event) {
    let selectedBox = event.target.name;
    if (tickedTypes.includes(selectedBox) == false) {
      setTickedTypes([...tickedTypes, selectedBox]);
    } else {
      let remBox = [...tickedTypes];
      remBox.splice(remBox.indexOf(selectedBox), 1);
      setTickedTypes(remBox);
    }
  }

  return (
    <div>
      <h3>Filter by Type</h3>
      <Checkbox boxName={"Grass"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Fire"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Water"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Lightning"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Psychic"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Fighting"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Dark"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Metal"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Dragon"} tickHandler={typeBoxChecked} />
      <Checkbox boxName={"Normal"} tickHandler={typeBoxChecked} />
    </div>
  );
};

export default TypeFilters;
