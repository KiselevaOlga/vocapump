import ROUTES from '../../app/routes';
import {Link, useParams} from 'react-router-dom';
import Card from '../cards/Card';

export default function VocabularySet () {
    const vocabularySets = {};
    let {setID} = useParams();
    const vocabularySet = vocabularySets[setID]; 
    return (
        <section>
            <ul>
                {vocabularySet.cardIDs.map(id => (
                    <Card key={id} id={id}/>
                ))}
            </ul>
            <Link to={ROUTES.vocabularySetsRoute()}>Back to vocabulary sets</Link>
        </section>
    )
}