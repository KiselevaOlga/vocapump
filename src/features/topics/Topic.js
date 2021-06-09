import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";



export default function Topic () {
    const vocabularySets = {};
    const topics = {};
    let { topicID } = useParams();
    const topic = topics[topicID];
    const vocabularySetsForTopic = topic.setIDs.map(setID => vocabularySets[setID])

    return (
        <section>
            <h1 className='center'>Topic {topic.name}</h1>
            <ul>
                {vocabularySetsForTopic.map(set => (
                    <li key={set.id} className="set">
                        <Link to={ROUTES.vocabularySetRoute(set.id)}> {set.name} </Link>
                    </li>
                ))}
            </ul>
            <Link 
            to={ROUTES.createNewVocabularySetRoute()} 
            title="Click to create a new vocabulary set"
            className="center button create-new-topic-btn"
            >Create a new vocabulary set</Link>
        </section>
    )
}