import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { noteContext } from "../context";

function Note({ itemIndex }) {
  const { notesCount, setNotesCount } = useContext(noteContext);
  console.log(itemIndex);

  const handleChange = (e) => {
    let newNotes = notesCount;
    let changeItem = notesCount[itemIndex];
    changeItem = { content: e.target.value };
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
    console.log(e.target.value);
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleChange(e)}
        value={notesCount.content}
        className="m-2 border-2 border-black"
      ></textarea>
    </div>
  );
}

export default Note;
