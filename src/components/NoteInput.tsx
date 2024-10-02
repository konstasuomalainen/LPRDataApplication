import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const NoteInput = ({ handleAddNote }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setNote, getNote, deleteNote } = useLocalStorage("notes");

  const handleSave = () => {
    const note = { id: uuidv4(), title, content };

    const allNotes = getNote();
    const updatedNotes = [...allNotes, note];
    setNote(updatedNotes);
    setTitle("");
    handleAddNote(updatedNotes);
    setContent("");
  };
  const handleGet = () => {
    const note = getNote();

    setTitle(note.title || "");
    setContent(note.content || "");
  };

  const handleDelete = () => {
    console.log(deleteNote);
  };
  return (
    <div className="inputArea-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="note-input"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your content here"
        className="note-textarea"
      />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
      <button className="get-button" onClick={handleGet}>
        Get
      </button>
    </div>
  );
};

export default NoteInput;
