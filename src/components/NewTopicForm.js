import ROUTES from "../app/routes";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {uuidv4} from 'uuid';


export default function NewTopicForm (){
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const dispatch = useDispatch();
    const history = useHistory()
    
    const handelSubmit =(e)=> {
        e.preventDefault();
        if (name.length === 0){
            alert("Please give a name to your topic");
            return;
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1 className="center">Create a new topic</h1>
                <div className="form-section">
                    <input placeholder="Type a topic name here" />
                    <select>
                        <option value="default">
                            Choose an icon for your topic
                        </option>
                    </select>
                </div>
                <button className="center submit-btn">Add topic</button>
            </form>
        </section>
    )
}