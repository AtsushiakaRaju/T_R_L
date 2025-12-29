# 🌌 The Realm of Lost Lores

## 📜 Project Overview
**The Realm of Lost Lores** is a frontend-based web application designed to explore speculative, historical, and theoretical concepts related to science, space, history, and unexplained phenomena.  
The project focuses on **user interaction, dynamic content rendering, and immersive UI design**, rather than backend-based authentication or databases.

This project is developed as part of the **Web Technologies** course.

---

## 🎯 Objectives
- To design an engaging and immersive user interface
- To demonstrate dynamic DOM manipulation using JavaScript and jQuery
- To implement interactive UI elements without backend dependency
- To create a scalable frontend structure suitable for future backend integration

---

## 🧭 Application Flow

### 1️⃣ Interest-Based Onboarding (index.html)
- Users are asked to select **exactly 3 topics of interest**
- No traditional login (username/password) is used
- JavaScript tracks topic selection in real time
- The **Enter the Realm** button activates only after valid selection
- User is redirected to the main page upon successful selection

---

### 2️⃣ Main Content Page (main.html)
- Navigation bar with logo, menu links, and search box
- Sidebar displaying content categories
- Scrollable content feed with theory cards
- Floating action button for future content submission features

---

## 📖 Dynamic Theory Cards
- Theory data is stored as JavaScript objects
- Cards are rendered dynamically using jQuery
- Each card displays:
  - Title
  - Content
  - Category-based glow effect

### 🔽 Read More / Read Less Feature
- Cards have a fixed preview height
- JavaScript checks content height using `scrollHeight`
- “Read More” appears only if content exceeds preview height
- Smooth expand/collapse animation using `max-height` transition

---

## 🎨 UI & UX Features
- Dark cosmic theme with galaxy background
- Red and blue glow accents for visual emphasis
- Custom horizontal and vertical gradient dividers
- Isolated scrolling for better user experience
- Smooth hover and transition effects

---

## 🛠️ Technologies Used
- **HTML5** – Page structure and semantics
- **CSS3** – Styling, layout, animations, transitions
- **JavaScript (ES6)** – Application logic
- **jQuery (Google CDN)** – DOM manipulation and event handling

---

## 📁 Project Structure
/assets
  ├── background.png
  ├── logo.jpeg

index.html
style.css
script.js

main.html
main_s.css
script_m.js


---

## ⚠️ Disclaimer
**Disclaimer:**  
The information presented in this project is collected from publicly available sources such as **Wikipedia** and other open resources.  
The content is used strictly for **educational and exploratory purposes** and does not intend to promote misinformation or validate speculative theories.

---

## 🚀 Deployment (GitHub Pages)

### Steps to Deploy:
1. Push the project to a GitHub repository
2. Go to **Repository → Settings → Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/root`
4. Save the settings

---

## 🔗 Live Execution Link
After deployment, the project will be accessible at:

[https://atsushiakaraju.github.io/T_R_L/]


---

## 🎓 Academic Note
This project demonstrates frontend concepts including layout design, dynamic rendering, event handling, and UI interaction using web technologies taught in the curriculum.

---

## 👥 Team Contribution
- UI & UX design
- Frontend logic and interactions
- Dynamic content rendering
- Version control using GitHub

---

## 🧠 Conclusion
**The Realm of Lost Lores** successfully demonstrates how modern web technologies can be used to create immersive and interactive frontend applications. The project is designed to be scalable and can be extended in the future with backend integration, authentication, and community features.
