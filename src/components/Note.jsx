import s from "./Note.module.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  function deleteBtn() {
    props.del(props.id);
  }
  return (
    <div className={s.note}>
      <h4>{props.newNote}</h4>
      <IconButton aria-label="delete" onClick={deleteBtn}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Note;
