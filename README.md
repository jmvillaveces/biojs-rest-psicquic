# biojs-rest-psicquic

A JavaScript library to query [Psicquic servers] (https://github.com/MICommunity/psicquic)

## Getting Started

### Installing

In order to get started, you'll want to install biojs-rest-psicquic with npm.

```
npm install biojs-rest-psicquic
```

### Working with biojs-rest-psicquic

First require biojs-rest-psicquic and set the server url to query.

```
var psicquic = require('biojs-rest-psicquic'), 
    url = 'http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search';
    
    psicquic.url(url);
```

Then simply set the query parameters and process the responce 

```
psicquic.params({firstResult:1, maxResults:5}).query('species:human', function(err, resp, body){
    console.log(body);
});
```

To get the number of interactions in a given query use the count method

```
psicquic.count('species:human', function(err, resp, body){
    console.log(body);
});
```
