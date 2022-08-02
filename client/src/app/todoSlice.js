import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        status: 'idle',
        error: null,
        posted: ""
    },
    reducers: {
        added: (state, action) => {
            return { ...state, todos: [...state.todos, action.payload] }
        },
        deleted: (state, action) => {

            return {
                ...state,
                todos: state.todos.filter((each, index) => {
                    return index !== action.payload
                })
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeed"
                state.todos = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            .addCase(postTodo.fulfilled, (state, action) => {
                state.posted = action.payload
            })
    }
})

export const { added, deleted } = todoSlice.actions;

const uri = "http://localhost:3001/";
// const uri = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("todo/fetchPosts",
    async () => {
        const response = await axios(uri)
        return response.data
    }
)
export const postTodo = createAsyncThunk('todo/postTodo',
    async todo => {
        const response = await axios.post(uri, todo)
        return response
    }
)

export default todoSlice.reducer;