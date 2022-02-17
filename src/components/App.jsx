import s from "./App.module.css";
import Input from "./Input";
import Header from "./Header";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

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
        return <Note key={index} id={index} newNote={item} />;
      })}
    </div>
  );
}

export default App;
