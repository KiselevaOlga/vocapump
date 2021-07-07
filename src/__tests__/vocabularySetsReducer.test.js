import vocabularySetsReducer from '../features/vocabularySets/vocabularySetsSlice';
import {initialState, addVocabularySet, removeSet, addVocabularySetForTopicID} from '../features/vocabularySets/vocabularySetsSlice';
import {useSelector, useDispatch} from 'react-redux';

const testSet = {
    id: 1,
}
const setWithCards = {
    name: 'Kitchen',
    topicID: 2,
    cardIDs: [4, 5, 6],
    id: 1,
}

describe('VocabularySetsSlice', ()=>{
    it('returns initial state', ()=>{
        const testState = vocabularySetsReducer(undefined, {});
        expect(testState).toEqual(initialState);
    });

    it('adds vocabulary set to vocabularySets state', ()=>{
        const testState = vocabularySetsReducer(initialState, addVocabularySet({
            id: 1
        }))
        expect(testState.vocabularySets[1]).toEqual(testSet);
    });

    it('adds vocabulary set with topicID to vocabulary state', ()=>{
        
    })
})