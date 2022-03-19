import { useState } from "react";
import s from "./Input.module.css";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import db from "../firebase";
import firebase from "firebase"

const Input = (props) => {
  const [name, handleChange] = useState("");

  const clickHandle = (ev) => {
    ev.preventDefault();
    props.addNote(name);

    db.collection("todos").add({
      name: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    handleChange("");
  };
  const changeName = (ev) => {
    const val = ev.target.value;
    handleChange(val);
  };

  return (
    <div className={s.wrapper}>
      <form>
        <input
          className={s.inputField}
          onChange={changeName}
          placeholder="Enter your note: "
          value={name}
        />

        <IconButton aria-label="delete" disabled={!name} className={s.enterBtn} onClick={clickHandle} type="submit">
          <AddIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default Input;
