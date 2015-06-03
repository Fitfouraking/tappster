var TappsterApp = TappsterApp || {};

TappsterApp.Beer = (function() {

  $beerName = $('newBeerName'),
  $brewery = $('newBreweryName'),
  $beerStyle = $('newBeerStyle'),
  $abv = $('ABV'),
  beersURL = 'http://localhost:3000/beers';

  function Beer(name, brewery, style, abv) {
    this.name = name;
    this.brewery = brewery;
    this.style = style;
    this.abv = abv;
  };

  Beer.create = function(){
    var beerData =
  }



})
