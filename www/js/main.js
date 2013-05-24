function load_map(latidute,longitude){
    
		var map = L.map('map').setView([40.7534388, -73.9901187], 15);
		var marker = L.marker([40.7534388, -73.9901187]).addTo(map).bindPopup("AlleyNYC").openPopup();
		var bat1 = L.marker([40.762711,-73.9739]).addTo(map).bindPopup("Paul's first apartment");


		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18
			
		}).addTo(map);



		function onLocationFound(e) {
			var radius = e.accuracy / 2;

			L.marker(e.latlng).addTo(map)
				.bindPopup("You are within " + radius + " meters from this point").openPopup();

			L.circle(e.latlng, radius).addTo(map);
		}

		function onLocationError(e) {
			alert(e.message);
		}

		map.on('locationfound', onLocationFound);
		<!-- map.on('locationerror', onLocationError); -->

		map.locate({setView: true, maxZoom: 16});
}



load_map(1,2);



// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);    
/*     showAlert(); */
}

// onSuccess Geolocation
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    
    console.log("geo location is on!");
    
    load_map(position.coords.latitude, position.coords.longitude);    
    
    navigator.notification.alert(
      'You are the winner!',  // message
      alertDismissed,         // callback
      'Game Over',            // title
      'Done'                  // buttonName
    );
    
/*     var map = L.map('map').setView([40.7534388, -22.9901187], 16); */
    
/*
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          +                                   position.timestamp          + '<br />';
*/
}