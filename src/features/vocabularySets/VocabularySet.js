import ROUTES from '../../app/routes';
import {Link, useParams} from 'react-router-dom';
import Card from '../cards/Card';
import {useSelector} from 'react-redux';
import {selectVocabularySets} from './vocabularySetsSlice';
import './VocabularySet.css';

export default function VocabularySet () {
    const vocabularySets = useSelector(selectVocabularySets);
    let {vocabularySetID} = useParams();
    const vocabularySet = vocabularySets[vocabularySetID]; 

    return (
        <section>
            <ul>
                {vocabularySet.cardIDs.map(id => (
                    <Card key={id} id={id}/>
                ))}
            </ul>
            <Link to={ROUTES.vocabularySetsRoute()} className='center button btn'>Back to vocabulary sets</Link>
        </section>
    )
}