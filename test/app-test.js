//const dotenv = require('dotenv');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use = (chaiHttp);
const { assert }  = chai;


describe('table of rocks', () => {

    it('gets a rock from table', () => {
        /*Pass app to chai.request, which will start (call.listen()) and auto close server after request*/
        return chai.request(app)
        //method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, rock);
            
            });
    });
    
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

    

});



