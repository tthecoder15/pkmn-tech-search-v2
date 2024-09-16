import React, { useEffect, useState } from "react";

const CardDisplay = ({ cards, displayRange, setDisplayRange }) => {
  const [displayCards, setDisplayCards] = useState(cards);

  const displayFwd = () => {
    let localRan = displayRange;
    setDisplayRange([localRan[0] + 15, localRan[1] + 15]);
  };

  const displayBack = () => {
    let localRan = displayRange;
    setDisplayRange([localRan[0] - 15, localRan[1] - 15]);
  };

  const displayNewest = () => {
    setDisplayRange([0, 15]);
  };

  useEffect(() => {
    let cardsToDisplay = cards.slice(displayRange[0], displayRange[1]);
    setDisplayCards(cardsToDisplay);
  }, [cards, displayRange]);

  return (
    <div>
      <div>
        {cards.length > 0 ? (
          displayCards.map((card) => (
            <img key={card.id} src={card.images.large} width="250px" />
          ))
        ) : (
          <h2> Request Loading Please Wait...</h2>
        )}
      </div>
      <div>
        {displayRange[1] > 15 ? (
          <>
            <button onClick={displayNewest}>Display First 15 Cards</button>
            <button onClick={displayBack}>Display Previous 15 Cards</button>
          </>
        ) : null}
        {displayRange[1] + 15 < cards.length + 15 ? (
          <button onClick={displayFwd}>Display Next 15 Cards</button>
        ) : null}
      </div>
    </div>
  );
};

export default CardDisplay;
