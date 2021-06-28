import { createSlice } from '@reduxjs/toolkit'
import {removeSet} from '../vocabularySets/vocabularySetsSlice';

export const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon}=action.payload;
            state.topics[id]={
                id: id,
                name: name,
                icon,
                vocabularySetIDs: []
            }
        },
        removeTopic: (state, action)=>{
            delete state.topics[action.payload];
        },
        addVocabularySetIDForTopic: (state, action) => {
            const {topicID, vocabularySetID} = action.payload;
            state.topics[topicID].vocabularySetIDs.push(vocabularySetID);
        },
        removeVocabularySetIDForTopic: (state, action)=>{
            const {topicID, vocabularySetIndex} = action.payload;
            delete state.topics[topicID].vocabularySetIDs[vocabularySetIndex];
        }, 
        removeSetsOfTopic: (state, action)=>{
            for(let i = 0; i < state.topics[action.payload].vocabularySetIDs.length; i++){
                delete state.topics[action.payload].vocabularySetIDs[i]
            }
        }
    }
})

export const removeAllSets = (topic) =>{
    return (dispatch)=>{
        dispatch(topicsSlice.actions.removeSetsOfTopic(topic))
        dispatch(removeTopic(topic))
    }
}

export const { addTopic, removeTopic, addVocabularySetIDForTopic, removeVocabularySetIDForTopic, removeSetsOfTopic} = topicsSlice.actions;
export const selectTopics = (state) => {return state.topics.topics};
export default topicsSlice.reducer;