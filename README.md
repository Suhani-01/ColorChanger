# 🎨 Click Counter with Background Color Changer (React)

📌 **Live Site :** [Visit Here](https://suhani-01.github.io/ColorChanger/).

A simple and interactive React app that demonstrates two basic React features:
- A click counter
- A dynamic background color changer

Uses **React hooks**, **event handling**.

---

## 🚀 Features

- 🔢 Increases counter on container click
- 🎨 Changes background to a random RGB color when the button is clicked
- ✋ Stops button click from triggering the container click event
- 🧼 Clean UI and code structure

---

## 🛠️ Tech Stack

- ⚛️ React (with Hooks)
- 🎨 CSS for styling
- 🧠 JavaScript (ES6+)

---

## 🧠 Concepts Used

- `useState` hook for managing state
- `Math.random()` for generating random RGB values
- `onClick` event handling
- `e.stopPropagation()` to prevent event bubbling
- Inline styling to dynamically apply `backgroundColor`
- Clean separation of styling logic and structure

## 📁 Structure 

- src/
- App.js # 🧠 All main logic and UI (single component)
- App.css # 🎨 Basic styling (optional)
- index.js # ReactDOM entry point