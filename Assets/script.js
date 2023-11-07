// API key saved to variable for ease of access

var key = "7db9885d70f5bc0e42c208559c7c142";

// addeventlistener (on) - jquery - button



function getCoOrdinates(city) {
    console.log(city);
    var fetchGeoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
    fetch(fetchGeoAPI)
    .then(function(response){
    console.log(response);
    return response.json();
    })
    .then(function(data){
    console.log(data);
    getForecast(data[0].lat, data[0].lon);
    })
}

function getForecast(lat, lon) {
    var fetchAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    fetch(fetchAPI)
    .then(function(response){
    console.log(response);
    return response.json();
    })
    .then(function(data){
    console.log(data);
    })
}

getCoOrdinates("Fukuoka");