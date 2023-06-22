import { useState } from "react";
import Notes from "./components/Notes";
import { useEffect } from "react";
import { noteContext } from "./context";

function App() {
  const [notesCount, setNotesCount] = useState([]);

  const data = {
    notesCount,
    setNotesCount,
  };

  useEffect(() => {
    console.log(notesCount);
  }, [notesCount]);

  return (
    <noteContext.Provider value={data}>
      <div>
        <button
          onClick={() => setNotesCount([...notesCount, "newNote"])}
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
