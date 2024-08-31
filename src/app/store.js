import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsSlice from "../posts/postsSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsSlice                                  
    },

});

export default store;