import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { noteContext } from "../context";

function Note({ itemIndex }) {
  const { notesCount, setNotesCount } = useContext(noteContext);
  console.log(itemIndex);

  const handleChange = (e) => {
    let newNotes = setNotesCount;
    let changeItem = setNotesCount[itemIndex];
    changeItem = "dsfff";
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleChange(e)}
        className="m-2 border-2 border-black"
      ></textarea>
    </div>
  );
}

export default Note;
