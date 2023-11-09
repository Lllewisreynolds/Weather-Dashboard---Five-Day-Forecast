// API key saved to variable for ease of access

var key = "7db9885d70f5bc0e42c208559c7c142a";

// jQuery function used to retrieve necessary HTMl elements via their id selector

var cityLocEl = $('#cityloc-input');
var searchBtnEl = $('#search-button');
var searchedCitiesEl = $('#searched-cities');

// Array created to store prior city searches inputted by the user

var searchedCitiesHistoryEl = [];

function getCoOrdinates(city) {
    var fetchGeoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
    fetch(fetchGeoAPI)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
    getForecast(data[0].lat, data[0].lon);
    })
}

function getForecast(lat, lon) {
    var fetchAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    fetch(fetchAPI)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
    console.log(data);
    })
}

// temporary function passed - will incorporate a more all-encompassing one later as smaller tasks/functions are still being created
searchBtnEl.on("click", function(event){
    event.preventDefault()
    var city = document.getElementById("cityloc-input").value
    getCoOrdinates(city)
    // localStorage.setItem(, city);
    // console.log();
    // var searchedCitiesHistoryEl.
    // searchedCitiesEl


 });

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city