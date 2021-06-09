import {createSlice} from '@reduxjs/toolkit';

export const vocabularySetsSlice = createSlice({
    name: 'vocabularySets',
    initialState: {vocabularySets: {}},
    reducers: {
        addVocabularySet: (state, action)=>{
            const {id}=action.payload;
            state.vocabularySets[id] = action.payload;
        }
    }
})

export const selectVocabularySets = (state)=>state.vocabularySets.vocabularySets;
export const {addVocabularySet} = vocabularySetsSlice.actions;
export default vocabularySetsSlice.reducer;