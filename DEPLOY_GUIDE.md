# 🚀 Quick Deployment Guide

Get your app running on any platform in minutes!

## ⚡ Super Quick Start (5 minutes)

### For Local Development
```bash
npm install && npm run dev
# Visit: http://localhost:5176
```

### For Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow the prompts - done in 30 seconds!
```

---

## 📋 Step-by-Step Platform Guides

### 🔵 Vercel (Recommended - Easiest)

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
# Select "Yes" to overwrite settings
# Select "npm run build" as build command
# Select "dist" as output directory
```

**Option B: Web Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repo
4. Click "Deploy"
5. In Project Settings → Environment Variables, add:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`

**Time to Deploy**: 2 minutes ⚡

---

### 🔴 Netlify

**Option A: Using Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option B: Web Dashboard**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repo
4. Build settings auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Add environment variables in Site Settings

**Time to Deploy**: 3 minutes ⚡

---

### 💜 Render.com

1. Go to [render.com](https://render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repo
4. Settings:
   - Name: `sacred-spiral-flow`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"
6. Add environment variables

**Time to Deploy**: 3 minutes ⚡

---

### 🔷 GitHub Pages

1. Go to your repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/(root)`
4. Add a GitHub Action:
   ```yaml
   - name: Deploy
     run: npm install && npm run build
   ```
5. Upload `dist` folder

**Time to Deploy**: 2 minutes ⚡

---

### 🐙 GitHub Codespaces (Free Cloud Development)

1. On GitHub repo, click "Code" → "Codespaces" → "Create codespace on main"
2. In terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Click "Open in browser" or check port forward

**Time to Deploy**: 1 minute ⚡

---

### 🟠 Lovable AI Platform

1. Go to [lovable.dev](https://lovable.dev) (or similar AI platform)
2. New Project → "Import from Git"
3. Select your GitHub repo
4. Platform auto-detects React + Vite
5. Click "Import"
6. Terminal: `npm run dev`
7. Done! Dashboard loads automatically

**Time to Deploy**: 1 minute ⚡

---

### 💻 AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Create App → "Host web app"
3. Select GitHub
4. Choose repository and branch
5. Build settings auto-detected
6. Click "Save and deploy"

**Time to Deploy**: 5 minutes ⚡

---

### 🐳 Docker Deployment

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and run:**
```bash
docker build -t sacred-spiral-flow .
docker run -p 3000:3000 sacred-spiral-flow
```

---

### 🌐 Replit

1. Go to [replit.com](https://replit.com)
2. Create → Import from GitHub
3. Select your repo
4. Click "Import"
5. Terminal: `npm install && npm run dev`
6. Click "Run" or "▶" button

**Time to Deploy**: 2 minutes ⚡

---

## 🔐 Environment Variables

**For all platforms, you need to set these env vars:**

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**Get these values from:**
1. [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. ⚙️ Settings → Project Settings
4. Scroll to "Your apps" → Web app config
5. Copy all values to .env.local (development) or platform's env vars (production)

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads without 404
- [ ] Dashboard accessible at `/app`
- [ ] Login page works at `/auth`
- [ ] Firebase auth functional
- [ ] No console errors
- [ ] Responsive on mobile

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port already in use"
```bash
# macOS/Linux:
lsof -ti:5176 | xargs kill -9

# Windows PowerShell:
Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force
```

### Firebase not connecting
1. Check `.env.local` has all 7 Firebase variables
2. Verify Firebase project is active
3. Clear browser cache
4. Check Firebase console for errors

### Build failing
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check linting errors
npm run build       # Full build
```

### Deployment stuck
- Check build logs on the platform
- Verify Node.js version is 18+
- Ensure all env vars are set
- Try clearing platform cache

---

## 📊 Recommended Deployment Path

1. **Development**: Local with `npm run dev` ✅
2. **Staging**: Vercel preview branch
3. **Production**: Vercel main branch auto-deploy

```bash
# After each commit to main:
# - Vercel auto-deploys
# - Site updates in ~2 minutes
# - No manual steps needed!
```

---

## 🎯 Platform Comparison

| Platform | Ease | Cost | Speed | Cold Start |
|----------|------|------|-------|-----------|
| Vercel | ⭐⭐⭐⭐⭐ | Free | Instant | <1s |
| Netlify | ⭐⭐⭐⭐ | Free | Fast | 1-2s |
| Render | ⭐⭐⭐⭐ | Free | Fast | 2-3s |
| AWS Amplify | ⭐⭐⭐ | Paid | Fast | 3-5s |
| Docker | ⭐⭐ | Varies | Varies | Varies |
| GitHub Pages | ⭐⭐⭐ | Free | Fast | <1s |

---

## 🚀 One-Click Deploy Links

Coming soon:

- [ ] Vercel Deploy Button
- [ ] Netlify Deploy Button
- [ ] Render Deploy Button
- [ ] AWS Amplify Deploy Button

---

**Questions?** Check the full [SETUP_GUIDE.md](./SETUP_GUIDE.md)

Happy deploying! 🎉
