import {
    initialState, 
    addTopic, 
    removeTopic, 
    addVocabularySetIDForTopic,
    removeVocabularySetIDForTopic
} from '../features/topics/topicsSlice';
import topicsReducer from '../features/topics/topicsSlice';

const testState = {
    id: 1,
    name: 'first',
    icon: 'first icon',
    vocabularySetIDs: [],
}

describe('topicsSlice', ()=>{
    it('returns initial state', ()=>{
        const nextState = topicsReducer(undefined, {})
        expect(nextState).toEqual(initialState)
    });

    it('adds topic to topic state', ()=>{
        const nextState = topicsReducer(initialState, addTopic({
            id: 1,
            name: 'first',
            icon: 'first icon',
        }));
        expect(nextState.topics[1]).toEqual(testState);
    });

    it('removes topic from topic state', ()=>{
        const firstState = topicsReducer(initialState, addTopic({
            id: 1,
            name: 'first',
            icon: 'first icon',
        }));

        const nextState = topicsReducer(firstState, addTopic({
            id: 2,
            name: 'second',
            icon: 'second icon',
        }));
        const finalState = topicsReducer(nextState, removeTopic(1))

        expect(Object.keys(finalState.topics).length).toBe(1);
    });

    it('adds setID to topic', ()=>{
        const firstState = topicsReducer(initialState, addTopic({
            id: 1,
            name: 'first',
            icon: 'first icon',
        }));

        const finalState = topicsReducer(firstState, addVocabularySetIDForTopic({
            topicID: 1, 
            vocabularySetID: 4
        }))

        expect(finalState.topics['1'].vocabularySetIDs).toEqual([4])
    });

    it('removes setID from topic', ()=>{
        const firstState = topicsReducer(initialState, addTopic({
            id: 1,
            name: 'first',
            icon: 'first icon',
        }));

        const nextState = topicsReducer(firstState, addVocabularySetIDForTopic({
            topicID: 1, 
            vocabularySetID: 4
        }))
        
        const finalState = topicsReducer(nextState, removeVocabularySetIDForTopic({
            topicID: 1, 
            vocabularySetIndex: 0
        }))
        expect(finalState.topics['1'].vocabularySetIDs).toEqual([])
    });

})