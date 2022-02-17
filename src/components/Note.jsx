import s from "./Note.module.css"

const Note = (props) => {

    function deleteBtn(){
        props.del(props.id);
    }
    return (
        <div className={s.note}>
            <h4>{props.newNote}</h4>
            <button className={s.btn} onClick={deleteBtn} >Delete</button>
        </div>
    )
}

export default Note;