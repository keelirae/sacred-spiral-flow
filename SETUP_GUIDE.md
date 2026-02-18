# Sacred Spiral Flow - Complete Setup Guide

A modern React dashboard application with Firebase authentication, real-time analytics, and user management.

## 📋 Quick Start

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: For version control

### Installation (All Platforms)

```bash
# 1. Clone the repository
git clone https://github.com/keelirae/sacred-spiral-flow.git
cd sacred-spiral-flow

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your Firebase credentials to .env.local
# Edit .env.local with your Firebase project details

# 5. Start development server
npm run dev

# 6. Open browser
# Visit: http://localhost:5176
```

## 🚀 Deployment Guides

### Vercel (Recommended)

**Easiest option - 1 minute setup**

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite + React
   - Add environment variables:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`
     - `VITE_FIREBASE_MEASUREMENT_ID`
   - Click "Deploy"
   - Done! ✅

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Lovable AI Platform

**For AI-assisted development**

1. **Export Project**
   - Copy all files from `sacred-spiral-flow`
   - Upload to Lovable as a new project

2. **Install Dependencies in Lovable**
   ```bash
   npm install
   ```

3. **Add .env.local**
   - Create `.env.local` in Lovable
   - Copy content from `.env.example`
   - Add your Firebase credentials

4. **Run Dev Server**
   ```bash
   npm run dev
   ```

### GitHub Codespaces

**Free cloud development environment**

1. **Open in Codespaces**
   - Go to your GitHub repo
   - Click "Code" → "Codespaces" → "Create codespace on main"

2. **In Codespace Terminal**
   ```bash
   npm install
   cp .env.example .env.local
   # Edit .env.local with your Firebase credentials
   npm run dev
   ```

3. **Forward Port**
   - Terminal shows: "Your application running on http://localhost:5176"
   - Click the link or use Port Forward feature

### VS Code (Local Development)

**Best for local development**

1. **Open in VS Code**
   ```bash
   code sacred-spiral-flow
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Firebase credentials
   ```

4. **Start Dev Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Visit: `http://localhost:5176`
   - Dashboard auto-opens with HMR (Hot Reload)

### Netlify

**Alternative deployment option**

1. **Connect to GitHub**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**
   - Add all `VITE_*` variables from `.env.example`

4. **Deploy**
   - Click "Deploy site"

### Docker (Advanced)

**For containerized deployment**

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t sacred-spiral-flow .
docker run -p 3000:3000 sacred-spiral-flow
```

## 🔧 Environment Variables

Create `.env.local` file (copy from `.env.example`):

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Application Configuration (Optional)
VITE_APP_ENV=development
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEMO_MODE=true
```

**To get Firebase credentials:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing
3. Click "Web" to add web app
4. Copy all credentials to `.env.local`

## 📦 Available Scripts

```bash
npm run dev           # Start development server (HMR enabled)
npm run build         # Build for production
npm run build:dev     # Build in development mode
npm run preview       # Preview production build locally
npm run lint          # Run ESLint
npm run type-check    # Type checking with TypeScript
```

## 📂 Project Structure

```
sacred-spiral-flow/
├── src/
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── layout/         # Layout components
│   │   ├── icons/          # Icon components
│   │   └── Sidebar.tsx     # Dashboard sidebar
│   ├── pages/              # Page components
│   │   ├── public/         # Public pages
│   │   └── dashboard/      # Dashboard pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── integrations/       # External service integrations
│   └── styles/             # Global styles
├── public/                 # Static assets
├── dist/                   # Production build (generated)
├── .env.example           # Environment template
├── vercel.json            # Vercel deployment config
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies & scripts
```

## 🎯 Key Technologies

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Routing**: React Router v6
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Charts**: Chart.js + Recharts
- **Forms**: React Hook Form
- **State**: React Query + React Context

## 🔐 Firebase Setup

1. **Create Firebase Project**
   - Visit [Firebase Console](https://console.firebase.google.com)
   - Click "Create Project"
   - Enable these services:
     - Authentication (Email/Password, Google)
     - Cloud Firestore
     - Storage

2. **Get Configuration**
   - In Firebase Console → Project Settings
   - Copy Web App credentials
   - Paste into `.env.local`

3. **Setup Firestore**
   - Go to Firestore Database
   - Click "Create Database"
   - Choose "Start in production mode"
   - Create collections as needed

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process using port 5176
# Windows PowerShell:
Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force

# macOS/Linux:
lsof -ti:5176 | xargs kill -9
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Firebase Authentication Issues
1. Check `.env.local` has all required variables
2. Verify Firebase project is active
3. Check Firebase rules allow public access in dev
4. Clear browser cookies and cache

### Build Errors
```bash
# Type check for errors
npm run type-check

# Lint check
npm run lint

# Clean build
rm -rf dist
npm run build
```

### Development Server Errors
1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version` (should be 9+)
3. Delete `.vite` cache: `rm -rf .vite`
4. Restart dev server

## 📱 Features

- 🔐 Secure Firebase Authentication
- 📊 Real-time Analytics Dashboard
- 👥 Client Management System
- 📋 Check-in Tracking
- 💪 Training Programs
- 🥗 Nutrition Planning
- 💬 Messaging System
- 📝 Task Management
- 📦 Package Management
- 📋 Questionnaires
- 📈 Progress Analytics
- 🎨 Beautiful Responsive UI

## 🌐 Public Website Routes

- `/` - Homepage
- `/physical-realm` - Physical realm info
- `/mental-realm` - Mental realm info
- `/spiritual-realm` - Spiritual realm info
- `/journey` - Journey overview
- `/about` - About page
- `/contact` - Contact form
- `/auth` - Login/Register
- `/initiates` - Initiates page
- `/privacy` - Privacy policy

## 🔒 Dashboard Routes (Auth Required)

- `/app` - Dashboard overview
- `/app/checkins` - Check-ins
- `/app/training` - Training programs
- `/app/nutrition` - Nutrition plans
- `/app/messages` - Messages
- `/app/tasks` - Tasks
- `/app/packages` - Packages
- `/app/clients` - Client management
- `/app/forms` - Questionnaires

## 🚨 Important Notes

1. **Environment Variables**: Never commit `.env.local` to Git (it's in `.gitignore`)
2. **Firebase Security**: Update Firestore rules before production
3. **Node Version**: Ensure Node.js 18+ is installed
4. **npm vs yarn**: Use npm (specified in package.json)

## 📞 Support

- GitHub Issues: [sacred-spiral-flow/issues](https://github.com/keelirae/sacred-spiral-flow/issues)
- Firebase Docs: [firebase.google.com/docs](https://firebase.google.com/docs)
- Vite Docs: [vitejs.dev](https://vitejs.dev)
- React Router: [reactrouter.com](https://reactrouter.com)

## 📄 License

Private project - All rights reserved

---

**Happy coding! 🚀**

For more help, check the platform-specific guides above or open an issue on GitHub.
