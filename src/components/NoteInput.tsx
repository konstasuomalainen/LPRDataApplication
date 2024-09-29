import { useState, useEffect } from "react";

interface Note {
  title: string;
  content: string;
  timestamp: string; // Include timestamp
}

interface NoteInputProps {
  note: Note | null;
  onSave: (note: Note) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ note, onSave }) => {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      const newNote: Note = {
        title,
        content,
        timestamp: new Date().toLocaleString(), // Generate current timestamp
      };
      onSave(newNote);
      setTitle("");
      setContent("");
    }
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
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default NoteInput;
