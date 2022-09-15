import {createSlice} from "@reduxjs/toolkit";
import {DIRECTORS_API} from "../../../api/directors";

const directorsSlice = createSlice({
    name: 'directors',
    initialState: {
        directors: [],
        director: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(DIRECTORS_API.getDirectors.pending, (state) => {
            state.loading = true;
        }).addCase(DIRECTORS_API.getDirectors.fulfilled, (state, action) => {
            state.loading = false;
            state.directors = action.payload.data;
            state.error = null;
        }).addCase(DIRECTORS_API.getDirectors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.directors = [];
        }).addCase(DIRECTORS_API.getDirector.pending, (state) => {
            state.loading = true;
        }).addCase(DIRECTORS_API.getDirector.fulfilled, (state, action) => {
            state.loading = false;
            state.director = action.payload.data;
            state.error = null;
        }).addCase(DIRECTORS_API.getDirector.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.director = null;
        }).addCase(DIRECTORS_API.createDirector.pending, (state) => {
            state.loading = true;
        }).addCase(DIRECTORS_API.createDirector.fulfilled, (state, action) => {
            state.loading = false;
            state.directors = [action.payload.data, ...state.directors];
            state.error = null;
        }).addCase(DIRECTORS_API.createDirector.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.director = null;
        }).addCase(DIRECTORS_API.updateDirector.pending, (state) => {
            state.loading = true;
        }).addCase(DIRECTORS_API.updateDirector.fulfilled, (state, action) => {
            state.loading = false;
            state.directors = [...state.directors.map(director => {
                if (director._id === action.payload.data._id) {
                    return {...action.payload.data}
                }
                return director;
            })];
            state.error = null;
        }).addCase(DIRECTORS_API.updateDirector.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
    }
});

export const selectDirector = state => state.directors;
export default directorsSlice.reducer;
