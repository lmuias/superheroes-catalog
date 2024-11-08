import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

console.log('DB Password:', process.env.DB_PASSWORD);

export const client = new Client({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

await client.connect();