import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {selectCards} from './cardsSlice';
import "./Card.css";
import ReactCardFlip from 'react-card-flip';

export default function Card ({id}) {
    const cards = useSelector(selectCards);
    const card = cards[id];
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick =(e)=>{
        e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    return (
        <li className='card-section center'>
        <h3>Hey</h3>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
                <div onClick={handleClick} className='card-box card-front'>
                    <p>{card.word}</p>
                </div>
                <div onClick={handleClick} className='card-box card-back'>
                    <p>{card.translation}</p>
                </div>
            </ReactCardFlip>
        </li>
    )
}