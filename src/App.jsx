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
      <div>
        <button
          onClick={() => addNote()}
          className="border-black border-2 m-2 "
        >
          Add Note
        </button>
        <Notes />
      </div>
    </noteContext.Provider>
  );
}

export default App;
