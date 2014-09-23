biojs-rest-psicquic
===================

PSICQUIC client

'''
var psicquic = require('biojs-rest-psicquic'), url = 'http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search';

psicquic.url(url).count('species:human', function(err, resp, body){
    console.log(body);
});

psicquic.params({firstResult:1, maxResults:5}).query('species:human', function(err, resp, body){
    console.log(body);
});
'''



