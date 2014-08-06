//Require chai assert for test
var assert = require('chai').assert

//Require PSICQUIC client 
var psicquic = require('../')

var intActClient = psicquic('http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search');

describe('Test PSICQUIC client', function () {
    
    it('Exists and is called psicquic', function () {
	   assert.isDefined(psicquic);
    })
    
    it('Exists and is called intActClient', function () {
	   assert.isDefined(intActClient);
    })
    
    
    it('It counts human interactions', function (done) {
        
        intActClient.countByQuery('species:human', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        });
    })
    
    it('It counts interactions for interactor brca2_human', function(done){
        
        intActClient.countByInteractor('brca2_human', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        }); 
    })
    
    it('It counts interactions for interaction IM-16519-*', function(done){
         
        intActClient.countByInteraction('IM-16519-*', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        });
    })
    
    
    it('It has human interactions', function (done) {
        
        intActClient.getByQuery('species:human', 'tab25', 1, 1, function(err, resp, body){
            assert.isString(body);
            done();
        });
    })
    
    it('It has interactions for interactor brca2_human', function(done){
        
        intActClient.getByInteractor('brca2_human', 'tab25', 1, 1, function(err, resp, body){
            assert.isString(body);
            done();
        }); 
    })
    
    it('It has interactions for interaction IM-16519-*', function(done){
         
        intActClient.getByInteraction('IM-16519-*', 'tab25', 1, 1, function(err, resp, body){
            assert.isString(body);
            done();
        });
    })
});