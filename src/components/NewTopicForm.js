import React, { useState } from "react";
import ROUTES from "../app/routes";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import {ALL_ICONS} from '../assets/icons';
import {addTopic} from '../features/topics/topicsSlice';
import './NewForm.css';

export default function NewTopicForm () {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const dispatch = useDispatch();
    const history = useHistory()
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        if (name.length === 0){
            alert("Please give a name to your topic");
            return;
        }

        dispatch(addTopic({
            name: name,
            id: uuidv4(),
            icon,
        }))
        history.push(ROUTES.topicsRoute())
    }
    return (
        <section>
            <form onSubmit={handleSubmit} className='form-container'>
                <h1 className="center">Create a new topic</h1>
                <div className="form-section">
                    <input 
                    id="topic-name"
                    placeholder="Type a topic name here"
                    type="text"
                    value={name}
                    onChange = {(e)=>setName(e.currentTarget.value)}
                     />
                    <select
                    onChange = {(e)=>setIcon(e.currentTarget.value)}
                    required
                    defaultValue='default'>
                        <option value="">
                            Choose an icon for your topic
                        </option>
                        <option value="default">
                            All
                        </option>
                        {ALL_ICONS.map(({ name, url }) => (
                            <option key={url} value={url}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="center submit btn">Add topic</button>
            </form>
        </section>
    )
}