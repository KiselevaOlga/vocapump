import { useState } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../app/routes";
import {uuidv4} from "uuid";

export default function NewVocabularySetForm () {
    const [name, setName]=useState("");
    const [topicID, setTopicID]=useState("");
    const topics = {};
    const history = useHistory()
    const [cards, setCards]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (name.length===0){
            alert('Please enter a name of vocabulary set');
            return
        }
        const cardIDs = [];
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
        <section onSubmit={handleSubmit}>
            <h1>Create a new vocabulary set</h1>
            <form className="form-section">
                <input 
                placeholder="Type name of vocabulary set here"
                type="text"
                value={name}
                onChange={(e)=>setName(e.currentTarget.value)}
                />
                <select placeholder="Topic" onChange={(e)=>setTopicID(e.currentTarget.value)}>
                    <option value="">Select a topic</option>
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
                        onChange={(e)=>{
                            updateCardState(index, 'word', e.currentTarget.value)
                        }}
                        ></input>
                        <input 
                        placeholder="Translation" 
                        value={cards[index].translation}
                        id={`translation-${index}`}
                        onChange={(e)=>{
                            updateCardState(index, 'translation', e.currentTarget.value)
                        }}
                        ></input>  
                        <button className="side btn" onClick={(e)=>removeCard(e, index)}>Remove card</button>                      
                    </div>
                ))}        

                <div className="button-bar">
                    <button onClick={addCardInputs}>Add a card</button>
                    <button>Create vocabulary set</button>
                </div>
                
            </form>
        </section>
        

    )
}