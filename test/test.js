//Require chai assert for test
var assert = require('chai').assert

//Require PSICQUIC client 
var psicquic = require('../')

describe('Count human interactions in IntAct', function () {
    
    it("Exists and is called psicquic", function () {
	   assert.isDefined(psicquic);
    })
    
    
    var intActClient = psicquic('http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search/query');
    
    it("Exists and is called intActClient", function () {
	   assert.isDefined(intActClient);
    })
    
    
    it("It has human interactions", function () {
        
        intActClient.count('species:human', function(err, xhr, count){
            console.log('hola');
            console.log(err, xhr,  count);
        });
        
    })
    
    
});