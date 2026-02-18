import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    server: {
      host: true,
      port: parseInt(process.env.PORT || "5174"),
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        ".vercel.app",
        ".netlify.app",
        ".render.com",
        ".github.dev"
      ],
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 5174,
      },
    },
    build: {
      target: "esnext",
      minify: "terser",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ["firebase/app", "firebase/auth", "firebase/firestore"],
            chart: ["chart.js", "react-chartjs-2"],
            recharts: ["recharts"],
          },
        },
      },
    },
    preview: {
      port: 4173,
      host: true,
    },
    plugins: [
      react(),
      isDev ? componentTagger() : undefined,
    ].filter(Boolean) as any,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
  };
});
