#!/usr/bin/env node

/**
 * Quick Start Setup Script
 * Guides users through initial project setup
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("\n🚀 Sacred Spiral Flow - Setup Guide\n");
  console.log("=====================================\n");

  // Check if .env.local exists
  const envPath = path.join(__dirname, ".env.local");
  const envExamplePath = path.join(__dirname, ".env.example");

  if (!fs.existsSync(envPath)) {
    console.log("📝 Creating .env.local from template...\n");
    if (fs.existsSync(envExamplePath)) {
      fs.copyFileSync(envExamplePath, envPath);
      console.log("✅ .env.local created!\n");
    }
  } else {
    console.log("✅ .env.local already exists\n");
  }

  // Ask for setup preference
  console.log("How would you like to set up?\n");
  console.log("1. Local Development (npm run dev)");
  console.log("2. Production Build (npm run build)");
  console.log("3. Deploy to Vercel");
  console.log("4. Deploy to Netlify");
  console.log("5. Skip (manual setup)\n");

  const choice = await question("Select option (1-5): ");

  switch (choice.trim()) {
    case "1":
      console.log("\n📦 Starting development server...\n");
      console.log("Run: npm run dev\n");
      console.log("Then visit: http://localhost:5176\n");
      break;

    case "2":
      console.log("\n🏗️  Building for production...\n");
      console.log("Run: npm run build\n");
      console.log("Output will be in: dist/\n");
      break;

    case "3":
      console.log("\n📤 Vercel Deployment\n");
      console.log("1. Push to GitHub:");
      console.log("   git push origin main\n");
      console.log("2. Visit: https://vercel.com");
      console.log("3. Import your repository");
      console.log("4. Add environment variables from .env.local");
      console.log("5. Click Deploy\n");
      break;

    case "4":
      console.log("\n📤 Netlify Deployment\n");
      console.log("1. Push to GitHub:");
      console.log("   git push origin main\n");
      console.log("2. Visit: https://netlify.com");
      console.log("3. Click 'New site from Git'");
      console.log("4. Select your repository");
      console.log("5. Add environment variables from .env.local");
      console.log("6. Click Deploy\n");
      break;

    case "5":
      console.log("\n👋 Manual Setup\n");
      console.log("Next steps:");
      console.log("1. Edit .env.local with your Firebase credentials");
      console.log("2. Run: npm install");
      console.log("3. Run: npm run dev\n");
      break;

    default:
      console.log("\n❓ Invalid option\n");
  }

  console.log("📚 For more help, see SETUP_GUIDE.md\n");
  console.log("Happy coding! 🎉\n");

  rl.close();
}

main().catch(console.error);
