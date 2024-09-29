import React from "react";

interface Note {
  title: string;
  content: string;
  timestamp: string;
}

interface NotesListProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onSelectNote }) => {
  return (
    <div className="notesList-container">
      <ul className="list">
        {notes.map((note, index) => (
          <li
            className="note-card"
            key={index}
            onClick={() => onSelectNote(note)}
          >
            <strong>{note.title}</strong>
            <small className="timestamp">{note.timestamp}</small>{" "}
            {/* Display the timestamp */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
