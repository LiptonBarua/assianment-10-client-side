import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewCards from './NewCards';


export const Cards = () => {
    const cards= useLoaderData();
    console.log(cards)
    return (
      <div className='grid grid-cols-2 gap-4 mt-10'>
         {
            cards.map(card=> <NewCards key={card.id} card={card}></NewCards>)
         }
      </div>
    );
};

export default Cards;