import React from "react";
import Note from "./Note";
import { useContext } from "react";
import { noteContext } from "../context";

function Notes() {
  const { notesCount, setNotesCount } = useContext(noteContext);

  return (
    <div>
      {notesCount.map((item, index) => {
        return (
          <Note
            key={item.id}
            item={item}
            id={item.id}
            itemIndex={index}
            setNotesCount={setNotesCount}
            notesCount={notesCount}
          />
        );
      })}
    </div>
  );
}

export default Notes;
