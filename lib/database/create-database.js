/*eslint no-console: off, quotes:off */
const client = require('../lib/database-client');

client.query(`
    CREATE TABLE IF NOT EXISTS categories(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS rocks(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        category_id INTEGER NOT NULL REFERENCES categories(id);
        description VARCHAR(256)
    );
`)
    .then(() => console.log('database success'),
        err => console.log(err)

    )
    .then(() => client.end());
