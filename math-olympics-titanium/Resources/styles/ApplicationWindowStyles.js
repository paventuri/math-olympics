/**
 * Application Window Styles
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;

exports.applicationWindowStyles = {
	// Application
	applicationWindow : {
		width : settings.platformWidth,
		height : settings.platformHeight,
		top : 0,
		exitOnClose : false,
		backgroundImage : '/images/main_window_background.png',
		navBarHidden : true,
		fullscreen : false,
	},

	applicationView : {
		width : settings.platformWidth + settings.leftMenuWidth,
		heigth : "100%",
		top : 0,
		left : (-1) * settings.leftMenuWidth
	},

	// Main View
	mainView : {
		top : 56,
		left : settings.leftMenuWidth,
		width : "100%",
		height : "100%",
	}
};
