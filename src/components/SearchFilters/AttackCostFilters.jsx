import React from "react";
import Checkbox from "../GenericComponents/Checkbox.jsx";

const AttackCostFilters = ({ tickedAtkCosts, setTickedAtkCosts }) => {
  function atkBoxChecked(event) {
    let selectedBox = event.target.name;
    if (tickedAtkCosts.includes(selectedBox) == false) {
      setTickedAtkCosts([...tickedAtkCosts, selectedBox]);
    } else {
      let remBox = [...tickedAtkCosts];
      remBox.splice(remBox.indexOf(selectedBox), 1);
      setTickedAtkCosts(remBox);
    }
  }

  return (
    <div>
      <h3>Filter by Attack Costs</h3>
      <Checkbox boxName={"0"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"1"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"2"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"3"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"4"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"5"} tickHandler={atkBoxChecked} />
      <Checkbox boxName={"6"} tickHandler={atkBoxChecked} />
    </div>
  );
};

export default AttackCostFilters;
