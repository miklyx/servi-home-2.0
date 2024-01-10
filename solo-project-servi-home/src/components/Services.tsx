import React from 'react';
import Card from './Card';
import { cards } from '../util/cardsData';

export default function Service(): JSX.Element {
  return (
    <>
      <section className="max-h-fit  bg-zinc-500 p-12 flex flex-col text-white items-center ">
        <h2 className="text-4xl md:text-6xl mb-6 md:mb-10 text-center font-bold font-serif tracking-wider ">
          Our Services
        </h2>

        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12 max-w-5xl w-full">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </section>
    </>
  );
}
