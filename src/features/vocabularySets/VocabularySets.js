import {Link} from 'react-router-dom';
import ROUTES from '../../app/routes';

export default function VocabularySets () {
    const vocabularySets = {};
    
    return (
        <section>
            <h1 className="center">Vocabulary sets</h1>
            <ul>
                {Object.values(vocabularySets).map((set) => (
                    <Link key={set.id} to={ROUTES.vocabularySetRoute(set.id)}>
                        <li className="set">{set.name}</li>
                    </Link>
                ))}
            </ul>
            <Link to={ROUTES.createNewVocabularySetRoute()} className="button">Create a new vocabulary set</Link>
        </section>
    )
}