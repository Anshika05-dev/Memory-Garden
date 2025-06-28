import { useRef, useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { loadNotes, saveNotes } from "./utils/storage";
import "./styles/App.css";

const App = () => {
  const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
  audioRef.current = new Audio("/sounds/lofi.mp3");
  audioRef.current.loop = true;
}, []);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setIsPlaying(!isPlaying);
};

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

  const addNote = (text, images = []) => {
    new Audio('/sounds/pop.mp3').play();
        const newNote = {
      id: Date.now(),
      text,
      images,
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
      <button className="music-toggle" onClick={toggleMusic}>
  {isPlaying ? "🎵 Pause Music" : "🎶 Play Lo-fi"}
</button>

      <div className="app-sub-container">
      <h1>🪴 Memory Garden</h1>
      <NoteInput onAdd={addNote} />
      </div>
      <NoteList notes={notes} onTouch={updateTouch} onRemove={removeNote} />
    </div>
  );
};

export default App;
