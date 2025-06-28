import React, { useEffect, useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { loadNotes, saveNotes } from "./utils/storage";
import "./styles/App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const saved = loadNotes();
    setNotes(saved);
  }, []);

  // Save to localStorage whenever notes change
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      createdAt: Date.now(),
      lastTouched: Date.now(),
      expiresIn: 2 * 60 * 1000, // 2 minutes
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateTouch = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, lastTouched: Date.now() } : note
      )
    );
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <h1>🪴 Memory Garden</h1>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onTouch={updateTouch} onRemove={removeNote} />
    </div>
  );
};

export default App;
