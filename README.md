# 📸 Photo Gallery Application  
### React + Vite + LightGallery

A fast, modern, and responsive **Photo Gallery Web Application** built using **React** and **Vite**, featuring a stunning **LightGallery lightbox** with zoom, thumbnails, fullscreen mode, and smooth transitions.

---

## 🚀 Features

- ⚡ Ultra-fast development & build using Vite  
- 📱 Fully responsive photo grid layout  
- ✨ LightGallery integration for immersive lightbox  
- 🔍 Zoom, thumbnails, fullscreen, swipe transitions  
- 📱 Mobile-friendly UI/UX  
- 🧩 Clean, modular, and scalable React components  
- 🎨 Easily customizable styling (CSS / Tailwind)

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **LightGallery**
- **JavaScript / JSX**
- **CSS / Tailwind (optional)**

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone your-repo-link
cd project-folder-name
```
### 2. Install dependencies

```bash
npm install
```
### 3. Start development server
```bash
npm run dev
```
---

## 🔌 Installing LightGallery
### Install LightGallery core + plugins:
```bash
npm install lightgallery lightgallery/react
npm install lg-thumbnail lg-zoom
```
---

## 🖼️ Using LightGallery in React
### Inside your Gallery.jsx component:
```jsx
import LightGallery from "lightgallery/react";

// LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lg-thumbnail";
import lgZoom from "lg-zoom";
```
### Wrap images:
```jsx
<LightGallery plugins={[lgThumbnail, lgZoom]}>
  <a href="/images/photo1.jpg">
    <img src="/images/photo1_thumb.jpg" alt="Photo 1" />
  </a>
</LightGallery>
```
---

## 📁 Project Structure
```arduino
photo-gallery-react
│
├── public
│   └── images/
│
├── src
│   ├── components
│   │   └── Gallery.jsx
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```
---
## 🔍 How the Gallery Works

- Images are stored inside public/images or src/assets
- Gallery.jsx loads all images into a responsive grid
- Clicking an image opens the LightGallery popup
- Uers can zoom, swipe, navigate, and view fullscreen
---

## 🏗️ Production Build

### Generate production build:
```bash
npm run build
```
### Preview the build:
```bash
npm run preview
```
---

## 👨‍💻 Contributors

#### Thanks to all the contributors who helped build this project:

[Ankit Mishra](https://github.com/Coder-Ankit-MCA)

[Rishikesh Pandey](https://github.com/pandeyRishi007)

[Chandan Kumar](https://github.com/kumarchandan790)

[Bhuwneshwar Singh](https://github.com/bhuwneshwar2001)

[Suraj Babu](https://github.com/surajbabu05)

---

## 📄 License

This project is licensed under the MIT License.
