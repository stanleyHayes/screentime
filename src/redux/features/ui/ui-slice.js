import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        drawerOpen: false
    },
    reducers: {
        openDrawer: (state, action) => {
            state.drawerOpen = true;
        },
        closeDrawer: (state, action) => {
            state.drawerOpen = false
        }
    }
});

export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {openDrawer: uiSlice.actions.openDrawer, closeDrawer: uiSlice.actions.closeDrawer};

export default uiSlice.reducer;
