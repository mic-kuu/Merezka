(function ($) {
			// map button toggle
			$( ".gmap-btn" ).click(function(){
				$( "#map-btn1" ).toggleClass( "btn-show", "btn-hide", 1000 );
				$( "#map-btn1" ).toggleClass( "btn-hide", "btn-show", 1000 );
				$( "#map-btn2" ).toggleClass( "btn-hide", "btn-show", 1000 );
				$( "#map-btn2" ).toggleClass( "btn-show", "btn-hide", 1000 );
				$( "#map-btn2" ).toggleClass( "close-map-button", "open-map-button", 1000 );
				$( "#map-btn2" ).toggleClass( "open-map-button", "close-map-button", 1000 );
				$( "#map" ).toggleClass( "close-map", "open-map", 1000 );
				$( "#map" ).toggleClass( "open-map", "close-map", 1000 );
				return false;
			});

			var folsom = new google.maps.LatLng(51.529545, 20.020171);
			var markerposition = new google.maps.LatLng(51.529545, 20.020171);

			var marker;
			var map;

			function initialize() {
			  var mapOptions = {
				zoom: 18,
				center: folsom,
                // This is where you would paste any style found on Snazzy Maps.
				styles: [{"stylers":[{"hue":"#dd0d0d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]}]
  
			  };

			  map = new google.maps.Map(document.getElementById('google-map'),
					  mapOptions);

			  marker = new google.maps.Marker({
				map:map,
				draggable:true,
				animation: google.maps.Animation.DROP,
				position: markerposition
			  });
			  google.maps.event.addListener(marker, 'click', toggleBounce);
			}

			function toggleBounce() {

			  if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			  } else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			  }
			}

			google.maps.event.addDomListener(window, 'load', initialize);
	
})(jQuery);