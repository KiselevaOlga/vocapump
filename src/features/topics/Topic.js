import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import {useSelector} from 'react-redux';
import {selectTopics} from './topicsSlice';
import {selectVocabularySets} from '../vocabularySets/vocabularySetsSlice';

export default function Topic () {
    const vocabularySets = useSelector(selectVocabularySets);
    const topics = useSelector(selectTopics);
    let { topicID } = useParams();
    const topic = topics[topicID];
    const vocabularySetsForTopic = topic.vocabularySetIDs.map(vocabularySetID => vocabularySets[vocabularySetID])

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