import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
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
    // 👇 Add this section
    allowedHosts: [
      "8ba1b5a4-1c41-4f7d-8829-3b0d5c27d08c-00-1ie15zdiyz15f.pike.replit.dev"
    ],
  },
})
