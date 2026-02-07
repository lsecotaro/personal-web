# 🌐 Leonardo Secotaro - Staff Engineer Portfolio

<div align="center">

```
██╗     ███████╗ ██████╗ ███╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
██║     ██╔════╝██╔═══██╗████╗  ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
██║     █████╗  ██║   ██║██╔██╗ ██║███████║██████╔╝██║  ██║██║   ██║
██║     ██╔══╝  ██║   ██║██║╚██╗██║██╔══██║██╔══██╗██║  ██║██║   ██║
███████╗███████╗╚██████╔╝██║ ╚████║██║  ██║██║  ██║██████╔╝╚██████╔╝
╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ 
```

**A Matrix-themed personal portfolio showcasing professional experience and technical expertise**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Matrix_Theme-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## 🚀 Features

### 🎯 **Core Sections**
- **🏠 Home**: Personal introduction with animated skills showcase
- **💼 Experience**: Professional timeline with LinkedIn integration
- **📁 Portfolio**: Interactive project gallery with filtering
- **📞 Contact**: Multi-channel communication hub

### 🎨 **Matrix Theme Design**
- **Green Matrix Rain Animation**: Cascading code effect background
- **Cyberpunk Typography**: Orbitron and Courier Prime fonts
- **Glitch Effects**: Hover animations and text distortions
- **Terminal Aesthetics**: Command-line inspired UI elements
- **Neon Glow Effects**: Matrix-green lighting throughout

### 📱 **Technical Features**
- **Fully Responsive**: Mobile-first design approach
- **Single Page Application**: React Router navigation
- **JSON Data Source**: Centralized content management
- **Interactive Components**: Hover effects and animations
- **Accessibility Compliant**: WCAG guidelines followed
- **Performance Optimized**: Lazy loading and efficient rendering

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

```bash
# Node.js (version 14.0 or higher)
node --version

# npm (comes with Node.js)
npm --version
```

**Required versions:**
- **Node.js**: `>= 14.0.0`
- **npm**: `>= 6.0.0`

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd miWebV2
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.8.0
- React Scripts 5.0.1

---

## 🏗️ Build Instructions

### Development Build
```bash
npm run build
```

### Production Build
```bash
# Create optimized production build
npm run build

# The build folder will contain:
# - Minified JavaScript bundles
# - Optimized CSS files
# - Static assets
# - index.html ready for deployment
```

**Build Output:**
```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── manifest.json
```

---

## 🚀 Start Instructions

### Development Server
```bash
# Start development server with hot reload
npm start
```

**Development server will:**
- 🌐 Open browser at `http://localhost:3000`
- 🔄 Auto-reload on file changes
- 🐛 Show detailed error messages
- 📊 Display build statistics

### Production Server
```bash
# First build the project
npm run build

# Serve the build folder using a static server
# Option 1: Using serve (install globally)
npm install -g serve
serve -s build

# Option 2: Using npx
npx serve -s build

# Option 3: Using Python (if available)
cd build
python -m http.server 3000
```

---

## 📁 Project Structure

```
miWebV2/
├── 📄 README.md                 # This file
├── 📄 package.json             # Dependencies and scripts
├── 📁 public/
│   └── 📄 index.html           # HTML template
├── 📁 src/
│   ├── 📄 App.js               # Main application component
│   ├── 📄 App.css              # Global Matrix theme styles
│   ├── 📄 index.js             # React entry point
│   ├── 📁 components/          # React components
│   │   ├── 📄 Navbar.js        # Navigation component
│   │   ├── 📄 Navbar.css       # Navigation styles
│   │   ├── 📄 Home.js          # Home page component
│   │   ├── 📄 Home.css         # Home page styles
│   │   ├── 📄 Experience.js    # Experience timeline
│   │   ├── 📄 Experience.css   # Experience styles
│   │   ├── 📄 Portfolio.js     # Portfolio gallery
│   │   ├── 📄 Portfolio.css    # Portfolio styles
│   │   ├── 📄 Contact.js       # Contact form
│   │   └── 📄 Contact.css      # Contact styles
│   └── 📁 data/
│       └── 📄 portfolio.json   # Content database
```

---

## 🛠️ Technologies Used

### **Frontend Framework**
- **React 18.2.0**: Component-based UI library
- **React Router DOM 6.8.0**: Client-side routing
- **React Scripts 5.0.1**: Build tooling and configuration

