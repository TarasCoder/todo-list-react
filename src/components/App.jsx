import s from "./App.module.css";
import Input from "./Input";
import Header from "./Header";
import Note from "./Note";
import { useEffect, useState } from "react";
import db from "../firebase";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setNotes(snapshot.docs.map((doc) => doc.data().name));
    });
  }, []);


  function addNoteFn(name) {
    setNotes((prev) => {
      return [...prev, name];
    });
  }
  function deleteBtn(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className={s.container}>
      <Header />
      <Input addNote={addNoteFn} />
      {notes.map((item, index) => {
        return <Note key={index} id={index} newNote={item} del={deleteBtn} />;
      })}
    </div>
  );
}

export default App;
