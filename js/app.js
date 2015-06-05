$(document).ready(function(){
  'use strict';

//Watering Hole search
  $('#bar-search-button').on("click", function() {
    $('#location-results').html('')
    $('#table1').html('');
    searchLocationResults();
  })

//Beer of choice search
  $('#beer-search-button').on("click", function() {
    $('#location-results').html('');
    searchBeerResults();
  });

//Something Missing beer search
  $('#add-beer-input').on("click", function() {
    addBeerSearch();
  });

//ADD Beer to a location's list
  $('#add-beer-button').on("click", function() {
    saveAddedBeerToLocation();
  });

  //Remove specific beer from a location's list

  $('#table1').on('click', function(event){
    var beerID = event.target.parentElement.dataset.id;
    removeBeerFromLocation(beerID);
  })

});
