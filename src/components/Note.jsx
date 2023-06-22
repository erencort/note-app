import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { noteContext } from "../context";

function Note({ itemIndex, item }) {
  const { notesCount, setNotesCount } = useContext(noteContext);
  console.log(itemIndex);

  const handleChange = (e) => {
    let newNotes = notesCount;
    let changeItem = notesCount[itemIndex];
    changeItem = { content: e.target.value };
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
    console.log(e.target.value);

    localStorage.setItem("notes", JSON.stringify(notesCount));
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleChange(e)}
        defaultValue={item.content}
        className="m-2 border-2 border-black"
      ></textarea>
    </div>
  );
}

export default Note;
