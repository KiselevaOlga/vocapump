import { Selector } from 'redux-testkit';
import {selectTopics} from '../features/topics/topicsSlice';
import {selectVocabularySets} from '../features/vocabularySets/vocabularySetsSlice';

const testTopicState = {
    id: 1,
    name: 'first',
    icon: 'first icon',
    vocabularySetIDs: [],
}

const testVocabularySetState = {
    name: 'First set',
    topicID: 0,
    cardIDs: [4, 5, 6],
    id: 1, 
}

describe('TopicsSlice and VocabularySetsSlice selectors', () => {
    it('selects topics from topic state', ()=>{
        const nextState = {topics: {'topics': 
            {'1': {
                id: 1,
                name: 'first',
                icon: 'first icon',
                vocabularySetIDs: [],}
            }}};
        const result = {1: testTopicState}

        Selector(selectTopics).expect(nextState).toReturn(result);
    });

    it('selects vocabulary sets from vocabularySet state', ()=>{
        const nextState = {vocabularySets: {vocabularySets: 
            {'1': {
                name: 'First set',
                topicID: 0,
                cardIDs: [4, 5, 6],
                id: 1,}
            }}}

        const result = {'1': testVocabularySetState};
        
        Selector(selectVocabularySets).expect(nextState).toReturn(result);
    })
})