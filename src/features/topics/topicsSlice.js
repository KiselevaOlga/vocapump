import {createSlice} from '@reduxjs/toolkit';

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
                setIDs: []
            }
        },
        addVocabularySetIDForTopic: (state, action) => {
            const {topicID, setID} = action.payload;
            state.topics[topicID].setIDs.push(setID);
        }
    }
})

export const selectTopic = (state) => state.topics.topics;
export const {addTopic, addVocabularySetIDForTopic} = topicsSlice.actions;
export default topicsSlice.reducer;