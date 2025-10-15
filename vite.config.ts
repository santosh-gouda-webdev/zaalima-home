import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
    allowedHosts: [
      ".replit.dev", // ✅ allow any Replit subdomain
      "localhost",
    ],
  },
})
