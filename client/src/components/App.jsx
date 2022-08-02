import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";

import { fetchPosts } from "../app/todoSlice";


export default function App() {

    const dispatch = useDispatch()

    const notes = useSelector(state => state.todo.todos)
    const status = useSelector(state => state.todo.status)


    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts())
        }
    }, [dispatch, status])

    function renders() {
        return (
            notes.map((each, index) =>
                <Note id={index} key={index} title={each.title} content={each.content} />
            )
        )
    }

    return (
        <React.StrictMode>
            <Header />
            <CreateArea />
            {renders()}
        </React.StrictMode>
    )
}

