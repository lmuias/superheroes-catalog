import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router as heroRouter } from './routes/hero.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use('/heroes', express.json(), heroRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
