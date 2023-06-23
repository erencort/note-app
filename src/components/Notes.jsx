import React from "react";
import Note from "./Note";
import { useContext } from "react";
import { noteContext } from "../context";

function Notes() {
  const { notesCount, setNotesCount } = useContext(noteContext);

  return (
    <div>
      {notesCount.length !== 0 ? (
        notesCount.map((item, index) => {
          return (
            <Note
              key={item.id}
              item={item}
              isOpen={item.isOpen}
              id={item.id}
              itemIndex={index}
              setNotesCount={setNotesCount}
              notesCount={notesCount}
            />
          );
        })
      ) : (
        <div className="text-center text-4xl mt-8">You have no notes!</div>
      )}
    </div>
  );
}

export default Notes;
