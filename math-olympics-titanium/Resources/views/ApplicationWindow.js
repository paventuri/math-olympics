/**
 * Application Window
 * @author Daniel Negri
 */

var styles = require("/styles/ApplicationWindowStyles").applicationWindowStyles;
var HeaderView = require('/views/HeaderView').HeaderView;
var LevelSelectionView = require('/views/LevelSelectionView').LevelSelectionView;


ApplicationWindow = function() {
	var self = this;  	 
	self.id = "APPLICATION_WINDOW";	
	self.currentView = undefined;
	self.window = undefined;
	self.view = undefined;
	self.mainView = undefined;
	self.leftMenuView = undefined;

	return self;
};

ApplicationWindow.prototype.initialize = function() {    
	var self = this;
	self.window = Titanium.UI.createWindow(styles.applicationWindow);
	self.window.orientationModes = [Titanium.UI.PORTRAIT]; 
	
	self.initializeApplicationView();  
	self.initializeHeaderView();
	self.initializeMainView();
	self.initializeLevelSelectionView();	

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

ApplicationWindow.prototype.initializeHeaderView = function() {
	var self = this;
	
	var headerView = new HeaderView();
	headerView.initialize();
			
	self.headerView = headerView;	
	self.view.add(headerView.view);
};

ApplicationWindow.prototype.initializeMainView = function() {
	var self = this;
	
	var mainView = Titanium.UI.createView(styles.mainView);
	mainView.id = "MAIN_VIEW";
	self.mainView = mainView;
	self.view.add(mainView);
};

ApplicationWindow.prototype.initializeLevelSelectionView = function() {
	var self = this;

	var levelSelectionView = new LevelSelectionView();
	levelSelectionView.initialize();

	self.levelSelectionView = levelSelectionView;
	self.mainView.add(levelSelectionView.view);
};



exports.ApplicationWindow = ApplicationWindow;