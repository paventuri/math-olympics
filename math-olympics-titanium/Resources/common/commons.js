/**
 * Commons
 * Settings and Utilities methods 
 * 
 * @author Daniel Negri
 */

exports.settings = {
	platformWidth: Titanium.Platform.displayCaps.platformWidth,
	platformHeight: Titanium.Platform.displayCaps.platformHeight,
	dpi: Titanium.Platform.displayCaps.dpi,
	density: Titanium.Platform.displayCaps.density,
	SIZE: Ti.UI.SIZE,
	barColor: '#003333',
	isAndroid: Ti.Android,
	leftMenuWidth: 148, 
	dinSchriftFont : (Ti.Android ? 'DINEngschrift-Alternate' : 'DIN Schrift' ),
	metaOTFont : (Ti.Android ? 'MetaOT-Bold' : 'Meta OT' ),
	DATABASE_NAME : 'math-olympics.sql',
};

exports.isArray = function(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
};

exports.isArray = function(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
};


exports.guidGenerator = function() {
	var S4 = function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

exports.getDatabase = function() {
  var databaseName = exports.settings.DATABASE_NAME;
	var database = Ti.Database.install('/math-olympics.sqlite', databaseName);
	return database;
};

exports.convertResultSet = function(result) {
  var list = [];
  
  while(result.isValidRow()) {
    var item = {};
    var fieldCount = 0;
    
    if (Ti.Platform.name === 'android') {
        fieldCount = result.fieldCount;
    } else {
        fieldCount = result.fieldCount();
    }    
    
    for (var i = 0; i < fieldCount; i++ ) {
      item[result.fieldName(i)] = result.field(i);      
    }

    list.push(item);    
    result.next();
  }

  return list;  
};

exports.getWebViewCSS = function() {
	if ( !exports.settings.cssFile ) {
		var cssFile = Titanium.Filesystem.getFile("html/screen.css").read(); 
		exports.settings.cssFile = cssFile;		
	}
	
	return exports.settings.cssFile;	 
};

exports.checkGPSEnability = function(_callback) {
	if (Ti.Geolocation.locationServicesEnabled === false) {
		alert('Your device has geo turned off - turn it on.');

		globals.loc = {
			longitude : '',
			latitude : ''
		};

		return false;
	} else {
		if (!Ti.Android) {
			var authorization = Ti.Geolocation.locationServicesAuthorization;
			if (authorization == Ti.Geolocation.AUTHORIZATION_DENIED) {
				alert('You have disallowed from running geolocation services.');
			} else if (authorization == Ti.Geolocation.AUTHORIZATION_RESTRICTED) {
				alert('Your system is disallowed from running geolocation services.');
			}
		}
		getCurrentLocation(_callback);

		return true;
	}
};

exports.getCurrentLocation = function(_callback) {
	Ti.Geolocation.purpose = "Receive User Location";
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	Ti.Geolocation.distanceFilter = 10;

	Ti.Geolocation.getCurrentPosition(function(e) {
		if (e.error) {
			Ti.API.info(JSON.stringify(e.error));
			alert('Cannot get your current location. Ensure geo is turned on then try again');
		} else {
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;

			globals.loc = {
				longitude : longitude,
				latitude : latitude
			};
			
	  //
	  Ti.API.info("Location Information " + JSON.stringify(globals.loc));
	  _callback && _callback(globals.loc);
	}
});
};