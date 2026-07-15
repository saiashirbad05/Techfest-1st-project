# TECHFEST | IIT BOMBAY — SIMULATED PARADIGM
## Asia's Largest Science & Technology Festival

Welcome to the official repository for the **Techfest 2025 Cyborg Landing Page**. This single-page application is designed under the theme **"Simulated Paradigm"**—exploring the boundary where human cognitive systems interface with synthetic cybernetic structures.

The application has been styled with a distinct, premium **Cyber-Brutalist** aesthetic: sharp corners (`0px` border radius), heavy flat offsets, high contrast neon grids, and snappy transitions.

---

## ⚡ Core Sections & Highlights

### 1. Interactive Cyborg Hero
- **Holographic Frame**: Focuses on a custom-scaffolded cybernetic head unit display with warning indicators and live system status tracking.
- **Organic Node Matrix**: A live canvas particle grid rendering interconnecting cyan nodes that slide and pulse dynamically in response to scroll positions.

### 2. Live Schematics (Theme Blueprint)
- **MOD_01 Cognitive Synapse**: An integration card showcasing digital nerve signals merging with quantum computations.
- **MOD_02 Bionic Armature**: An engineering card detailing neuromotor telemetry and robotic limb augmentations.

### 3. Features & Events
- Flat border grids showcasing the 6 main pillars of Techfest:
  1. Technical Competitions
  2. Professional Workshops
  3. Global Exhibitions
  4. Distinguished Guest Lectures
  5. Robotics Arena Battlegrounds
  6. Startup Innovation Challenges

### 4. Interactive Timeline & Sponsors
- **Phase Timeline**: Scroll-triggered slide-in schedule tracking key events from Ignition to Singularity with rotating square coordinate pins.
- **Infinite Sponsor Marquee**: A double-looping horizontal ribbon for platinum, gold, and silver partners.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Engine & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styles**: Vanilla CSS Modules (scoped layouts, custom cyber-brutalist variables)
- **Fonts**: Google Fonts (`Orbitron`, `Share Tech Mono`)

---

## 🚀 Setup & Installation

### Prerequisite
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Local Development
1. Clone this repository to your local machine.
2. Navigate into the directory and install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173/`.

### Production Build
To bundle the project for optimal web production:
```bash
npm run build
```
This outputs static HTML, CSS, and JS assets in the `dist/` directory.

---

## 🌐 Deployment Instructions

Since this is a static single-page application, it can be deployed for free on various cloud hosts:

### Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/).
2. Select **"Import Project"** and link this GitHub repository.
3. Select **Vite** as the Framework Preset.
4. Click **Deploy**.

### Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/).
2. Import the repository or drag-and-drop the compiled `dist/` folder.
3. Use the build command `npm run build` and publish directory `dist`.

---

## 🎨 Visual Assets
All photorealistic cyborg graphics and metallic custom logos are located in the `public/` directory:
- `logo.jpg`: Main branding emblem.
- `cyborg_hero.png`: Primary hero avatar.
- `cyborg_brain.png`: Neural synaptic blueprint.
- `cyborg_implant.png`: Kinetic augmentation blueprint.
