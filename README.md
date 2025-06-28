# 🪴 Memory Garden

A calming, interactive space where memories bloom like plants — but only if you take care of them.  
Built in 3 hours for the **"Keep It Alive"** sprint hackathon 🌱

---

## 🎯 Concept

> “Make it, nurture it, don’t let it fade.”

**Memory Garden** is a digital garden where each note you plant acts like a living memory.  
It starts fresh and healthy — but if you ignore it, it withers and disappears.  
Keep your memories alive by checking in on them, interacting, and watching them grow.

---

## 🌟 Features

- 📝 Add beautiful memory notes with up to 3 images
- 🪴 Each note **visually grows like a plant stem** over time
- ⏳ Notes **decay if untouched** and disappear when expired
- 🧠 Fade effect & progress bar show how “alive” a note is
- 🎵 Lo-fi background music with **play/pause toggle** and volume slider
- 🌿 Animated gradient background for a calming vibe
- 💾 Notes saved with **localStorage** — refresh-safe

---

## 💻 Tech Stack

- **Frontend**: React + Vite
- **Styling**: HTML, CSS (custom), Flexbox Grid
- **Storage**: localStorage
- **Audio**: HTML5 Audio + effects
- **Deployment**: Vercel (or Netlify)

---

## 🧠 Time-based Logic

- Every note has a `createdAt`, `lastTouched`, and `expiresIn` field.
- If untouched for 2 minutes, the note fades and eventually dies (`🪦`).
- Clicking a note **resets its lifespan** — like watering a plant.

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/memory-garden.git
cd memory-garden
npm install
npm run dev
