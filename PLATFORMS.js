#!/usr/bin/env node

/**
 * Sacred Spiral Flow - Platform Deployment Reference
 * 
 * This file documents all configuration for multi-platform deployment
 */

const platforms = {
  VERCEL: {
    name: "Vercel",
    time: "2 minutes",
    cost: "Free",
    url: "https://vercel.com",
    steps: [
      "1. Push to GitHub: git push origin main",
      "2. Go to vercel.com",
      "3. Click 'New Project'",
      "4. Select your GitHub repo",
      "5. Add 7 VITE_* environment variables",
      "6. Click 'Deploy'"
    ],
    configFile: "vercel.json",
    features: ["Auto-deploy on push", "Free tier", "Fast cold starts", "Preview URLs"]
  },

  NETLIFY: {
    name: "Netlify",
    time: "3 minutes",
    cost: "Free",
    url: "https://netlify.com",
    steps: [
      "1. Push to GitHub: git push origin main",
      "2. Go to netlify.com",
      "3. Click 'Add new site' → 'Import'",
      "4. Select your GitHub repo",
      "5. Add 7 VITE_* environment variables",
      "6. Click 'Deploy'"
    ],
    configFile: "netlify.toml",
    features: ["Auto-deploy on push", "Free tier", "Form handling", "Functions support"]
  },

  RENDER: {
    name: "Render",
    time: "3 minutes",
    cost: "Free",
    url: "https://render.com",
    steps: [
      "1. Push to GitHub: git push origin main",
      "2. Go to render.com",
      "3. Click 'New' → 'Static Site'",
      "4. Select your GitHub repo",
      "5. Add 7 VITE_* environment variables",
      "6. Click 'Create Static Site'"
    ],
    configFile: "render.yaml",
    features: ["Auto-deploy on push", "Free tier", "Custom domains"]
  },

  LOVABLE: {
    name: "Lovable AI Platform",
    time: "1 minute",
    cost: "Varies",
    url: "https://lovable.dev",
    steps: [
      "1. Go to lovable.dev",
      "2. Create → 'Import from Git'",
      "3. Select this repository",
      "4. Click 'Import'",
      "5. Terminal: npm install && npm run dev",
      "6. Start building with AI!"
    ],
    configFile: "None needed",
    features: ["AI-assisted development", "Live preview", "HMR enabled", "Code tagger"]
  },

  GITHUB_CODESPACES: {
    name: "GitHub Codespaces",
    time: "2 minutes",
    cost: "Free (60 hrs/month)",
    url: "https://github.com",
    steps: [
      "1. Go to GitHub repo",
      "2. Click 'Code' → 'Codespaces' → 'Create'",
      "3. Wait for codespace to load",
      "4. Terminal: npm install && npm run dev",
      "5. Click port forward for http://localhost:5176"
    ],
    configFile: "None needed",
    features: ["Full VS Code in browser", "No local setup", "Free 60 hrs/month"]
  },

  LOCAL_VSCODE: {
    name: "VS Code (Local)",
    time: "2 minutes",
    cost: "Free",
    url: "https://code.visualstudio.com",
    steps: [
      "1. Open project: code sacred-spiral-flow",
      "2. Terminal: npm install",
      "3. Setup: cp .env.example .env.local",
      "4. Add Firebase credentials to .env.local",
      "5. Terminal: npm run dev",
      "6. Open http://localhost:5176"
    ],
    configFile: "vite.config.ts",
    features: ["Full IDE features", "Debugging", "Extensions", "Git integration"]
  },

  REPLIT: {
    name: "Replit",
    time: "2 minutes",
    cost: "Free",
    url: "https://replit.com",
    steps: [
      "1. Go to replit.com",
      "2. Create → 'Import from GitHub'",
      "3. Select this repository",
      "4. Click 'Import'",
      "5. Click 'Run'",
      "6. Dashboard auto-loads in preview"
    ],
    configFile: "None needed",
    features: ["Quick import", "No setup needed", "Built-in preview"]
  },

  AWS_AMPLIFY: {
    name: "AWS Amplify",
    time: "5 minutes",
    cost: "Free tier available",
    url: "https://console.aws.amazon.com/amplify",
    steps: [
      "1. Go to AWS Amplify Console",
      "2. Click 'Create App' → 'Host web app'",
      "3. Select GitHub",
      "4. Choose your repository",
      "5. Add 7 VITE_* environment variables",
      "6. Click 'Deploy'"
    ],
    configFile: "buildspec.yml (optional)",
    features: ["AWS integration", "Custom domain", "SSR capable"]
  },

  DOCKER: {
    name: "Docker",
    time: "5 minutes",
    cost: "Free",
    url: "https://docker.com",
    steps: [
      "1. Create Dockerfile (template included)",
      "2. Build: docker build -t sacred-spiral-flow .",
      "3. Run: docker run -p 3000:3000 sacred-spiral-flow",
      "4. Open http://localhost:3000",
      "5. Deploy to Docker Hub, Kubernetes, etc."
    ],
    configFile: "Dockerfile",
    features: ["Containerized", "Deploy anywhere", "Consistent environment"]
  }
};

