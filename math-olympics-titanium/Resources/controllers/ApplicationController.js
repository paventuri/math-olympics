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

};


ApplicationController.prototype.addEventListeners = function() {
	var self = this;
	
};


exports.ApplicationController = ApplicationController;