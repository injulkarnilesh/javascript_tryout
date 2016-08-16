'use strict';

(function (argument) {
	var map = L.map('bookmap');	
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 15, attribution: osmAttrib});
	map.addLayer(osm);

	setDefaultLocation(); //default location because locationerror even not work in ff and ie
	
	//var marker = L.marker([18.572289, 73.878572]).addTo(map);
	//marker.bindPopup("<b>Hello there</b><br><a href='http://www.google.com'>Come home</a>");

	map.locate({setView : true})
	.on('locationfound', function(e){
		console.log('location allowed');
		var user_marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
		var user_circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                weight: 1,
                color: 'blue',
                fillColor: '#cacaca',
                fillOpacity: 0.2
            });
        map.addLayer(user_marker);
        map.addLayer(user_circle);
	})
	.on('locationerror', function(e){
		console.log('location can not be known');
		setDefaultLocation();
	});
	
	map.on('viewreset', function(e){
		console.log('viewreset' + map.getBounds());
	});

	map.on('moveend', function() {
		console.log('moveend' + map.getBounds());
	});
	
	map.on('click', function(mouseEvent) {
		console.log(mouseEvent.latlng);
	});

	// var osmGeocoder = new L.Control.OSMGeocoder();
 //    map.addControl(osmGeocoder);

	function setDefaultLocation() {
		map.setView(new L.LatLng(18.572289, 73.878572), 12);	
	}

	/* Search location button */
	var geocoder = new google.maps.Geocoder();
	function googleGeocoding(text, callResponse)
	{
		geocoder.geocode({address: text}, callResponse);
	}
	function filterJSONCall(rawjson)
	{
		var json = {},
			key, loc, disp = [];
		for(var i in rawjson)
		{
			key = rawjson[i].formatted_address;
			
			loc = L.latLng( rawjson[i].geometry.location.lat(), rawjson[i].geometry.location.lng() );
			
			json[ key ]= loc;	//key,value format
		}
		return json;
	}
	var searchControl = new L.Control.Search({
		callData: googleGeocoding,
		filterJSON: filterJSONCall,
		markerLocation: true,
		autoType: false,
		autoCollapse: true,
		minLength: 2,
		zoom: 10
	});
	searchControl.on('search_locationfound', function(event){
		console.log(event.latlng);
	});
	searchControl.on('search_collapsed', function(){
		console.log('serach collapsed');
	});
	map.addControl(searchControl);
	

})();
