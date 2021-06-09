import {useState} from 'react';

export default function Card ({id}) {
    const cards = [];
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