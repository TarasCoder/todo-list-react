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
      setNotes(snapshot.docs.map((doc) => ({id: doc.id, name: doc.data().name})));
    });
  }, []);


  function addNoteFn(name) {
    setNotes((prev) => {
      return [...prev, name];
    });
  }

  return (
    <div className={s.container}>
      <Header />
      <Input addNote={addNoteFn} />
      {notes.map((item, index) => {
        return <Note key={index} newNote={item} />
      })}
    </div>
  );
}

export default App;
