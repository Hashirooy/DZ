import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3002;
const app = express();
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`js-labs: статика на http://localhost:${PORT}`);
  console.log('HTML задания: /closure-loop.html');
  console.log('Node задания запускай отдельно через node js-labs/<file>.mjs');
});
