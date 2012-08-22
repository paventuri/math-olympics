/**
 * Header View
 * @author Daniel Negri
 */

var styles = require("/styles/HeaderViewStyles").headerViewStyles;

HeaderView = function() {
	var self = this;  	 
	self.id = "HEADER_VIEW";	
	return self;
};

HeaderView.prototype.initialize = function() {
	var self = this;
	
	self.view = Titanium.UI.createView(styles.headerView);
	
	self.initializeMenuButton();
	self.initializeLogo();
	
	self.view.show();
};

HeaderView.prototype.initializeMenuButton = function() {
	var self = this;
	
	var menuButton = Titanium.UI.createButton(styles.headerMenuButton);
	menuButton.id = "MENU_BUTTON";
	
	self.menuButton = menuButton;	
	self.view.add(menuButton);
};

HeaderView.prototype.initializeLogo = function() {
	var self = this;
	
	var logo = Titanium.UI.createImageView(styles.headerLogo);
	logo.id = "LOGO";
	logo.touchEnabled = true;
	
	self.logo = logo;
	self.view.add(logo);
};

exports.HeaderView = HeaderView;

