import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router as heroRouter } from './routes/hero.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use('/heroes', cors(), express.json(), heroRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
