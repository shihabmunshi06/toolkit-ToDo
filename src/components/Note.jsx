import { useDispatch } from 'react-redux'
import { deleted } from '../app/todoSlice'

export default function Note(props) {
    const dispatch = useDispatch()

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => dispatch(deleted(props.id))}>Delete</button>
        </div>
    )
}