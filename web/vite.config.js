import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true,
    allowedHosts: [
      "localhost",
      ".ngrok-free.app", // ✅ sab ngrok domains allow ho jaenge
    ],
  },
});
