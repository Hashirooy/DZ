import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { startApiServer } from './server/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_PORT = 3000;
const API_PORT = 3001;

const app = express();
app.use(express.static(__dirname));

app.listen(STATIC_PORT, () => {
  console.log(`browser-labs: статика на http://localhost:${STATIC_PORT}`);
  console.log('Открой /index.html для списка задач.');
});

startApiServer(API_PORT);
