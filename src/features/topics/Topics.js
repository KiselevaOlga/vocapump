import ROUTES from "../../app/routes";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {selectTopics, removeTopic} from './topicsSlice';
import './Topic.css';

export default function Topics () {
    const topics = useSelector(selectTopics)
    const dispatch = useDispatch();
    
    return (
        <section>
            <h1 className="center">Topics</h1>
            <ul className="topics-list">
                {Object.values(topics).map((topic, index)=>(
                    <li key={topic.id} className="item-box">
                        <button 
                            onClick={()=>{
                                dispatch(removeTopic(topic.id))
                                }} 
                            className="delete-btn">
                            X
                        </button>
                        <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
                            <div>
                                <img src={topic.icon} alt={topic.icon.name} className="icon-img center"/>
                                <p className='center name'>{topic.name}</p>
                                <p className="center sets">
                                {topic.vocabularySetIDs.length}{topic.vocabularySetIDs.length===1 ? " Set" : ' Sets' }
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link 
            to={ROUTES.newTopicRoute()} 
            className="center btn button" 
            title="Click to create new topic">
                 Create new topic
            </Link>
        </section>

    )
}