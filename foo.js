var xhr = require('nets');
xhr({
    body: '{"foo": "bar"}',
    url: "http://www.ebi.ac.uk/Tools/webservices/psicquic/intact/webservices/current/search/query/species:human?format=count",
    method: "POST",
    headers: {
    "Content-Type": "application/text"
    }
}, function (err, resp, body) {
    console.log('body', body)
    //console.log(err, resp, body);
});