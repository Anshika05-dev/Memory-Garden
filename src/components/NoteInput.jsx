import React, { useState, useRef } from "react";

const NoteInput = ({ onAdd }) => {
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 1); // max 3 images
    const readers = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text, images); // Pass text + images
    setText("");
    setImages([]);
    fileInputRef.current.value = null;
  };

  return (
    <form onSubmit={handleSubmit} className="note-input-form">
      <input
        type="text"
        value={text}
        placeholder="Plant a memory..."
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleImageChange}
      />

      <button type="submit">🌱 Add</button>

      {images.length > 0 && (
        <div className="preview-container">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`preview-${i}`}
              style={{
                height: "50px",
                marginRight: "5px",
                borderRadius: "6px",
              }}
            />
          ))}
        </div>
      )}
    </form>
  );
};

export default NoteInput;
