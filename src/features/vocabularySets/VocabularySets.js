import {Link} from 'react-router-dom';
import ROUTES from '../../app/routes';
import {useSelector} from 'react-redux';
import {selectVocabularySets} from './vocabularySetsSlice';
import './VocabularySet.css';

export default function VocabularySets () {
    const vocabularySets = useSelector(selectVocabularySets);
    
    return (
        <section>
            <h1 className="center">Vocabulary sets</h1>
           
            <ul className='sets-list'>
                {Object.values(vocabularySets).map((set) => (
                    <Link key={set.id} to={ROUTES.vocabularySetRoute(set.id)} className='set-box'>
                        <li className="set">
                            <p className='center set-name'>{set.name}</p>
                            <p className='center cards'>
                                {set.cardIDs.length}{set.cardIDs.length===1 ? ' Card' : ' Cards'}
                            </p>
                        </li>
                    </Link>
                ))}
            </ul>
            <Link to={ROUTES.createNewVocabularySetRoute()} className="center btn button">Create a new vocabulary set</Link>
        </section>
    )
}