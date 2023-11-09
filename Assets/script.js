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

searchBtnEl.on("click", function(event){
    event.preventDefault()
    var city = document.getElementById("cityloc-input").value
    getCoOrdinates(city)
    localStorage.setItem("searchedCities", city);
    console.log(localStorage.getItem('searchedCities'));
    // localStorage.getItem("searchedCities"));
    // var searchedCitiesEl = document.getElementById('searched-cities');
    // searchedCitiesEl.innerHTML ='';
    // var pastCityBtnEl = document.createElement("button");
    // pastCityBtnEl.classList.add("btn", "btn-outline-secondary", "my-2");
    // pastCityBtnEl.textContent = `${searchedCities.city}`;
    // searchedCitiesEl.appendChild(pastCityBtnEl);
});

function displayPastCities() {

    var searchedCities = localStorage.getItem("searchedCities");
    // Is the following local re-declaration necessary?
    var searchedCitiesEl = document.getElementById('searched-cities');
    searchedCitiesEl.innerHTML ='';

    for (i = 0; i < searchedCities.length; i++) {

    var pastCityBtnEl = document.createElement("button");
    pastCityBtnEl.classList.add("btn", "btn-outline-secondary", "my-2");
    pastCityBtnEl.textContent = `${searchedCities.city}`;
    searchedCitiesEl.appendChild(pastCityBtnEl);

    }

    return;
    
}

displayPastCities();

// Will this work better?:

// searchBtnEl.on("click", function(event){
//     event.preventDefault()
//     var city = document.getElementById("cityloc-input").value
//     getCoOrdinates(city);
//     var searchedCities = JSON.parse(localStorage.getItem("searchedCities"));
//     searchedCities.push(city);
//     localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
//     console.log(localStorage.getItem('searchedCities'));
// });


// function displayPastCities() {

// var searchHistory = localStorage.getItem('searchedCities');
//     if (searchHistory) {
//         searchHistory = JSON.parse(searchHistory);
//     } else {
//         searchHistory = searchedCitiesHistory;
//     }
//     searchedCitiesHistory.push(city);
//     localStorage.setItem("searchedCities", JSON.stringify(searchedCitiesHistory));
//     console.log(searchedCities);
//     searchedCitiesEl.innerHTML ='';

//     for (i = 0; i < searchedCitiesHistory.length; i++) {

//     var pastCityBtnEl = document.createElement("button");
//     pastCityBtnEl.classList.add("btn", "btn-outline-secondary", "my-2");
//     pastCityBtnEl.textContent = `${searchedCitiesHistory[i]}`;
//     searchedCitiesEl.appendChild(pastCityBtnEl);

//     }

//     return;
    
// }

// displayPastCities();


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city