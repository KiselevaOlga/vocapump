import {Link} from 'react-router-dom';
import ROUTES from '../../app/routes';
import {useSelector, useDispatch} from 'react-redux';
import {selectVocabularySets, removeSet} from './vocabularySetsSlice';
import './VocabularySet.css';

export default function VocabularySets () {
    const vocabularySets = useSelector(selectVocabularySets);
    const dispatch = useDispatch()

    return (
        <section>
            <h1 className="center">Vocabulary sets</h1>
           
            <ul className='sets-list'>
                {Object.values(vocabularySets).map((set) => (
                    <li className='set-box'>
                        <button onClick={()=>{dispatch(removeSet(set.id))}} className="set-delete-btn">X</button>
                        <Link key={set.id} to={ROUTES.vocabularySetRoute(set.id)} className='set-link'>
                            <p className='center set-name'>{set.name}</p>
                            <p className='center cards'>
                                {set.cardIDs.length}{set.cardIDs.length===1 ? ' Card' : ' Cards'}
                            </p>
                    </Link>
                    </li>
                    
                ))}
            </ul>
            <Link to={ROUTES.createNewVocabularySetRoute()} className="center btn button">Create a new vocabulary set</Link>
        </section>
    )
}