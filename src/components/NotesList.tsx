import { useLocalStorage } from "./useLocalStorage";
import { useState, useEffect } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
}

const NotesList = ({ handleAddNote }: any) => {
  const { getNote } = useLocalStorage("notes");
  const [notes, setNotes] = useState<Note[]>([]);
  const notesList2 = handleAddNote;
  useEffect(() => {
    const storedNotes = getNote();
    console.log(notesList2, storedNotes);
    console.log("Stored Notes:");
    console.log({ setNotes });
  }, []);

  return (
    <div className="notesList-container">
      <ul className="list">
        {notes.map((note) => (
          <li className="note-card" key={note.id} id={note.id}>
            <strong>{note.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
