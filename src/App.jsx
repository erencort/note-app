import { useState } from "react";
import Notes from "./components/Notes";
import { useEffect } from "react";
import { noteContext } from "./context";
import { nanoid } from "nanoid";

function App() {
  const [notesCount, setNotesCount] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  const data = {
    notesCount,
    setNotesCount,
  };

  const addNote = () => {
    let newNotes = [...notesCount, { content: "", id: nanoid() }];
    setNotesCount(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <noteContext.Provider value={data}>
      <div className="min-h-screen bg-gray-800 text-white">
        <div className="border-b-2 border-black">
          <div className="w-1/4 mx-auto text-right py-3">
            <button
              onClick={() => addNote()}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Note
            </button>
          </div>
        </div>
        <Notes />
      </div>
    </noteContext.Provider>
  );
}

export default App;
