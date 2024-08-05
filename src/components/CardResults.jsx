import React from "react";

const CardResults = ({ cards }) => {
  return (
    <>
      {cards ? (
        cards.map((card) => <img key={card.id} src={card.images.large} width="250px" />)
      ) : (
        <p>No cards yet</p>
      )}
    </>
  );
};

export default CardResults;
