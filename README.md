# React Banner Switcher Application

This project is a simple React application that allows users to select and view different banner components. Once a banner is selected, the interface switches to a full-screen banner view with **Previous** and **Next** navigation controls in the header.

---

## ✨ Features

- Initial option screen to select a banner
- Displays **only one banner at a time**
- Removes all other UI after selection
- Fixed header with **Next** and **Previous** buttons
- Smooth banner switching using React state
- Scalable architecture (easy to add more banners)
- Clean and responsive UI

---

## 🧱 Project Structure

```
src/
│
├── App.jsx            # Main application logic
├── BannerOne.jsx      # First banner component
├── BannerTwo.jsx      # Second banner component
├── index.js
└── styles / assets
```

---

## ⚙️ How It Works

1. User is presented with banner selection options.
2. On selection:
   - All other UI elements are removed.
   - The selected banner is rendered full-screen.
   - A header appears with **Next** and **Previous** buttons.
3. Navigation buttons allow switching between banners without leaving the banner view.

---

## 🚀 Running the Project

```bash
npm install
npm start
```

The app will be available at:

```
http://localhost:3000
```

---

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- JavaScript (ES6+)
- Tailwind CSS (for styling)
- Framer Motion
- GSAP
- HTML5 & CSS3

---

## 📸 Assets & Design Credits

> **Important Notice**

The **concept, images, and visual inspiration** used in the banner components are taken from **Fujisilvertech**.

All rights to the images, branding elements, and original design concepts belong to:

**Fujisilvertech**  
https://fujisilvertech.com

This project is created **for learning, demonstration, and development purposes only** and does not claim ownership over any third-party assets used.

---

## 📄 License

This project is intended for educational and internal use.  
Please ensure proper permission is obtained before using any third-party assets in production.

---

## 🙌 Author

Developed by [Dodi Tank](https://github.com/DodiTank16)