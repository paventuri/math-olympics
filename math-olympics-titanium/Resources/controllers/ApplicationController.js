/**
 * Application Controller
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;
var ApplicationWindow = require("/views/ApplicationWindow").ApplicationWindow;


ApplicationController = function() {
	var self = this;	  
	return self;
};

/**
 * Initialize the controller settings and intanciating the views
 **/
ApplicationController.prototype.initialize = function() {
	var self = this;
	self.initializeData();
	self.applicationWindow = new ApplicationWindow(self);	
	self.applicationWindow.initialize();	
	self.addEventListeners();
	self.initializeAnimations();	
	
};

ApplicationController.prototype.initializeData = function() {
	var self = this;
};

ApplicationController.prototype.initializeAnimations = function() {
	var self = this;

	var openMenuAnimation = Titanium.UI.createAnimation({
		left: 0,
		right: 0,
		top: 0,
		duration: 300
	});
	self.openMenuAnimation = openMenuAnimation;

	var closeMenuAnimation = Titanium.UI.createAnimation({
		left: (-1) * settings.leftMenuWidth,
		right: 0,
		top: 0,
		duration: 300
	});
	self.closeMenuAnimation = closeMenuAnimation;

	var openViewAnimation = Titanium.UI.createAnimation({
		top: 0,
		left: 0,		
		duration: 600
	});
	self.openViewAnimation = openViewAnimation;

	var platformWidth = settings.platformWidth;
	var closeViewAnimation = Titanium.UI.createAnimation({
		top: 0,
		left: 10 + platformWidth,		
		duration: 600
	});
	self.closeViewAnimation = closeViewAnimation;

};


ApplicationController.prototype.addEventListeners = function() {
	var self = this;
};

ApplicationController.prototype.switchView = function(nextView) {
	var self = this;	
	var currentView = self.applicationWindow.currentView;

	if ( currentView.id != nextView.id ) {
		nextView.view.animate(self.openViewAnimation);	
		currentView.view.animate(self.closeViewAnimation);
	}
	
	self.applicationWindow.currentView = nextView;
};


exports.ApplicationController = ApplicationController;