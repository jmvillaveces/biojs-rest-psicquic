//PSICQUIC client
var xhr = require('nets');

var client = function(serviceUrl){
    
    var method = 'GET';
    
    var fetch = function(url, callback){
        xhr({
            url: url,
            method: method
        }, 
        callback);
    }
    
    var cli = {};
    
    cli.count = function(query, callback){
        fetch(serviceUrl+'/'+query+'?format=count', callback);
    }
    
    return cli;
};

module.exports = client;
