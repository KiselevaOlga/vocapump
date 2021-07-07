import vocabularySetsReducer from '../features/vocabularySets/vocabularySetsSlice';
import {initialState, addVocabularySet, removeSet, addVocabularySetForTopicID} from '../features/vocabularySets/vocabularySetsSlice';
import {addTopic, addVocabularySetIDForTopic} from '../features/topics/topicsSlice';
import topicsReducer from '../features/topics/topicsSlice';
import {initialState as topicsInitialState} from '../features/topics/topicsSlice';

const testSet = {
    id: 1,
}
const setWithCards = {
    name: 'Kitchen',
    topicID: 0,
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
        const topicsState = topicsReducer(topicsInitialState, addTopic({
            id: 0,
            name: 'first',
            icon: 'first icon',
        }))
        const vocabularySetState = vocabularySetsReducer(initialState, addVocabularySet({
            name: 'First set',
            topicID: 0,
            cardIDs: [4, 5, 6],
            id: 1,
        }));    
        const updTopicsState = topicsReducer(topicsState, addVocabularySetIDForTopic({topicID: 0, vocabularySetID: 1}))
        
        expect(updTopicsState.topics[0].vocabularySetIDs[0]).toEqual(vocabularySetState.vocabularySets[1].id)
    })
})