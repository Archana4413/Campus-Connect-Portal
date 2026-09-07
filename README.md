<div align="center">

<!-- Local SVG Animated Banner (100% Uptime & Reliable) -->
<img src="./assets/banner.svg" alt="Campus Connect Portal Banner" width="100%" />

<br/>

<!-- Animated Typing Subtitle -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=107C41&center=true&vCenter=true&width=550&lines=Seamless+Campus+Life+%26+Resource+Hub;Empowering+Students%2C+Faculty+%26+Admins;Real-Time+Academic+Management;Crafted+with+React+19+%26+Vite" alt="Typing SVG" />
</a>

<br/><br/>

<!-- Metadata Badges -->
[![Course](https://img.shields.io/badge/Course-CS3301%20Full%20Stack%20Development-0A2240?style=for-the-badge&logo=bookstack&logoColor=white)](https://github.com/Archana4413/Campus-Connect-Portal)
[![Author](https://img.shields.io/badge/Author-Archana4413-0d5c3a?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Archana4413)
[![Institution](https://img.shields.io/badge/Institution-RV%20University-a61c1c?style=for-the-badge&logo=google-classroom&logoColor=white)](https://rvu.edu.in)
[![Status](https://img.shields.io/badge/Status-Active%20%E2%9C%94-107c41?style=for-the-badge)](https://github.com/Archana4413/Campus-Connect-Portal)

<br/>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-portal-roles--views">Portal Views</a> •
  <a href="#-tech-stack--tools">Tech Stack</a> •
  <a href="#-project-architecture">Architecture</a> •
  <a href="#-quick-start-guide">Quick Start</a> •
  <a href="#-author">Author</a>
</p>

</div>

---

### 🌐 About the Project

**Campus Connect Portal** is an intuitive, all-in-one digital gateway engineered for the **RV University School of Computer Science & Engineering**. It consolidates daily campus communication, academic resource access, real-time university highlights, and role-based workflows into a unified, high-performance web application.

Designed with clean typography, responsive layout, and modern interactive modules, Campus Connect ensures students, professors, and administrative personnel can seamlessly access services tailored to their daily campus needs.

---

### ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h4>🏛️ Institutional Branding & Navbar</h4>
      <ul>
        <li>Distinctive RV University brand badge and department identification</li>
        <li>Quick-jump anchors to Login and Student Registration</li>
        <li>Mobile-responsive layout with seamless viewport adaptation</li>
      </ul>
    </td>
    <td width="50%">
      <h4>🌟 Hero Showcase Banner</h4>
      <ul>
        <li>Course identifier badge (<code>CS3301 - Full Stack Development</code>)</li>
        <li>High-contrast campus visual backdrop with smooth text overlay</li>
        <li>Interactive call-to-action to explore role-specific views</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h4>🎞️ Interactive Carousel Slider</h4>
      <ul>
        <li>Showcases campus facilities, learning spaces, and academic tools</li>
        <li>Next & Previous tactile navigation buttons</li>
        <li>Dynamic indicator pills highlighting the active slide</li>
      </ul>
    </td>
    <td width="50%">
      <h4>🔐 React Authentication Module</h4>
      <ul>
        <li>Instant toggle between <b>Student Login</b> and <b>Registration</b></li>
        <li>Reactive form inputs with client-side state handling</li>
        <li>Structured for seamless API integration with backend services</li>
      </ul>
    </td>
  </tr>
</table>

---

### 👥 Portal Roles & Views

<div align="center">

| Role | Target Audience | Key Capabilities |
| :--- | :--- | :--- |
| **👨‍🎓 Student Portal** | Enrolled Undergraduates & Postgraduates | • Browse enrolled course materials<br/>• Track attendance & exam timetables<br/>• View real-time semester grades & notices |
| **👨‍🏫 Faculty Portal** | Teaching & Research Faculty | • Upload syllabus and lecture notes<br/>• Record & review classroom attendance<br/>• Publish academic marks & student feedback |
| **🛡️ Admin Portal** | University Administration | • Manage student & faculty registry<br/>• Broadcast university-wide circulars<br/>• System oversight & analytical reports |

</div>

---

### 🛠️ Tech Stack & Tools

<div align="center">

| Frontend | Styling & Assets | Backend & Tools |
| :---: | :---: | :---: |
| ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Responsive](https://img.shields.io/badge/Mobile_Ready-107c41?style=for-the-badge&logo=google-chrome&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) |

</div>

---

### 📁 Project Architecture

```plaintext
campus-connect-portal/
├── assets/                          # Repository documentation visuals & SVGs
│   ├── banner.svg                   # Custom vector animated hero banner
│   └── footer.svg                   # Flowing wave footer divider
├── client/                          # Frontend Application (Vite + React)
│   ├── index.html                   # Primary HTML document & role showcase
│   ├── package.json                 # Frontend dependencies and scripts
│   ├── vite.config.js               # Vite bundler configuration
│   └── src/
│       ├── main.jsx                 # React root bootstrap
│       ├── carousel.js              # Interactive carousel controller logic
│       ├── style.css                # Global stylesheet & design tokens
│       ├── assets/                  # Campus imagery & visual media
│       └── components/
│           └── AuthModule.jsx       # Student login & registration component
├── server/                          # Backend API Architecture
│   ├── package.json                 # Server dependencies & scripts
│   └── src/
│       ├── app.js                   # Application initialization
│       ├── config/                  # Database & environment setups
│       ├── controllers/             # Business logic controllers
│       ├── middleware/              # Auth & error middlewares
│       └── models/                  # Database schemas
├── package.json                     # Root configuration
└── README.md                        # Documentation
```

---

### 🚀 Quick Start Guide

#### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

#### Step 1: Clone the Repository
```bash
git clone https://github.com/Archana4413/Campus-Connect-Portal.git
cd Campus-Connect-Portal
```

#### Step 2: Install Dependencies
```bash
cd client
npm install
```

#### Step 3: Run the Development Server
```bash
npm run dev
```

#### Step 4: Access the Portal
Open your browser and navigate to:
```
http://localhost:5173
```

---

### 👤 Author

<div align="center">

<img src="https://github.com/Archana4413.png" width="90" style="border-radius: 50%;" alt="Archana4413 Avatar" />

### **Archana4413**
**RV University** — School of Computer Science & Engineering  
*CS3301 - Full Stack Development*

[![GitHub Profile](https://img.shields.io/badge/GitHub-Archana4413-181717?style=flat-square&logo=github)](https://github.com/Archana4413)

<br/>

<!-- Local SVG Wave Footer -->
<img src="./assets/footer.svg" alt="Footer Wave Divider" width="100%" />

<sub>&copy; 2026 RV University • Campus Connect Portal • Maintained by Archana4413</sub>

</div>