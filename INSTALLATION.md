# 🛠️ Complete Platform-Agnostic Setup Guide

This document ensures your Sacred Spiral Flow app runs smoothly on **ANY platform**: Vercel, Netlify, Lovable, Replit, GitHub Codespaces, VS Code agents, and more.

## ✅ Pre-Installation Checklist

Before starting, ensure you have:

- [ ] **Node.js** 18.0.0 or higher
  - Check: `node --version`
  - Download: https://nodejs.org
  
- [ ] **npm** 9.0.0 or higher
  - Check: `npm --version`
  - Updates automatically with Node.js
  
- [ ] **Git** (for version control)
  - Check: `git --version`
  - Download: https://git-scm.com

- [ ] **A code editor** (VS Code recommended)
  - Download: https://code.visualstudio.com

---

## 🚀 Installation Steps (Universal)

### Step 1: Clone or Download Project

**Option A: Clone from GitHub**
```bash
git clone https://github.com/keelirae/sacred-spiral-flow.git
cd sacred-spiral-flow
```

**Option B: Download ZIP**
- Go to GitHub repo → Code → Download ZIP
- Extract and open folder

### Step 2: Install Dependencies

```bash
npm install
```

**What this does:**
- Downloads 450+ packages
- Sets up React, Vite, Firebase, Charts, etc.
- Creates `node_modules/` folder
- Installs dev tools for better development

**Time**: ~2 minutes on first run

**If it fails:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Configure Environment

```bash
# Copy template
cp .env.example .env.local

# Edit .env.local with your Firebase credentials
# See next section for details
```

### Step 4: Get Firebase Credentials

1. **Create Firebase Project**
   - Go to: https://console.firebase.google.com
   - Click "Create Project"
   - Fill in project name
   - Click "Create"
   - Wait for project to initialize

2. **Enable Services**
   - Go to: Build → Authentication
   - Click "Get Started"
   - Enable "Email/Password" and "Google"
   
   - Go to: Build → Cloud Firestore
   - Click "Create Database"
   - Select "Start in production mode"
   - Create database
   
   - Go to: Build → Storage
   - Click "Get Started"
   - Accept defaults

3. **Get Credentials**
   - Go to: Settings ⚙️ → Project Settings
   - Scroll to "Your apps" section
   - Click Web app icon (if not created, create it)
   - Copy firebaseConfig object

4. **Update .env.local**
   ```
   VITE_FIREBASE_API_KEY=xxxxxxx
   VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=xxxxx
   VITE_FIREBASE_STORAGE_BUCKET=xxxxx.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
   VITE_FIREBASE_APP_ID=1:xxxxx:web:xxxxxx
   VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXX
   ```

---

## 🏃 Quick Start Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Check for code errors
npm run lint

# Check TypeScript errors
npm run type-check
```

---

## 🌍 Platform-Specific Configuration

### Vercel ✅ Easiest

**Automatic Detection:**
Vercel auto-detects this is a Vite + React project.

**Required Setup:**
1. Connect your GitHub repo
2. Add 7 `VITE_*` environment variables
3. Deploy (takes 1 minute)

**Config File:** `vercel.json` (already included)

### Netlify ✅ Also Easy

**Automatic Detection:**
Netlify reads `netlify.toml` and auto-configures.

**Required Setup:**
1. Connect your GitHub repo
2. Add 7 `VITE_*` environment variables
3. Deploy (takes 2 minutes)

**Config File:** `netlify.toml` (already included)

### Lovable/AI Platforms ✅ Recommended for AI Dev

**Setup:**
1. Import from GitHub
2. Platform detects dependencies
3. Run: `npm install && npm run dev`
4. Start building with AI!

**Special Note:**
- `lovable-tagger` already in dependencies
- Platform optimizations included
- HMR enabled for live preview

### GitHub Codespaces ✅ Free Cloud IDE

**Setup:**
1. On GitHub repo, click Code → Codespaces
2. Create codespace
3. Terminal: `npm install && npm run dev`
4. Click port forward for localhost:5176

**Benefits:**
- No local installation needed
- Free 60 hours/month
- Full VS Code in browser

### Replit ✅ Easy

**Setup:**
1. Go to replit.com
2. Create → Import from GitHub
3. Select this repository
4. Click "Import"
5. Click "Run" when ready

**Note:**
- Replit auto-installs dependencies
- Dev server starts automatically
- Deploy with "Share" button

### Local VS Code ✅ Best for Development

**Setup:**
```bash
# In terminal
code sacred-spiral-flow

# Then
npm install
npm run dev
```

**Features:**
- Full IDE features
- Debugging capability
- Git integration
- Extensions support

---

## 📦 Dependency Management

### What's Installed?

**Core Dependencies:**
- `react` - UI framework
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Styling
- `firebase` - Backend + Auth
- `react-router-dom` - Routing
- `react-query` - Data fetching
- `chart.js` + `react-chartjs-2` - Charts
- `recharts` - Advanced charts
- `shadcn/ui` - UI components
- `zod` - Data validation

**Dev Dependencies:**
- ESLint - Code quality
- TypeScript tools
- Vite plugins
- Build optimizations

### Total Package Size
- Dependencies: ~450 packages
- Size: ~500MB in node_modules
- Build size: ~200KB gzipped

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install react@latest

# Major version update
npm install react@18
```

