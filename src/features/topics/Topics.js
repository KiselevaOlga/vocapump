import ROUTES from "../../app/routes";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectTopics} from './topicsSlice';

export default function Topics () {
    const topics = useSelector(selectTopics)

    return (
        <section>
            <h1 className="center">Topics</h1>
            <ul className="topics-list">
                {Object.values(topics).map(topic=>(
                    <li key={topic.id}>
                        <Link to={ROUTES.topicRoute()}>
                            <div>
                                <h3>{topic.name}</h3>
                                <p>{topic.vocabularySetIDs.length} Sets</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link 
            to={ROUTES.newTopicRoute()} 
            className="center button create-new-topic-btn" 
            title="Click to create new topic">
                Create new topic
            </Link>
        </section>

    )
}