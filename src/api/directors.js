import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CONSTANTS} from "../utils/constants";

const getDirector = createAsyncThunk('directors/getDirector', async ({id}, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${CONSTANTS.SERVER_BASE_URL}/director/${id}`
        });
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const getDirectors = createAsyncThunk('directors/getDirectors', async (arg, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${CONSTANTS.SERVER_BASE_URL}/directors`
        });
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const updateDirector = createAsyncThunk('directors/updateDirectors', async ({id, values}, thunkAPI) => {
    try {
        const response = await axios({
            method: 'PUT',
            url: `${CONSTANTS.SERVER_BASE_URL}/director/${id}`,
            data: values
        });
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});


const createDirector = createAsyncThunk('directors/createDirector', async ({values}, thunkAPI) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${CONSTANTS.SERVER_BASE_URL}/director`,
            data: values
        });
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});

export const DIRECTORS_API = {getDirectors, getDirector, createDirector, updateDirector};
