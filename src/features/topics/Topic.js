import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import {useSelector} from 'react-redux';
import {selectTopics} from './topicsSlice';
import {selectVocabularySets} from '../vocabularySets/vocabularySetsSlice';

export default function Topic () {
    const topics = useSelector(selectTopics);
    const vocabularySets = useSelector(selectVocabularySets);
    let {topicID} = useParams();
    const topic = topics[topicID];
    const vocabularySetsForTopic = topic.vocabularySetIDs.map(vocabularySetID => vocabularySets[vocabularySetID])

    return (
        <section>
            <h1 className='center'>Topic <br></br> {topic.name}</h1>
            <ul className="topics-list">
                {vocabularySetsForTopic.map(set => (
                    <li key={set.id} className="item-box">
                        <Link to={ROUTES.vocabularySetRoute(set.id)} className="topic-link">
                            <p className='center'>{set.name}</p> 
                         </Link>
                    </li>
                ))}
            </ul>
            <Link 
            to={ROUTES.createNewVocabularySetRoute()} 
            title="Click to create a new vocabulary set"
            className="center button btn"
            >Create a new vocabulary set</Link>
        </section>
    )
}