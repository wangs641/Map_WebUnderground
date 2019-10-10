function getJSON(path, callback) {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', path, true);
    req.setRequestHeader('Accept', 'application/json');
    req.onload = function() {
        callback(req.response);
    };
    req.send();
}

getJSON('https://icanhazdadjoke.com/', function(joke){
 console.log('Got joke', joke); 
});



///////////////////////////

function printJoke(jokeData){
    var jokeEl = document.querySelector('.joke');
    jokeEl.innerText = jokeData.joke;
    
}
function loadRandomJoke(event){
  
    getJSON('https://icanhazdadjoke.com/',printJoke);
    
}




window.setInterval(loadRandomJoke,5000);
window.setTimeout(function() {} , 5000); 
