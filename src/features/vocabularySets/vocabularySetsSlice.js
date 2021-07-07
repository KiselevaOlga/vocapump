import {createSlice} from '@reduxjs/toolkit';
import {addVocabularySetIDForTopic, removeVocabularySetIDForTopic} from '../topics/topicsSlice';

export const vocabularySetsSlice = createSlice({
    name: 'vocabularySets',
    initialState: {vocabularySets: {}},
    reducers: {
        addVocabularySet: (state, action)=>{
            const {id}=action.payload;
            state.vocabularySets[id] = action.payload;
        },
        removeSet: (state, action)=>{
            delete state.vocabularySets[action.payload];          
        }
    }
})

export const addVocabularySetForTopicID = (vocabularySet)=>{
    const {topicID, id} = vocabularySet;
    return (dispatch)=>{
        dispatch(vocabularySetsSlice.actions.addVocabularySet(vocabularySet));
        dispatch(addVocabularySetIDForTopic({topicID: topicID, vocabularySetID: id}))
    }
}

export const removeVocabularySetForTopicID = (vocabularySet)=>{
    const {topicID, index} = vocabularySet;
    return (dispatch)=>{
        dispatch(removeVocabularySetIDForTopic({topicID: topicID, vocabularySetIndex: index}))
    }
}
export const selectVocabularySets = (state)=>state.vocabularySets.vocabularySets;
export const {addVocabularySet, removeSet} = vocabularySetsSlice.actions;
export default vocabularySetsSlice.reducer;