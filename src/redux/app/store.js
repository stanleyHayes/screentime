import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import moviesReducer from "./../features/movies/movies-slice";
import directorsReducer from "./../features/directors/directors-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        movies: moviesReducer,
        directors: directorsReducer
    },
    preloadedState: {}
});

export default store;
