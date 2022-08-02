import { useState } from "react"
import { useDispatch } from 'react-redux';

import { added } from '../app/todoSlice';
import { postTodo } from "../app/todoSlice";

export default function CreateArea(props) {
    const dispatch = useDispatch();

    const blankNote = {
        title: "",
        content: ""
    }

    const [note, setNote] = useState(blankNote)
    function handlechange(e) {
        const { name, value } = (e.target);
        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        dispatch(added(note));
        dispatch(postTodo(note))
        e.preventDefault();
    }

    return (
        <form>
            <input value={note.title} onChange={handlechange} name="title" placeholder="title"></input>
            <textarea value={note.content} onChange={handlechange} name="content" placeholder="take a note..."></textarea>
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}