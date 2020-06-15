var queryUrl = ""

d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  tourlist(data.top10_tour);
  createMap(data.top10_bar_location)
});

function tourlist(citydata) {

var select_data = d3.select("tbody");

select_data.html("");
  
  // append stats to the list

citydata.forEach((city) => {
    var tourdata = select_data.append("tr");
    Object.values(filteredDataRow).forEach((cell) => {
        var selectCell = selectRow.append("td");
        selectCell.text(cell);
    });
  });
}


function createMap(top10bars) {

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);

var location = ;

for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
      .addTo(myMap);
  }
}

