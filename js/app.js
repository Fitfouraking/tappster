$(document).ready(function(){
  'use strict';
$('#search-info').hide();
$('#location-beer-list').hide();
$('#missing-beer-table').hide();


//Watering Hole search
  $('#bar-search-button').on("click", function() {
    $('#location-results').html('')
    $('#search-info').show();
    $('#location-beer-list').show();
    searchLocationResults();
  })

//Beer of choice search
  $('#beer-search-button').on("click", function() {
    $('#location-results').html('');
    $('#search-info').show();
    $('#location-beer-list').hide();
    $('#missing-beer-table').hide();
    searchBeerResults();
  });

//Something Missing beer search
  $('#add-beer-input').on("click", function() {
    $('#missing-beer-table').show();
    addBeerSearch();
  });

//ADD Beer to a location's list
  $('#add-beer-button').on("click", function() {
    saveAddedBeerToLocation();
    $('#search-info').show();
  });

  //Remove specific beer from a location's list

  $('#table1').on("click", function(event){
    var beerID = event.target.parentElement.dataset.id;
    removeBeerFromLocation(beerID);
  })

  // //Click a specific Location to see its beer list
  // $('#locale').on("click", function(event) {
  //   var locationID = event.target.html();
  //   renderLocationBeerList(locationID);
  // })

});
