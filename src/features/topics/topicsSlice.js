import { createSlice } from '@reduxjs/toolkit'

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
            const {topicID, vocabularySetID} = action.payload;
            delete state.topics[topicID].vocabularySetIDs[vocabularySetID];
        }
    }
})

export const { addTopic, removeTopic, addVocabularySetIDForTopic, removeVocabularySetIDForTopic} = topicsSlice.actions;
export const selectTopics = (state) => {return state.topics.topics};
export default topicsSlice.reducer;