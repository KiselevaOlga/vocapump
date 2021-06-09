import ROUTES from "../app/routes";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {uuidv4} from 'uuid';
import ALL_ICONS from '../assets/icons';

export default function NewTopicForm (){
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    // const dispatch = useDispatch();
    const history = useHistory()
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        if (name.length === 0){
            alert("Please give a name to your topic");
            return;
        }

        history.push(ROUTES.topicsRoute())
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1 className="center">Create a new topic</h1>
                <div className="form-section">
                    <input 
                    placeholder="Type a topic name here"
                    type="text"
                    value={name}
                    onChange = {(e)=>setName(e.currentTarget.value)}
                     />
                    <select
                    onChange = {(e)=>setIcon(e.currentTarget.value)}>
                        <option value="default">
                            Choose an icon for your topic
                        </option>
                        {ALL_ICONS.map(({name, url})=>(
                            <option key={url} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="center submit-btn">Add topic</button>
            </form>
        </section>
    )
}