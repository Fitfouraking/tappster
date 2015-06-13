$(document).ready(function() {
  'use strict';
  $('#search-info').hide();
  $('#location-beer-list').hide();
  $('#missing-beer-table').hide();


  //Watering Hole search
  $('#bar-search-button').on("click", function() {
    $('#location-results').html('');
    $('#missing-beer-table').hide();
    $('#new-beer-name').val('');
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
    $('#add-beer-results').html('');
    addBeerSearch();
    $('#missing-beer-table').show();

  });

  //ADD Beer to a location's list
  $('#add-beer-button').on("click", function() {
    saveAddedBeerToLocation();
    $('#missing-beer-table').hide();
    $('#new-beer-name').val('');
  });

  //Remove specific beer from a location's list

  $('#table1').on("click", function(event) {
    var beerID = event.target.parentElement.dataset.id;
    removeBeerFromLocation(beerID);
  });

  //Click a specific Location to see its beer list
  $('#location-results').on("click", $('#locale'), function(event) {
    $('#location-results').show();
    var locationID = $(event.target).attr('data-id');
    renderLocationBeerList(locationID);
    $('#location-results').hide();
    $('#location-beer-list').show();

  });
});
