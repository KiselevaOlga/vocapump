import {initialState, addTopic, selectTopics} from '../features/topics/topicsSlice';
import topicsReducer from '../features/topics/topicsSlice';
import { Selector } from 'redux-testkit';

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

    it('selects topics', ()=>{
        const nextState = {topics: {'topics': {
            '1': {
            id: 1,
            name: 'first',
            icon: 'first icon',
            vocabularySetIDs: [],}
        }}};
        const result = {1: testState}
        Selector(selectTopics).expect(nextState).toReturn(result);
    });

})