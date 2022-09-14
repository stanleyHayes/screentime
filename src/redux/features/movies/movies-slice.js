import {createSlice} from "@reduxjs/toolkit";
import {MOVIES_API} from "../../../api/movies";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        movie: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(MOVIES_API.getMovies.pending, (state) => {
            state.loading = true;
        }).addCase(MOVIES_API.getMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload.data;
            state.error = null;
        }).addCase(MOVIES_API.getMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.movies = [];
        }).addCase(MOVIES_API.getMovie.pending, (state) => {
            state.loading = true;
        }).addCase(MOVIES_API.getMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.movie = action.payload.data;
            state.error = null;
        }).addCase(MOVIES_API.getMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.movie = null;
        }).addCase(MOVIES_API.createMovie.pending, (state) => {
            state.loading = true;
        }).addCase(MOVIES_API.createMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = [action.payload.data, ...state.movies];
            state.error = null;
        }).addCase(MOVIES_API.createMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.movie = null;
        }).addCase(MOVIES_API.updateMovie.pending, (state) => {
            state.loading = true;
        }).addCase(MOVIES_API.updateMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = [...state.movies.map(movie => {
                if (movie._id === action.payload.data._id) {
                    return {...action.payload.data}
                }
                return movie;
            })];
            state.error = null;
        }).addCase(MOVIES_API.updateMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
    }
});

export const selectMovie = state => state.movies;
export default moviesSlice.reducer;
