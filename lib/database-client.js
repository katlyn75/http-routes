/*eslint no-console: off*/
const dotenv = require('dotenv');
dotenv.config();

const pg = require('pg');
const Client = pg.Client;

const DATABASE_URL = process.env.DATABASE_URL = 'postgres://localhost:5432/rocks';

const client = new Client(DATABASE_URL);
client.connect()
    .then(() => console.log('connected to db', DATABASE_URL))
    .catch(err => {
        console.log('connection error', err);

    });

client.on('error', err => {
    console.error('DATABASE ERROR', err);
});


module.exports = client;