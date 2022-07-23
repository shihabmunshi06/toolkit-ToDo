import React from "react";
import { useSelector } from 'react-redux';

import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";


export default function App() {

    const notes = useSelector(state => state.todo.value)
    console.log(useSelector(state => state));

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

