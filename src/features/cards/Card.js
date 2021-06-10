import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {selectCards} from './cardsSlice';


export default function Card ({id}) {
    const cards = useSelector(selectCards);
    const card = cards[id];
    const [flipped, setFlipped] = useState(false)

    return (
        <li>
            <button onClick={(e)=>setFlipped(!flipped)} className="card">
                {flipped ? card.word : card.translation}
            </button>
        </li>
    )
}