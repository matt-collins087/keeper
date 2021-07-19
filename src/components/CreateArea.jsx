import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export const CreateArea = (props) => {

  const [note, setNote] = useState({
    noteTitle: '',
    noteContent: ''
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
      {isClicked &&
        <input
          onChange={handleChange}
          name="noteTitle"
          placeholder="Title"
          value={note.noteTitle}
        />
      }
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="noteContent"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={note.noteContent}
        />
        <Zoom in={isClicked}>
          <Fab onClick={(e) => {
            props.addNote(note);
            setNote({ noteTitle: '', noteContent: '' })
            e.preventDefault();
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}