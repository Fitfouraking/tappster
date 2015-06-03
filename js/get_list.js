// var TappsterApp = TappsterApp || {};

// TappsterApp.List = (function() {

// });


var locationNamePath = "http://localhost:3000/locationsname?name="
var listLocationsPath = "http://localhost:3000/listlocations/"
var locationBeerPath = "http://localhost:3000/beers/"

var beerNamePath = "http://localhost:3000/beername?name="
var listBeersPath = "http://localhost:3000/listbeers/"
var beerLocationPath = "http://localhost:3000/locations/"

//search by location input

  function searchLocationAjax(path) {
    console.log(path)
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      $('#search-title-name').html("<h2>"+ data.name + "</h2>");
      var path = listLocationsPath + data.id;
      findMatchingBeerId(path);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function findMatchingBeerId(path) {
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      $('tbody').html('');
      $('#location-results').html('');
      data.forEach(function(beer) {
        showBeersAjax(beer.id);
      })
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function showBeersAjax(beer_id) {
    $.ajax({
      url: locationBeerPath + beer_id,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      renderBeerTable(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function renderBeerTable(beer) {
    $('#table1').append("<tr>" + "<td>" + beer.name + "</td>" +
                      "<td>" + beer.brewery + "</td>" +
                      "<td>" + beer.style + "</td>" +
                      "<td>" + beer.abv + "</td>" +
                      "<td>" + "<button id='beer'" + beer.id + " type='button' class='btn btn-default btn-sm'>" +
                        "<span class='glyphicon glyphicon-remove' aria-hidden='true'>" +
                        "</span>" +
                        "</button>" + "</tr>")

  }



//search by beer input

  function searchBeerAjax(path) {
    console.log(path)
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      $('#search-title-name').html("<h2>"+ data.name + "</h2>");
      var path = listBeersPath + data.id;
      findMatchingLocationId(path);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function findMatchingLocationId(path) {
      $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      $('tbody').html('');
      $('#location-results').html('');
      data.forEach(function(location) {
        showLocationsAjax(location.id);
      })
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function showLocationsAjax(location_id) {
     $.ajax({
      url: beerLocationPath + location_id,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      renderLocationsList(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  function renderLocationsList(location) {
    console.log(location);
    $('#location-results').append("<li>" + "<ul>" + location.name + "</ul>" + "</li>")
  }


//Search for beer on a location's page and add that to the list of beers on tap


    function addBeerAjax(path) {
    console.log(path)
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(beer) {
      $('#add-beer-results').html("<td>" + beer.name + "</td>" +
                      "<td>" + beer.brewery + "</td>" +
                      "<td>" + beer.style + "</td>" +
                      "<td>" + beer.abv + "</td>")
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  // function addMissingBeerToLocation() {

  // }
