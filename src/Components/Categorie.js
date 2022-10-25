import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewCards from './NewCards';


const Categorie = ({card}) => {
    const allCards = useLoaderData();
    return (
        <div>
            <h1>card: {allCards.length}</h1>
           {
            allCards.map(card=> <NewCards key={card.id} card={card}></NewCards>)
           }
        </div>
    );
};

export default Categorie;