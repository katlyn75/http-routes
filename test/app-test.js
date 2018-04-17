const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use = (chaiHttp);
const { assert }  = chai;
const app = require('../lib/app');


describe('table of rocks', () => {

    it('gets a rock from the table on GET /', () => {
        /*Pass app to chai.request, which will start (call.listen()) and auto close server after request*/
        return chai.request(app)
        //method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'rock');
            
            });
    });

    it('returns specific rock on GET /rock', () => {
        return chai.request(app)
            .get('/rock')
            .then(response => {
                assert.deepEqual(response.text, {
                    
                    name: 'lapis',
                    color: 'cobalt',
                    category_id: 1
                });
            });
    });
    
});

//puts rock into list
/*before(() => client.query('INSERT INTO rocks'));


    let amethyst = {
        name: 'amethyst',
        color: 'purple',
        category_id: 1
    };

    let flourite = {
        name: 'flourite',
        color: 'blue',
        category_id: 1
    };*/

    




