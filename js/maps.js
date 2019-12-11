var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'uk'};
var marker_path = 'https://developers.google.com/maps/documentation/javascript/images/marker_red';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
    'uk': {
        center: {lat: 54.8, lng: -4.6},
        Zoom: 5
    },
    'fr': {
        center: {lat: 46.2, lng: 2.2},
        zoom: 5
    },
    'es': {
        center: {lat: 40.5, lng: -3.7},
        zoom: 5
    },
    'de': {
        center: {lat: 51.2, lng: 10.4},
        zoom: 5
    }

};

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 54.8,
            lng: -4.6
        }
    });
 }

 infoWindow = new google.maps.InfoWindow({
     content: document.getElementById('info-content')
 });

autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (
        document.getElementById('autocomplete')), {
        types: ['(cities)'],
        componentRestrictions: countryRestrict
    });
places = new google.maps.places.PlacesService(map);

autocomplete.addListener('place_changed', onPlaceChanged);

// Add a DOM event listener to react when the user selects a country.
document.getElementById('country').addEventListener(
    'change', setAutocompleteCountry);
}






