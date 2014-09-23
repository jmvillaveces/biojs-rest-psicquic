//Require chai assert for test
var assert = require('chai').assert

//Require PSICQUIC client 
var psicquic = require('../')



describe('Test PSICQUIC client', function () {
    
    it('Exists and is called psicquic', function () {
	   assert.isDefined(psicquic);
    })
    
    it('Points to IntAct', function () {
        
        var url = 'http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search/';
        psicquic.url(url);
        
        assert.equal(url, psicquic.url());
    })
    
    it('It counts human interactions', function (done) {
        
        psicquic.count('species:human', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        });
    })
    
    it('It counts human interactions by interactor', function(done){
        
        psicquic.method('interactor').count('brca2_human', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        }); 
    })
    
    it('It counts interactions by interaction IM-16519-*', function(done){
         
        psicquic.method('interaction').count('IM-16519-*', function(err, resp, body){
            assert.isNumber(+body);
            assert.operator(+body, '>', 0);
            done();
        });
    })
    
    it('It has human interactions', function (done) {
        
        psicquic.method('query').params({firstResult:1, maxResults:1}).query('species:human', function(err, resp, body){
            assert.isString(body);
            done();
        });
    })
    
    it('It has interactions for interactor brca2_human', function(done){
        
        psicquic.method('interactor').query('brca2_human', function(err, resp, body){
            assert.isString(body);
            done();
        }); 
    })
    
    it('It has interactions for interaction IM-16519-*', function(done){
         
        psicquic.method('interaction').query('IM-16519-*', function(err, resp, body){
            assert.isString(body);
            done();
        }); 
    })
    
    it('Proxy points to http://localhost/Interaction-Atlas/dist/proxy', function(){
        var proxy = 'http://localhost/Interaction-Atlas/dist/proxy';
        psicquic.proxy(proxy);
        
        assert.equal(proxy, psicquic.proxy());
    })
});