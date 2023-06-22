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
    <div className="text-center mt-7">
      <textarea
        onChange={(e) => handleChange(e)}
        defaultValue={item.content}
        rows="10"
        className="mx-auto border-2 p-2 min-w-fit w-1/4 border-black bg-gray-600 rounded-xl text-lg"
      ></textarea>
      <div>
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-7 mt-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={deleteNote}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
//className="bg-red-400 p-2  rounded-lg mt-1 mb-7"
//class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
export default Note;
