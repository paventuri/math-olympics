/**
 * Application Controller
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;
var ApplicationWindow = require("/views/ApplicationWindow").ApplicationWindow;
var Level = require("/models/Level").Level;


ApplicationController = function() {
  var self = this;    
  self.levels = [];
  self.currentLevel = undefined;
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
  self.applicationWindow.updateContent({
    levels: self.levels
  });
  self.addEventListeners();
  self.initializeAnimations();  
  
};

ApplicationController.prototype.initializeData = function() {
  var self = this;
  
  var levels = Level.findAll();
  self.levels = levels;
  
  /**
  self.levels = [   
    { id: 1, title: '1st Pythagoras', points: 200, isLocked: false, medal: "gold" },
    { id: 2, title: '2nd Euler', points: 300, isLocked: false, medal: "silver" },
    { id: 3, title: '3rd Gauss', points: 500, isLocked: false, medal: undefined },
    { id: 4, title: '4rd Riemann', points: 800, isLocked: true, medal: undefined },
    { id: 5, title: '5rd Fermat', points: 1300, isLocked: true, medal: undefined },
    { id: 6, title: '6rd Archimedes', points: 2100, isLocked: true, medal: undefined },
    { id: 7, title: '7rd Newton', points: 3400, isLocked: true, medal: undefined },
  ];
  **/


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

  var levelViewAnimation = Titanium.UI.createAnimation({  duration : 400 });
  self.levelViewAnimation = levelViewAnimation;

    var bottomViewAnimation = Titanium.UI.createAnimation({ duration : 400 });
    self.bottomViewAnimation = bottomViewAnimation;

};


ApplicationController.prototype.addEventListeners = function() {
  var self = this;

  // Header
  var menuButton = self.applicationWindow.headerView.menuButton;
  menuButton.addEventListener("click", function(e) {
    self.handleMenuButton(e);
  });

  // Left Menu
  var leftMenuView = self.applicationWindow.leftMenuView;
  var menuItems = leftMenuView.menuItems;

  for ( var item in menuItems ) {
    var label = leftMenuView[item];
    label.addEventListener("click", function(e) {
      self.handleLeftMenuButtom(e);
    });
  }
  
  // Level Selector Items
  var levelSelectionView = self.applicationWindow.levelSelectionView;
  var levelItems = levelSelectionView.levelItems;
  
  for ( var index in levelItems ) {
    levelItems[index].levelItemView.addEventListener("click", function(e) {
      self.handleLevelSelection(e);
    });
  }
};

ApplicationController.prototype.handleMenuButton = function(e) {
  var self = this;

  var leftMenuView = self.applicationWindow.leftMenuView;

  if ( self.isLeftMenuOpen ) {    
    self.applicationWindow.view.animate(self.closeMenuAnimation);
  } else {
    self.applicationWindow.view.animate(self.openMenuAnimation);
  } 

  self.isLeftMenuOpen = !self.isLeftMenuOpen;
}

ApplicationController.prototype.handleLeftMenuButtom = function(e) {
  var self = this;
  
  switch (e.source.id) {
    case "homeItem":
      self.openLevelSelectionView();
      break;
    case "socialItem":
      self.openSocialView();
      break;
    case "medalsItem":
      self.openMedalsView();
      break;
    case "storeItem":
      self.openStoreView();
      break;
    case "rulesItem":
      self.openRulesView();
      break;
    case "gameItem":
      self.openGameView();
      break;
    default: 
      Titanium.API.error("Invalid menu action: " + e.source.id);
  }
  
  self.handleMenuButton();
};

ApplicationController.prototype.handleLevelSelection = function(e) {
  var self = this;
  var level = self.levels[e.source.id];
  self.currentLevel = level;
  Titanium.API.info("Level selected: " + JSON.stringify(level));
    
  self.openGameView();  
}  

ApplicationController.prototype.openLevelSelectionView = function() {
  var self = this;
  Titanium.API.info("Level Selection View");
  self.switchView(self.applicationWindow.levelSelectionView);
};


ApplicationController.prototype.openGameView = function() {
  var self = this;
  Titanium.API.info("Game View");
  self.switchView(self.applicationWindow.gameView);
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