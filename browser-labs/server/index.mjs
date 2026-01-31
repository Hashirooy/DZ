import express from 'express';

export function startApiServer(port = 3001) {
  const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
  });

  app.get('/api/data', (req, res) => {
    // TODO(CORS lab): добавь CORS заголовки здесь.
    // Подсказка: Access-Control-Allow-Origin, Access-Control-Allow-Headers
    res.json({
      ok: true,
      time: new Date().toISOString(),
      message: 'Hello from API on :3001'
    });
  });

  app.options('/api/data', (req, res) => {
    // Respond to preflight request with CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.sendStatus(204);
  });

  const server = app.listen(port, () => {
    console.log(`browser-labs API: http://localhost:${port}`);
  });

  return server;
}
