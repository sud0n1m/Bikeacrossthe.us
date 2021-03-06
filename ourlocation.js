function placePastMarker(geoPoint, label){
	var newMarker= new YMarker(geoPoint, createPastImage());
	newMarker.addAutoExpand(label);
	map.addOverlay(newMarker);
}
function createPastImage(){
	 	var myImage = new YImage();
	  	myImage.src = 'http://bikeacrossthe.us/journey/bikepast.png';
	 	myImage.size = new YSize(24,24);
	 	myImage.offsetSmartWindow = new YCoordPoint(0,0);
		return myImage;	
}
function createPresentImage(){
	 	var myImage = new YImage();
	  	myImage.src = 'http://bikeacrossthe.us/journey/bikepresent.png';
	 	myImage.size = new YSize(24,24);
	 	myImage.offsetSmartWindow = new YCoordPoint(0,0);
		return myImage;	
}
function placePresentMarker(geoPoint, label){
	var newMarker= new YMarker(geoPoint, createPresentImage());
	newMarker.addAutoExpand(label);
	map.addOverlay(newMarker);
}
	// Create a map object
	var map = new YMap(document.getElementById('map'));

	// Add an array of points to use to draw the lines
	polylinePoints = [];

	// Add map type control
	map.addTypeControl();

    // Add zoom
    map.addZoomLong();

	//Disable Mouse actions
	map.disableKeyControls();

	// Set map type to either of: YAHOO_MAP_SAT, YAHOO_MAP_HYB, YAHOO_MAP_REG
	map.setMapType(YAHOO_MAP_REG);

	var i;
	for (i=0; i < (tripData.length - 1); i++) {
		var point = tripData[i];
		// Add a point to the map
		//var currentGeoPoint = new YGeoPoint( "37.7804500599635","-122.4252891540273" );
		var currentGeoPoint = new YGeoPoint( point.lon, point.lat );
		polylinePoints.push(currentGeoPoint);
		placePastMarker(currentGeoPoint, point.name);
	}
	
	// Add the present location in a different color
	var point = tripData[i];
	var currentGeoPoint = new YGeoPoint( point.lon, point.lat );
	polylinePoints.push(currentGeoPoint);
	placePresentMarker(currentGeoPoint, point.name);
	
	map.addOverlay(new YPolyline(polylinePoints, 'black',4,0.7));
	
	// Display the map centered on a geocoded location
	map.drawZoomAndCenter(currentGeoPoint, 12);