### **Styling & Design**
- **CSS3**: Custom Matrix-themed styling
- **Google Fonts**: Orbitron & Courier Prime typography
- **CSS Animations**: Matrix rain, glitch effects, transitions
- **Responsive Design**: Mobile-first approach

### **Data Management**
- **JSON**: Local data storage for content
- **ES6 Modules**: Modern JavaScript imports/exports

### **Development Tools**
- **Create React App**: Project scaffolding
- **Webpack**: Module bundling (via CRA)
- **Babel**: JavaScript transpilation (via CRA)
- **ESLint**: Code linting (via CRA)

---

## 🎨 Matrix Theme Elements

### **Color Palette**
```css
Primary Green:   #00ff00  /* Matrix green */
Accent Green:    #00ff41  /* Bright matrix green */
Background:      #000000  /* Deep black */
Text Primary:    #00ff00  /* Matrix green text */
Text Secondary:  #00ff41  /* Accent green text */
```

### **Typography**
- **Headers**: `Orbitron` - Futuristic, tech-inspired
- **Body Text**: `Courier Prime` - Monospace, terminal-like
- **Code Elements**: `Courier Prime` - Consistent monospace

### **Animations**
- **Matrix Rain**: Cascading characters background
- **Glitch Effects**: Text distortion on hover
- **Neon Glow**: Pulsing light effects
- **Terminal Cursor**: Blinking cursor animations

---

## 📊 Performance Features

- **Code Splitting**: Automatic bundle optimization
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Responsive images with fallbacks
- **CSS Optimization**: Minified and compressed styles
- **Caching Strategy**: Browser caching for static assets

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ≥ 60    |
| Firefox | ≥ 60    |
| Safari  | ≥ 12    |
| Edge    | ≥ 79    |

---

## 📱 Responsive Breakpoints

```css
Mobile:    < 480px   /* Small phones */
Tablet:    < 768px   /* Tablets and large phones */
Desktop:   < 1024px  /* Small desktops */
Large:     ≥ 1024px  /* Large desktops */
```

---

## 🚀 Deployment Options

### **Static Hosting**
- **Netlify**: Drag & drop build folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Static website hosting

### **Quick Deploy Commands**
```bash
# Build for production
npm run build

# Deploy to Netlify (install netlify-cli)
npm install -g netlify-cli
netlify deploy --prod --dir=build

# Deploy to Vercel (install vercel-cli)
npm install -g vercel
vercel --prod
```

---

## 🔧 Available Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run test suite
npm run eject      # Eject from Create React App
```

---

## 📝 Content Management

### **Updating Personal Information**
Edit `src/data/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio...",
    "linkedin": "https://linkedin.com/in/yourprofile"
  }
}
```

### **Adding New Projects**
```json
{
  "portfolio": [
    {
      "id": 4,
      "title": "New Project",
      "description": "Project description...",
      "technologies": ["React", "Node.js"],
      "githubUrl": "https://github.com/user/repo"
    }
  ]
}
```

---

## 🐛 Troubleshooting

### **Common Issues**

**Port 3000 already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

**Build fails:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Styling issues:**
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

## 📞 Contact & Support

**Leonardo Secotaro**
- 💼 **LinkedIn**: [leonardo-secotaro](https://www.linkedin.com/in/leonardo-secotaro)
- 📧 **Email**: leonardo.secotaro@email.com
- 🌍 **Location**: Buenos Aires, Argentina

---

## 📄 License

This project is created for portfolio purposes. Feel free to use as inspiration for your own portfolio!

---

<div align="center">

```
 ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄    ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌
 ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌ ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ 
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌▐░▌  ▐░▌          
     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░▌░▌   ▐░█▄▄▄▄▄▄▄▄▄ 
     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░▌    ▐░░░░░░░░░░░▌
     ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌▐░▌░▌   ▐░█▀▀▀▀▀▀▀▀▀ 
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌▐░▌  ▐░▌          
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌     ▐░▐░▌▐░▌ ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ 
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌      ▐░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌
      ▀       ▀         ▀  ▀         ▀  ▀        ▀▀  ▀    ▀  ▀▀▀▀▀▀▀▀▀▀▀ 
```

**Made with 💚 and Matrix vibes**

</div>