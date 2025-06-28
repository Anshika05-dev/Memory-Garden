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
        new Audio('/sounds/bin.mp3').play();
        onRemove(note.id);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [note, onRemove]);

  const handleTouch = () => {
    new Audio('/sounds/pop.mp3').play();
    onTouch(note.id);
  };

  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / 60000);
    return `${min}m ${sec}s`;
  };

  // Visual fade level based on time left
  const fadePercent = Math.max(0.3, timeLeft / note.expiresIn);
  const getLifeStageEmoji = () => {
    const percent = timeLeft / note.expiresIn;
    if (percent > 0.66) return "🌿";      // Healthy
    if (percent > 0.33) return "🍂";      // Fading
    return "🪦";                          // Near death
  };
  

  return (
<div
  className={`note-card ${
    timeLeft > note.expiresIn - 1000 ? "grow" : ""
  }`}
  style={{
    opacity: fadePercent}}
  onClick={handleTouch}
  title="Click to refresh this memory"
>
      <div className="life-stage" >{getLifeStageEmoji()}
      <p>{note.text}</p>
      </div>
      {note.images && note.images.length > 0 && (
        <div className="image-preview">
          {note.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`memory-${idx}`}
              className="note-image"
            />
          ))}
        </div>
      )}

<div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${(timeLeft / note.expiresIn) * 100}%` }}
  ></div>
</div>

    </div>
  );
};

export default NoteCard;
