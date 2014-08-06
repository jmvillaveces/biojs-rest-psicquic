//PSICQUIC client
var xhr = require('nets')

var client = function(serviceUrl){
    
    //Private members
    var _fetch = function(url, callback){
        xhr({
            url: url,
            method: 'GET'
        }, 
        callback)
    }
    
    var _createUrl = function(queryType, query, format, firstResult, maxResults){
        var url = serviceUrl+'/'+queryType+'/'+query+'?format='+format+'&firstResult='+firstResult+'&maxResults='+maxResults
        return url.replace('//'+queryType, '/'+queryType)
    }
    
    var _get = function(queryType, query, format, firstResult, maxResults, callback){
        var url = _createUrl(queryType, query, format, firstResult, maxResults)
        _fetch(url, callback)
    }
    
    var _count = function(queryType, query, callback){
        _get(queryType, query, 'count', 0, 0, callback)
    }
    
    //Public members 
    var cli = {}
    
    //count
    cli.countByQuery = function(query, callback){
        _count('query', query, callback)
    }

    cli.countByInteractor = function(query, callback){
        _count('interactor', query, callback)
    }

    cli.countByInteraction = function(query, callback){
        _count('interaction', query, callback)
    }
    
    //get by
    cli.getByQuery = function(query, format, firstResult, maxResults, callback){
        _get('query', query, format, firstResult, maxResults, callback)
    }

    cli.getByInteractor = function(query, format, firstResult, maxResults, callback){
        _get('interactor', query, format, firstResult, maxResults, callback)
    }

    cli.getByInteraction = function(query, format, firstResult, maxResults, callback){
        _get('interaction', query, format, firstResult, maxResults, callback)
    }
    
    return cli
};

module.exports = client
