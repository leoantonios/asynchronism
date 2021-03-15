let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api, true);
    xhttp.onreadystatechange = function( event ){
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error '+ url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(api, function(err, response1){
    if (err) return console.error(err);
    fetchData(api + response1.results[0].id, function(err2, response2){
        if (err2) return console.error(err2);
        fetchData(response2.origin.url, function(err3, response3){
            if (err3) return console.error(err3);
            console.log(response1.info.count);
            console.log(response2.name);
            console.log(response3.dimension);
        });
    })
})