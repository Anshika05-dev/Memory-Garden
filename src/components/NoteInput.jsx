import React, { useState } from "react";

const NoteInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-input-form">
      <input
        type="text"
        value={text}
        placeholder="Plant your memory..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">🌱 Add</button>
    </form>
  );
};

export default NoteInput;
