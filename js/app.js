$(document).ready(function(){
  'use strict';

  $('#bar-search-button').on("click", function() {
    var barSearch = $('#bar-search-input').val()
    var path = locationNamePath + barSearch
    searchLocationAjax(path);
    $('#add-beer-results').html("");
  })


  $('#beer-search-button').on("click", function() {
    $('#add-beer-results').html();
    var beerSearch = $('#beer-search-input').val()
    var path = beerNamePath + beerSearch
    searchBeerAjax(path);
  })

  $('#add-beer-input').on("click", function() {
    $('#add-beer-results').html('');
    var addBeer = $('#new-beer-name').val()
    var path = beerNamePath + addBeer
    addBeerAjax(path);
  })

//   $('#add-beer-button').on("click", function() {
//     addMissingBeerToLocation();
//   })

});
