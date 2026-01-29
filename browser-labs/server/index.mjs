import express from 'express';

export function startApiServer(port = 3001) {
  const app = express();

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
    // TODO(CORS lab): ответь на preflight и добавь CORS заголовки.
    res.sendStatus(204);
  });

  const server = app.listen(port, () => {
    console.log(`browser-labs API: http://localhost:${port}`);
  });

  return server;
}
