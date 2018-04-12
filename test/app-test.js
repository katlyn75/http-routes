const dotenv = require('dotenv');
const chai = require('chai');
const chaiHttp = require('chai-http');

const client = require('./lib/database-client');
const app = require('/lib/app');

const assert = chai;
chai.use = chai(http);

describe('table of rocks', () => {

    //puts rock into list
    before(() => client.query('INSERT INTO rocks'));

    let lapis = {
        name: 'lapis',
        color: 'cobalt',
        category_id: 1
    };

    let amethyst = {
        name: 'amethyst',
        color: 'purple',
        category_id: 1
    };

    let flourite = {
        name: 'flourite',
        color: 'blue',
        category_id: 1
    };

    
    it('saves a rock to table', () => {
        return chai.request(app);
        assert.equal(rock.lapis.id);
    });

});



