# Dynamic Profile Cards 🪪

A lightweight, browser-based app that lets you generate styled profile cards on the fly — no frameworks, no dependencies, just vanilla HTML, CSS, and JavaScript.

---

## 📂 Project Structure

```
dynamic-cards/
├── index1.html   # UI markup and all styling
└── PC.js         # Form logic and dynamic card creation
```

---

## ✨ Features

- Fill in a short form and instantly generate a profile card
- Each card displays a profile photo, name, profession, and bio
- Cards stack vertically inside a glassmorphism-styled container
- Smooth hover animations and focus transitions
- Input validation — alerts the user if any field is left empty
- Form resets automatically after each card is created

---

## 🚀 Getting Started

No installation or build step required.

1. Clone or download the repository.
2. Make sure `index1.html` and `PC.js` are in the **same folder**.
3. Open `index1.html` in any modern browser.

```bash
git clone https://github.com/<your-username>/dynamic-cards.git
cd dynamic-cards
open index1.html       # macOS
start index1.html      # Windows
xdg-open index1.html   # Linux
```

---

## 🖱️ How to Use

1. Paste a publicly accessible image URL into the **Image URL** field.
2. Enter the person's **Name**.
3. Enter their **Profession**.
4. Add a short **Info / Bio** blurb.
5. Click **Submit** — a card appears below the form instantly.
6. Repeat to add more cards.

---

## 🎨 UI Overview

| Element | Style detail |
|---|---|
| Page background | Dark gradient — `#141e30` → `#243b55` |
| Container | Frosted glass panel with `backdrop-filter: blur` |
| Inputs | Semi-transparent, scale on focus |
| Submit button | Blue gradient, glows on hover |
| Profile photo | Circular crop, blue ring, soft glow |
| Card hover | Lifts `8px` on the Y-axis |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, transitions, glassmorphism) |
| Logic | Vanilla JavaScript (DOM manipulation) |
| Dependencies | None |

---

## 📌 Notes

- The **Image URL** field expects a direct link to a publicly hosted image (e.g. from Unsplash, Imgur, or any CDN). Broken or private URLs will render as a broken image icon.
- The custom font `gilroy` is referenced in the CSS but not bundled. Add a `@font-face` rule or swap it for a Google Font (e.g. `Poppins`) if Gilroy is unavailable on the target machine.
