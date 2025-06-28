const STORAGE_KEY = "memory_garden_notes";

export const loadNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load notes from localStorage:", error);
    return [];
  }
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Failed to save notes to localStorage:", error);
  }
};
