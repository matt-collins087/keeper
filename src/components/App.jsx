import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import { CreateArea } from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevState) => {
      return [...prevState, note]
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index) => {
        return <Note
          key={index}
          id={index}
          title={note.noteTitle}
          content={note.noteContent}
          deleteNote={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;