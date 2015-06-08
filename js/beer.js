
var currentBeer;
var currentLocation;
//setting different routes to global variables

var locationNamePath = "http://localhost:3000/locationsname?name="
var listLocationsPath = "http://localhost:3000/listlocations/"
var locationBeerPath = "http://localhost:3000/beers/"

var beerNamePath = "http://localhost:3000/beername?name="
var listBeersPath = "http://localhost:3000/listbeers/"
var beerLocationPath = "http://localhost:3000/locations/"

//search by location input

  function searchLocationResults(path) {
    $('#table1').html('');
    var barSearch = $('#bar-search-input').val();
    var path = locationNamePath + barSearch;
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      $('#search-title-name').html("<h3 data-id='" + data.id + "'>"+ data.name + "</h3>");
      currentLocation = data.id
      data.beers.forEach(function(beer) {
        $('#table1').append("<tr>" + "<td>" + beer.name + "</td>" +
                      "<td>" + beer.brewery + "</td>" +
                      "<td>" + beer.style + "</td>" +
                      "<td>" + beer.abv + "</td>" +
                      "<td>" + "<button data-id=" + beer.id + " type='button' class='btn btn-default btn-sm'>" +
                        "<span class='glyphicon glyphicon-remove' aria-hidden='true'>" +
                        "</span>" +
                        "</button>" + "</tr>")
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }




//search by beer input

  function searchBeerResults() {
    var beerSearch = $('#beer-search-input').val();
    var path = beerNamePath + beerSearch;
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      console.log(data);
      $('#search-title-name').html("<h3>"+ data.name + "</h3>");
      data.locations.forEach(function(location) {
        $('#location-results').append("<li class='list-group-item' data-type=" + location.id + " id='locale'>" + location.name + "</ul>")
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }


//Search for a beer on the location's page and get the return of the searched beer in a table, with the option to add that beer to the location's list of beers on tap

    function addBeerSearch(path) {
    var addBeer = $('#new-beer-name').val();
    var path = beerNamePath + addBeer;
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
      cache: false
    })
    .done(function(beer) {
      $('#add-beer-results').html("<td>" + beer.name + "</td>" +
                                  "<td>" + beer.brewery + "</td>" +
                                  "<td>" + beer.style + "</td>" +
                                  "<td>" + beer.abv + "</td>");
      currentBeer = beer.id;
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }


//Actually save the beer added by user in the List table on the backend

  function saveAddedBeerToLocation() {
    var path = "http://localhost:3000/locations/" + currentLocation + "/addbeer?beer=" + currentBeer;
    $.ajax({
      url: path,
      type: 'POST',
      dataType: 'json'
    })
    .done(function() {
      $('#table2').html('');
      searchLocationResults();
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }


//Delete a beer from a location's list

  function removeBeerFromLocation(beerID) {
    $.ajax({
      url: "http://localhost:3000/location/" + currentLocation + "/removebeer?beer=" + beerID,
      type: 'DELETE',
      dataType: 'json',
    })
    .done(function() {
      // console.log("success");
      setTimeout(function() {searchLocationResults();}, 500);
      ;
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

