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

<<<<<<< HEAD
  // Caminho ajustado conforme sua estrutura de pastas
  const staticPath = path.resolve(__dirname, "../public");
=======
  // Caminho da pasta de arquivos estáticos gerada pelo Vite
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
>>>>>>> 2f3260686d7e9b17d0e6f187c8999318c580b426

  // Servir os arquivos do front-end
  app.use(express.static(staticPath));

<<<<<<< HEAD
=======
  // Redirecionar qualquer rota pro index.html (SPA)
>>>>>>> 2f3260686d7e9b17d0e6f187c8999318c580b426
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => {
<<<<<<< HEAD
    console.log(`✅ Server running on http://localhost:${port}/`);
=======
    console.log(`Servidor rodando em http://localhost:${port}/`);
>>>>>>> 2f3260686d7e9b17d0e6f187c8999318c580b426
  });
}

startServer().catch((err) => {
<<<<<<< HEAD
  console.error("❌ Error starting server:", err);
=======
  console.error("Erro ao iniciar servidor:", err);
>>>>>>> 2f3260686d7e9b17d0e6f187c8999318c580b426
  process.exit(1);
});
