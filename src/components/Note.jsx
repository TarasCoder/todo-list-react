import s from "./Note.module.css"

const Note = (props) => {
    return (
        <div className={s.note}>
            <h4>{props.newNote}</h4>
        </div>
    )
}

export default Note;