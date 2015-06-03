$(document).ready(function(){
  'use strict';

  $('#bar-search-button').on("click", function() {
    var barSearch = $('#bar-search-input').val()
    var path = locationNamePath + barSearch
    searchLocationAjax(path);
  })


  $('#beer-search-button').on("click", function() {
    var beerSearch = $('#beer-search-input').val()
    var path = beerNamePath + beerSearch
    searchBeerAjax(path);
  })
});
