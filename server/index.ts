import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Caminho ajustado conforme sua estrutura de pastas
  const staticPath = path.resolve(__dirname, "../public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}/`);
  });
}

startServer().catch((err) => {
  console.error("❌ Error starting server:", err);
  process.exit(1);
});
