import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div className="mt-6 md:mt-10 pl-2">
      <div className="overflow-x-auto"> 
        <div className="flex scrollbar-hide gap-5">
          {/* Group cards in columns */}
          {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, columnIndex) => {
            const firstCard = cards[columnIndex * 2];
            const secondCard = cards[columnIndex * 2 + 1];

            return (
              <div
                key={columnIndex}
                className="flex flex-col gap-4 sm:min-w-[50vw] md:min-w-[200px] scrollbar-hide"
              >
                {firstCard && <Card title={firstCard.title} image={firstCard.image} />}
                {secondCard && <Card title={secondCard.title} image={secondCard.image} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardList;
