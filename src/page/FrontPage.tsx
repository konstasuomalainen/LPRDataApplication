// import Spline from "@splinetool/react-spline";
import NavHeader from "../components/NavHeader";
import NotesList from "../components/NotesList";
import NoteInput from "../components/NoteInput";
import { useState } from "react";
interface Note {
  title: string;
  content: string;
  timestamp: string;
}

const FrontPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleSave = (note: Note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="container">
      <section className="notes-container">
        <NavHeader />
        <div className="notes-container-contents">
          <NotesList notes={notes} onSelectNote={setSelectedNote} />
          <NoteInput note={selectedNote} onSave={handleSave} />
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
