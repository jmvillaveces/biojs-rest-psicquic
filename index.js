var xhr = require('nets')

var _url = '', _proxy = null, _method = 'query', _params = null;

//Private members
var _fetch = function(url, callback){
    xhr({
        url: url,
        method: 'GET'
    }, 
    callback)
}

var _eval_params = function(params){
    var str = '';
    if(typeof params === 'string'){
        return params;
    }else if(typeof params === 'object'){
        for(var key in params){
            if (params.hasOwnProperty(key)) str += key+'='+params[key]+'&';
        }
    }
    return str;
}

var _createUrl = function(method, query, params){
    
    var paramsStr = ''; 
    if(params !== null)
        paramsStr = '?'+_eval_params(params);
    
    var url = _url+'/'+method+'/'+query+paramsStr;
    url = url.replace('//'+method, '/'+method)
    
    if(_proxy === null) return url;
    
    return _processProxy(url);
}

var _processProxy = function(url){
    if (typeof _proxy === 'function') return _proxy(url);
    
    if(typeof _proxy === 'string') return _proxy +'?url='+url;
    
    return url;
}

//Public members
var psicquicServer = function(){}
    
psicquicServer.url = function(_){
    if (!arguments.length)
        return _url;
    _url = _;
    return psicquicServer;
};

psicquicServer.proxy = function(_){
    if (!arguments.length)
        return _proxy;
    _proxy = _;
    return psicquicServer;
};

psicquicServer.method = function(_){
    if (!arguments.length)
        return _method;
    _method = _;
    return psicquicServer;
};

psicquicServer.params = function(_){
    if (!arguments.length)
        return _params;
    _params = _;
    return psicquicServer;
};

psicquicServer.query = function(query, callback){
    var url = _createUrl(_method, query, _params);
    _fetch(url, callback);
};

psicquicServer.count = function(query, callback){
    var url = _createUrl(_method, query, {format:'count'});
    _fetch(url, callback);
}

module.exports = psicquicServer;