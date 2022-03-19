import s from "./Note.module.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import db from "../firebase";

const Note = (props) => {
  function deleteBtn() {
    props.del(props.id);
  }
  return (
    <div className={s.note}>
      <h4>{props.newNote.name}</h4>
      <IconButton aria-label="delete" onClick={()=> {
          db.collection("todos").doc(props.newNote.id).delete()}
        }>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Note;
