const dotenv = require('dotenv');
dotenv.config();

const pg = require('pg');
const Client = pg.Client;

const DATABASE_URL = process.env.DATABASE_URL = 'postgres://localhost:5432/rocks';

const client = new Client(DATABASE_URL);

client.connect();

client.on();


module.exports = client;