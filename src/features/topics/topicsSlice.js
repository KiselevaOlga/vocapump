import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
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
        addVocabularySetIDForTopic: (state, action) => {
            const {topicID, vocabularySetID} = action.payload;
            state.topics[topicID].vocabularySetIDs.push(vocabularySetID);
        }
    }
})

export const { addTopic, addVocabularySetIDForTopic } = topicsSlice.actions;
export const selectTopics = (state) => {return state.topics.topics};
export default topicsSlice.reducer;