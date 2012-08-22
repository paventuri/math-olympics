/**
 * Application Window
 * @author Daniel Negri
 */

var styles = require("/styles/ApplicationWindowStyles").applicationWindowStyles;

ApplicationWindow = function() {
	var self = this;  	 
	self.id = "APPLICATION_WINDOW";	
	self.currentView = undefined;
	self.window = undefined;
	self.view = undefined;

	return self;
};

ApplicationWindow.prototype.initialize = function() {    
	var self = this;
	self.window = Titanium.UI.createWindow(styles.applicationWindow);
	self.window.orientationModes = [Titanium.UI.PORTRAIT]; 
	
	self.initializeApplicationView();  
	
	self.window.open();
};

ApplicationWindow.prototype.initializeApplicationView = function() {
	var self = this;
	
	var view = Titanium.UI.createView(styles.applicationView);
	self.id = "APPLICATION_VIEW";
	self.view = view;
	self.window.add(view);
	return view;
};

exports.ApplicationWindow = ApplicationWindow;