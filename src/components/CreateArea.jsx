import React, { useState } from "react";

export const CreateArea = (props) => {

  const [note, setNote] = useState({
    noteTitle: '',
    noteContent: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="noteTitle"
          placeholder="Title"
          value={note.noteTitle}
        />
        <textarea
          onChange={handleChange}
          name="noteContent"
          placeholder="Take a note..."
          rows="3"
          value={note.noteContent}
        />
        <button onClick={(e) => {
          props.addNote(note);
          setNote({ noteTitle: '', noteContent: '' })
          e.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}