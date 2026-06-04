import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    // SPA fallback: serve index.html for client routes (fixes refresh on /book-a-demo etc.)
    {
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split("?")[0] ?? "";
          const isRoute =
            req.method === "GET" &&
            !url.startsWith("/api") &&
            !url.includes(".") &&
            !url.startsWith("/@");
          if (isRoute) {
            req.url = "/index.html";
          }
          next();
        });
      },
      configurePreviewServer(server, config) {
        const outDir = path.resolve(config.root, config.build?.outDir ?? "dist");
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split("?")[0] ?? "";
          const isRoute =
            req.method === "GET" &&
            !url.startsWith("/api") &&
            !url.includes(".");
          if (isRoute) {
            const file = path.join(outDir, "index.html");
            if (fs.existsSync(file)) {
              res.setHeader("Content-Type", "text/html");
              res.end(fs.readFileSync(file, "utf-8"));
              return;
            }
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
