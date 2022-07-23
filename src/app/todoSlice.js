import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: []
    },
    reducers: {
        added: (state, action) => {
            return { value: [...state.value, action.payload] }
        },
        deleted: (state, action) => {
            return {
                value: state.value.filter((each, index) => {
                    return index !== action.payload
                })
            }
        }
    }
})

export const { added, deleted } = todoSlice.actions;

export default todoSlice.reducer;