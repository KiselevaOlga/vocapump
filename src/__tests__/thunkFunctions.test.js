import {addVocabularySetForTopicID, removeVocabularySetForTopicID} from '../features/vocabularySets/vocabularySetsSlice';
import {initialState, addVocabularySet} from '../features/vocabularySets/vocabularySetsSlice';
import {addVocabularySetIDForTopic,removeVocabularySetIDForTopic} from '../features/topics/topicsSlice';
import vocabularySetsReducer from '../features/vocabularySets/vocabularySetsSlice';
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
        console.log('my set store! ', store.getState())
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches removeVocabularySetIDForTopic when removeVocabularySetForTopicID called', ()=>{
        const vocabularySetState = vocabularySetsReducer(initialState, addVocabularySet({
            name: 'First set',
            topicID: 0,
            cardIDs: [4, 5, 6],
            id: 1,
        }));
        const updVocabularySetState = vocabularySetsReducer(vocabularySetState, addVocabularySet({
            name: 'Second set',
            topicID: 0,
            cardIDs: [7],
            id: 2,
        }));
        const sendPayload = {
            topicID: 0,
            vocabularySetIndex: 1
        };
        const store = mockStore(updVocabularySetState);
        store.dispatch(removeVocabularySetForTopicID(sendPayload));
        const expectedActions = [removeVocabularySetIDForTopic({topicID: 0,vocabularySetIndex: 1})];
        console.log('my topic store! ', store.getState());
        console.log('my state ', updVocabularySetState)
        expect(store.getActions()).toEqual(expectedActions);
    })
})