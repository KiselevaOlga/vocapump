import {addVocabularySetForTopicID, removeVocabularySetForTopicID} from '../features/vocabularySets/vocabularySetsSlice';
import {initialState, addVocabularySet} from '../features/vocabularySets/vocabularySetsSlice';
import {
    addVocabularySetIDForTopic,
    removeVocabularySetIDForTopic, 
    topicsInitialState, 
    addTopic
} from '../features/topics/topicsSlice';
import vocabularySetsReducer from '../features/vocabularySets/vocabularySetsSlice';
import topicsReducer from '../features/topics/topicsSlice';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('VocabularySets thunk action creators', () => {
    it('dispatches both addVocabularySet and addVocabularySetIDforTopic when addVocabularySetForTopicID called', () => {
        const sendPayload = {
            name: 'First set',
            topicID: 0,
            cardIDs: [4, 5, 6],
            id: 1,
        };

        const store = mockStore(initialState);
        store.dispatch(addVocabularySetForTopicID(sendPayload));
        const expectedActions = [addVocabularySet(sendPayload), addVocabularySetIDForTopic({topicID: 0, vocabularySetID: 1})];
        
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches removeVocabularySetIDForTopic when removeVocabularySetForTopicID called', ()=>{
        const topicsState = topicsReducer(topicsInitialState, addTopic({
            id: 0,
            name: 'first',
            icon: 'first icon',
        }))
        const vocabularySetState = vocabularySetsReducer(initialState, addVocabularySet({
            name: 'First set',
            topicID: 0,
            cardIDs: [4, 5, 6],
            id: 45,
        }));
        const updVocabularySetState = vocabularySetsReducer(vocabularySetState, addVocabularySet({
            name: 'Second set',
            topicID: 0,
            cardIDs: [7],
            id: 56,
        }));
        const sendPayload = {
            topicID: 0,
            vocabularySetIndex: updVocabularySetState.vocabularySets[1]
        };

        const store = mockStore({topicsState, updVocabularySetState});
        store.dispatch(removeVocabularySetForTopicID(sendPayload));
        const expectedActions = [removeVocabularySetIDForTopic(sendPayload)];

        expect(store.getActions()).toEqual(expectedActions);
    })
})