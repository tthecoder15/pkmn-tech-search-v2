import React, { useEffect, useLayoutEffect, useState } from "react";

const CardDisplay = ({
  cards,
  displayRange,
  setDisplayRange,
  loadingSearch,
}) => {
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

  useLayoutEffect(() => {
    let cardsToDisplay = cards.slice(displayRange[0], displayRange[1]);
    setDisplayCards(cardsToDisplay);
  }, [cards, displayRange]);

  return (
    <div>
      <div>
        {loadingSearch ? <h2>Loading results, please wait.</h2> : null}
        {cards.length == 0 && !loadingSearch ? (
          <h2>
            No results found. Please alter your search criteria and try again
          </h2>
        ) : (
          displayCards.map((card) => (
            <img key={card.id} src={card.images.large} width="250px" />
          ))
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
