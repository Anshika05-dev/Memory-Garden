import React, { useEffect, useState } from "react";

const NoteCard = ({ note, onTouch, onRemove }) => {
  const [timeLeft, setTimeLeft] = useState(
    note.expiresIn - (Date.now() - note.lastTouched)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = note.expiresIn - (Date.now() - note.lastTouched);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        onRemove(note.id);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [note, onRemove]);

  const handleTouch = () => {
    onTouch(note.id);
  };

  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / 60000);
    return `${min}m ${sec}s`;
  };

  // Visual fade level based on time left
  const fadePercent = Math.max(0.3, timeLeft / note.expiresIn);

  return (
    <div
      className="note-card"
      style={{ opacity: fadePercent }}
      onClick={handleTouch}
      title="Click to refresh this memory"
    >
      <p>{note.text}</p>
      <small>⏳ {formatTime(timeLeft)}</small>
    </div>
  );
};

export default NoteCard;
