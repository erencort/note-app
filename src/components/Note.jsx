import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { noteContext } from "../context";

function Note({ itemIndex, item, id }) {
  const { notesCount, setNotesCount } = useContext(noteContext);

  const handleChange = (e) => {
    let newNotes = notesCount;
    let changeItem = notesCount[itemIndex];
    changeItem = { content: e.target.value, id: id };
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
    console.log(e.target.value);

    localStorage.setItem("notes", JSON.stringify(notesCount));
  };

  const deleteNote = () => {
    let newNotes = notesCount;
    let filteredNotes = newNotes.filter((item) => item.id !== id);
    setNotesCount(filteredNotes);

    {
      /*  setNotesCount((current) =>
      current.filter((item) => {
        return item.id !== id;
      })
    );*/
    }

    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleChange(e)}
        defaultValue={item.content}
        className="m-2 border-2 border-black"
      ></textarea>
      <button onClick={deleteNote}>delete</button>
    </div>
  );
}

export default Note;
