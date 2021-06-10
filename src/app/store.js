import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import vocabularySetsReducer from "../features/vocabularySets/vocabularySetsSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    vocabularySets: vocabularySetsReducer,
    cards: cardsReducer,
  },
});
