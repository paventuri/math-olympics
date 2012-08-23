/**
 * Application Window
 * @author Daniel Negri
 */

var styles = require("/styles/ApplicationWindowStyles").applicationWindowStyles;
var HeaderView = require('/views/HeaderView').HeaderView;
var LeftMenuView = require('/views/LeftMenuView').LeftMenuView;
var LevelSelectionView = require('/views/LevelSelectionView').LevelSelectionView;
var LevelSelectionBottomView = require('/views/LevelSelectionBottomView').LevelSelectionBottomView;
var GameView = require('/views/GameView').GameView;


ApplicationWindow = function() {
  var self = this;     
  self.id = "APPLICATION_WINDOW"; 
  self.currentView = undefined;
  self.window = undefined;
  self.view = undefined;
  self.mainView = undefined;
  self.leftMenuView = undefined;
  self.levelSelectionView = undefined;
  self.gameView = undefined;

  return self;
};

ApplicationWindow.prototype.initialize = function() {    
  var self = this;
  self.window = Titanium.UI.createWindow(styles.applicationWindow);
  self.window.orientationModes = [Titanium.UI.PORTRAIT]; 
  
  self.initializeApplicationView();  
  self.initializeHeaderView();
  self.initializeMainView();
  self.initializeLeftMenuView();
  self.initializeGameView();
  self.initializeLevelSelectionView();  
  self.currentView = self.levelSelectionView;

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

ApplicationWindow.prototype.initializeLeftMenuView = function() {
  var self = this;
  
  var leftMenuView = new LeftMenuView();
  leftMenuView.initialize();
  
  self.leftMenuView = leftMenuView;
  self.view.add(leftMenuView.view);
};

ApplicationWindow.prototype.initializeGameView = function() {
  var self = this;
  
  var gameView = new GameView();
  gameView.initialize();
  
  self.gameView = gameView;
  self.mainView.add(gameView.view);
};


ApplicationWindow.prototype.updateContent = function(content) {
  var self = this;
  var levels = content.levels;
  
  self.levelSelectionView.updateLevelsView(levels);
};


exports.ApplicationWindow = ApplicationWindow;