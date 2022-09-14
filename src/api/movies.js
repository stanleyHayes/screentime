import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CONSTANTS} from "../utils/constants";

const getMovie = createAsyncThunk('movies/getMovie', async (arg, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${CONSTANTS.SERVER_BASE_URL}/movie/${arg.id}`
        });
        return response.data;
    }catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const getMovies = createAsyncThunk('movies/getMovies', async (arg, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${CONSTANTS.SERVER_BASE_URL}/movies`
        });
        return response.data;
    }catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const updateMovie = createAsyncThunk('movies/updateMovies', async (arg, thunkAPI) => {
    try {
        const response = await axios({
            method: 'PUT',
            url: `${CONSTANTS.SERVER_BASE_URL}/movie/${arg.id}`,
            data: arg.values
        });
        return response.data;
    }catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const createMovie = createAsyncThunk('movies/createMovie', async (arg, thunkAPI) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${CONSTANTS.SERVER_BASE_URL}/movie`,
            data: arg.values
        });
        return response.data;
    }catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});

export const MOVIES_API = {getMovies, getMovie, createMovie, updateMovie};
