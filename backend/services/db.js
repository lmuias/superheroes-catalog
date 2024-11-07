import pkg from 'pg';
const { Client } = pkg;

export const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  database: 'postgres',
});

await client.connect();