---

## 🔍 Verification Checklist

After installation, verify everything works:

```bash
# 1. Check Node version
node --version      # Should be 18+

# 2. Check npm version
npm --version       # Should be 9+

# 3. Check dependencies
npm list react      # Should show installed version

# 4. Type check
npm run type-check  # Should complete without errors

# 5. Lint check
npm run lint        # Should complete without errors

# 6. Build
npm run build       # Should create dist/ folder

# 7. Start dev server
npm run dev         # Should start on localhost:5176
```

**Expected Output:**
```
✓ ready in 1234 ms

➜  Local:   http://localhost:5176/
➜  press h to show help
```

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:**
- Install Node.js from https://nodejs.org
- Restart terminal
- Verify: `npm --version`

### Issue: "Module not found" errors
**Solution:**
```bash
# Reinstall all dependencies
npm install

# Or full reset
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 5176 already in use"
**Solution:**
```bash
# Windows PowerShell
Get-Process node | Stop-Process -Force

# macOS/Linux
lsof -ti:5176 | xargs kill -9

# Or change port in vite.config.ts
```

### Issue: Firebase authentication not working
**Checklist:**
1. [ ] All 7 env vars in `.env.local`
2. [ ] Firebase project created
3. [ ] Authentication enabled in Firebase
4. [ ] Email/Password auth configured
5. [ ] Firestore database created
6. [ ] Browser cache cleared

**Fix:**
```bash
# Restart dev server
npm run dev

# Clear browser:
# - DevTools → Application → Clear All
# - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
```

### Issue: Build fails with type errors
**Solution:**
```bash
# Check all errors
npm run type-check

# Fix eslint issues
npm run lint -- --fix

# Full build
npm run build
```

### Issue: Slow installation
**Reason:** First `npm install` downloads 450+ packages (~500MB)

**Solution:**
```bash
# Use npm faster mirror (optional)
npm config set registry https://registry.npmjs.org/

# Or try yarn
npm install -g yarn
yarn install
```

---

## 🚀 Building for Deployment

### Production Build

```bash
npm run build
```

**Output:**
- Creates `dist/` folder
- All files optimized
- Ready to deploy anywhere
- Size: ~200KB gzipped

### Testing Production Build

```bash
npm run preview
```

**Starts local server showing production bundle:**
- Simulates production environment
- No hot reload
- Shows actual performance

---

## 📋 Environment Variables Reference

### Required Variables
```env
VITE_FIREBASE_API_KEY=              # From Firebase config
VITE_FIREBASE_AUTH_DOMAIN=          # xx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=           # From Firebase
VITE_FIREBASE_STORAGE_BUCKET=       # xx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID= # From Firebase
VITE_FIREBASE_APP_ID=               # From Firebase
VITE_FIREBASE_MEASUREMENT_ID=       # Optional, from Firebase
```

### Optional Variables
```env
VITE_APP_ENV=production             # development, production, staging
VITE_ENABLE_ANALYTICS=true          # Enable analytics
VITE_ENABLE_DEBUG=false             # Debug mode
VITE_API_URL=                       # Backend API (if using)
```

### Platform-Specific Variables

**For Vercel:**
- Set in: Project Settings → Environment Variables
- Available during build: Yes
- Accessible in browser: Yes (only VITE_ prefix)

**For Netlify:**
- Set in: Site Settings → Environment
- Available during build: Yes
- Accessible in browser: Yes (only VITE_ prefix)

**For Lovable:**
- Set in: Project Settings → Environment
- Available during build: Yes
- Accessible in browser: Yes (only VITE_ prefix)

---

## 🔐 Security Notes

### Never Commit
- `.env.local` - Contains sensitive data
- `node_modules/` - Too large
- `.vercel/`, `.netlify/` - Platform configs

### These are safe to commit
- `.env.example` - Template only, no secrets
- `package.json`, `package-lock.json` - Dependency list
- `src/`, `public/` - Your code
- Config files: `vite.config.ts`, `tsconfig.json`, etc.

### Firebase Security
- Keys in `.env.local` are okay (development only)
- Update Firestore rules before production
- Use Firebase Auth properly in your code
- Never log sensitive data to console

---

## 📞 Getting Help

**If something doesn't work:**

1. **Check the docs:**
   - `SETUP_GUIDE.md` - Detailed guide
   - `DEPLOY_GUIDE.md` - Deployment options
   - `README.md` - Full documentation

2. **Common fixes:**
   - Restart terminal
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules`
   - Update npm: `npm install -g npm@latest`

3. **Get help:**
   - GitHub Issues: https://github.com/keelirae/sacred-spiral-flow/issues
   - Firebase Docs: https://firebase.google.com/docs
   - Vite Docs: https://vitejs.dev
   - React Docs: https://react.dev

---

## ✨ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Setup Firebase credentials
3. ✅ Start dev server: `npm run dev`
4. ✅ Open http://localhost:5176
5. ✅ Deploy to Vercel/Netlify (see DEPLOY_GUIDE.md)

**You're all set!** Happy coding! 🚀
