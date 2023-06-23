import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { noteContext } from "../context";
import { useState } from "react";

function Note({ itemIndex, item, id, isOpen }) {
  const { notesCount, setNotesCount } = useContext(noteContext);
  const [open, setOpen] = useState(isOpen);
  const [itemContent, setItemContent] = useState(item.content);

  const updateContent = (e) => {
    let newNotes = notesCount;
    let changeItem = notesCount[itemIndex];
    changeItem = { content: e.target.value, id: id, isOpen: open };
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
    setItemContent(e.target.value);

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

  const hideNote = (e) => {
    let newNotes = notesCount;
    let changeItem = notesCount[itemIndex];
    changeItem = { content: changeItem.content, id: id, isOpen: !open };
    newNotes[itemIndex] = changeItem;
    setNotesCount(newNotes);
    setOpen(!open);

    localStorage.setItem("notes", JSON.stringify(notesCount));
  };

  {
    /*if (!open) {
    return (

    );
  }*/
  }

  return (
    <div>
      {open ? (
        <div className="text-center mt-7">
          <div className="text-right w-1/4 mx-auto">
            <button
              className=" bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 focus:outline-none text-white focus:ring-4  rounded-lg text-xs px-5 py-2.5 mr-2 mt-1 mb-2"
              onClick={(e) => hideNote(e)}
            >
              Hide
            </button>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mt-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={deleteNote}
            >
              Delete
            </button>
          </div>
          <textarea
            value={itemContent}
            onChange={(e) => updateContent(e)}
            rows="10"
            className="mx-auto border-2 p-2 min-w-fit w-1/4 border-black bg-gray-600 rounded-xl text-lg"
          ></textarea>
        </div>
      ) : (
        <div className="border-black border-2 rounded-lg py-1 mt-5 bg-gray-600 text-right w-1/4 mx-auto">
          <button
            className=" bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 focus:outline-none text-white focus:ring-4  rounded-lg text-xs px-5 py-2.5 mr-2 mt-1 mb-2"
            onClick={(e) => hideNote(e)}
          >
            Open
          </button>
        </div>
      )}
    </div>
  );
}
//className="bg-red-400 p-2  rounded-lg mt-1 mb-7"
//class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
export default Note;
