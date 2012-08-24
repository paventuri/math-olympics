var globals = {
	dpiConversionRatio : (Ti.Android) ? (Titanium.Platform.displayCaps.dpi / 160) : 1,
	pW : Titanium.Platform.displayCaps.platformWidth,
	pH : Titanium.Platform.displayCaps.platformHeight,
	DPI : Titanium.Platform.displayCaps.dpi,
	pD : Titanium.Platform.displayCaps.density,
	Ti_UI_SIZE : Ti.UI.SIZE,
	barColor : '#003333',
	isAndroid : Ti.Android,
	isIOS : (Titanium.Platform.osname == 'iphone'),
	isNavShown : false,
	dinSchriftFont : (Ti.Android ? 'DINEngschrift-Alternate' : 'DIN Schrift' ),
	metaOTFont : (Ti.Android ? 'MetaOT-Bold' : 'Meta OT' ),
	first_run : true,
	database : undefined,
	DATABASE_NAME : 'flashcards.sql'
};

globals.pW = Titanium.Platform.displayCaps.platformWidth;
globals.pH = Titanium.Platform.displayCaps.platformHeight;

globals.isArray = function(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
};


globals.guidGenerator = function() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

globals.getDatabase = function() {
	var database = Ti.Database.install('/flashcards.sqlite', this.DATABASE_NAME);
	return database;
};

exports.d = function(str) {
	if (Ti.App.deployType !== "production") {
		Ti.API.debug(str);
	}
};

/**
 * 
 */
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

function getCurrentLocation(_callback) {
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

exports.globals = globals;