const environmentVariables = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
  "VITE_FIREBASE_MEASUREMENT_ID"
];

const files = {
  ".env.example": "Environment variables template - copy to .env.local",
  ".env.production": "Production environment settings",
  "vercel.json": "Vercel deployment configuration",
  "netlify.toml": "Netlify deployment configuration",
  "render.yaml": "Render deployment configuration",
  "buildspec.yml": "AWS CodeBuild configuration",
  "vite.config.ts": "Vite build configuration (optimized for all platforms)",
  ".npmrc": "npm configuration for dependency resolution",
  ".github/workflows/deploy.yml": "GitHub Actions CI/CD pipeline",
  "INSTALLATION.md": "Complete installation guide",
  "SETUP_GUIDE.md": "Detailed setup instructions for all platforms",
  "DEPLOY_GUIDE.md": "Deployment guides for each platform",
  "START_HERE.txt": "Quick start guide in plain text"
};

console.log(`
╔════════════════════════════════════════════════════════════════╗
║     Sacred Spiral Flow - Multi-Platform Deployment Reference   ║
╚════════════════════════════════════════════════════════════════╝

🌍 SUPPORTED PLATFORMS
═══════════════════════════════════════════════════════════════

`);

Object.entries(platforms).forEach(([key, platform], index) => {
  console.log(`${index + 1}. ${platform.name.toUpperCase()}`);
  console.log(`   ⏱️  Time: ${platform.time}`);
  console.log(`   💰 Cost: ${platform.cost}`);
  console.log(`   🔗 URL: ${platform.url}`);
  console.log(`   📋 Config: ${platform.configFile}`);
  console.log(`   ✨ Features: ${platform.features.join(", ")}`);
  console.log();
});

console.log(`
🔐 ENVIRONMENT VARIABLES NEEDED
═══════════════════════════════════════════════════════════════

All these variables must be added to each platform:

${environmentVariables.map(v => `  • ${v}`).join("\n")}

Get these from: Firebase Console → Settings → Project Settings


📁 CONFIGURATION FILES
═══════════════════════════════════════════════════════════════

${Object.entries(files).map(([file, desc]) => `  • ${file.padEnd(35)} - ${desc}`).join("\n")}


⚡ QUICKEST DEPLOY
═══════════════════════════════════════════════════════════════

Recommended: VERCEL (2 minutes)

  1. git push origin main
  2. Go to vercel.com
  3. Import your repo
  4. Add environment variables
  5. Click Deploy


🛠️ LOCAL DEVELOPMENT
═══════════════════════════════════════════════════════════════

  npm install
  cp .env.example .env.local
  # Edit .env.local with Firebase credentials
  npm run dev
  
  Then open: http://localhost:5176


📚 DETAILED GUIDES
═══════════════════════════════════════════════════════════════

  • START_HERE.txt      ← Read first (quick start)
  • INSTALLATION.md     ← Step-by-step installation
  • SETUP_GUIDE.md      ← Comprehensive setup
  • DEPLOY_GUIDE.md     ← Deployment for each platform


🚀 NEXT STEPS
═══════════════════════════════════════════════════════════════

1. Read START_HERE.txt
2. Copy .env.example to .env.local
3. Add your Firebase credentials
4. Run: npm install && npm run dev
5. Choose a deployment platform from list above
6. Deploy in 2-5 minutes!


📞 SUPPORT
═══════════════════════════════════════════════════════════════

Stuck? Check the guides or GitHub issues:
https://github.com/keelirae/sacred-spiral-flow/issues


═══════════════════════════════════════════════════════════════
Happy deploying! 🎉
═══════════════════════════════════════════════════════════════
`);

// Export for programmatic use
module.exports = { platforms, environmentVariables, files };
