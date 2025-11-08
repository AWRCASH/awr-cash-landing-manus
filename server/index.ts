// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Caminho da pasta de arquivos estáticos (gerada pelo Vite)
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "../public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Servir os arquivos do front-end
  app.use(express.static(staticPath));

  // Redirecionar qualquer rota para o index.html (SPA)
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => {
    console.log(`✅ Servidor rodando em http://localhost:${port}/`);
  });
}

startServer().catch((err) => {
  console.error("❌ Erro ao iniciar servidor:", err);
  process.exit(1);
});