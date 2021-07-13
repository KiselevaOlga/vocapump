import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../app/routes";
import { v4 as uuidv4 } from "uuid";
import {useSelector, useDispatch} from 'react-redux';
import {selectTopics} from '../features/topics/topicsSlice';
import {addVocabularySetForTopicID} from '../features/vocabularySets/vocabularySetsSlice';
import {addCard} from '../features/cards/cardsSlice';
import './NewForm.css';

export default function NewVocabularySetForm () {
    const [name, setName]=useState("");
    const [topicID, setTopicID]=useState("");
    const [cards, setCards]=useState([]);    

    const topics = useSelector(selectTopics);
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (name.length===0){
            alert('Please enter the name of the vocabulary set');
            return
        }
        const cardIDs = [];

        cards.forEach(card=>{
            let cardID = uuidv4();
            cardIDs.push(cardID);
            dispatch(addCard({...card, id: cardID}));
        })

        let vocabularySetID = uuidv4();
        dispatch(addVocabularySetForTopicID({
            name: name,
            topicID: topicID,
            cardIDs: cardIDs,
            id: vocabularySetID
        }))
        
        history.push(ROUTES.vocabularySetsRoute());
    }

    const addCardInputs = (e)=>{
        e.preventDefault();
        setCards(cards.concat({ word: "", translation: ""}));
    }

    const removeCard = (e, index)=>{
        e.preventDefault();
        setCards(cards.filter((card, i)=>index !== i))
    }
    const updateCardState = (index, side, value)=>{
        const newCards=cards.slice();
        newCards[index][side] = value;
        setCards(newCards)
    }

    return (
        <section>
            <form className="form-container" onSubmit={handleSubmit}>
                <h1 className="center">Create a new vocabulary set</h1>
                <div className='form-section'>
                    <input 
                        placeholder="Type name of vocabulary set here"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.currentTarget.value)}
                    />
                    <select 
                        placeholder="Topic" 
                        onChange={(e)=>setTopicID(e.currentTarget.value)}
                        id="vocabularySet-topic"
                        required
                    >
                        <option value="" >Select a topic</option>
                        {Object.values(topics).map(topic=>(
                            <option key={topic.id} value={topic.id}>
                                {topic.name}
                            </option>
                        ))}
                    </select>
                    
                    {cards.map((card,index)=>(
                        <div className="card" key={index}>
                            <input 
                                placeholder="Word" 
                                value={cards[index].word} 
                                id={`word-${index}`}
                                required
                                onChange={(e)=>{
                                    updateCardState(index, 'word', e.currentTarget.value)
                                }}
                            ></input>
                            <input 
                                placeholder="Translation" 
                                value={cards[index].translation}
                                id={`translation-${index}`}
                                required
                                onChange={(e)=>{
                                    updateCardState(index, 'translation', e.currentTarget.value)
                                }}
                            ></input>  
                            <button className="remove-btn side-btn" onClick={(e)=>removeCard(e, index)}>
                                    Remove card
                            </button>                      
                        </div>
                    ))}        

                    <div className="button-bar">
                        <button onClick={addCardInputs} className="side-btn">
                            Add a card
                        </button>
                        <button className='center btn'>
                            Create vocabulary set
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}