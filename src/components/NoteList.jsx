import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onTouch, onRemove }) => {
  return (
    <div className={`note-list count-${notes.length}`}>
      {notes.length === 0 ? (
        <p>📝 No memories yet. Plant one!</p>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onTouch={onTouch}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
