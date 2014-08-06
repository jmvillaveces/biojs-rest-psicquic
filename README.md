biojs-rest-psicquic
===================

PSICQUIC client

```js
var psicquic = require('biojs-rest-psicquic')

var intActClient = psicquic('http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search')

intActClient.countByQuery('species:human', function(err, resp, body){
    console.log(body)
})


intActClient.getByQuery('species:human', 'tab25', 1, 1, function(err, resp, body){
    console.log(body)
})
```


