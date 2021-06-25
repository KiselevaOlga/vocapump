import ROUTES from "../../app/routes";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectTopics} from './topicsSlice';
import './Topic.css';

export default function Topics () {
    const topics = useSelector(selectTopics)
    return (
        <section>
            <h1 className="center">Topics</h1>
            <ul className="topics-list">
                {Object.values(topics).map(topic=>(
                    <li key={topic.id} className="item-box">
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