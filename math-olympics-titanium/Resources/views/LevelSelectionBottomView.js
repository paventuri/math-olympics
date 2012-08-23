/**
* Level Selection Bottom View
* @author Daniel Negri
*/

var styles = require("/styles/LevelSelectionBottomViewStyles").levelSelectionBottomViewStyles;
var settings = require('/common/commons').settings;

LevelSelectionBottomView = function() {
    var self = this;
    self.id = "LEVEL_SELECTION_VIEW";
    return self;
};

LevelSelectionBottomView.prototype.initialize = function() {
    var self = this;

    self.view = Titanium.UI.createView(styles.levelSelectionBottomView);
    self.initializeTotalPointsItems();
    self.initializeCurrentPointsItems();
    self.initializeStartButton();
    self.view.show();
};

LevelSelectionBottomView.prototype.initializeTotalPointsItems = function() {
  // total items
  var totalsView = Ti.UI.createView({
    top: 0,
    width : 90,
    left : 4,
  });

  var totalCountLabel = Ti.UI.createLabel({
    top: 26,
    text : "0",
    color : "#333",
    font : {
      fontSize : 32,
      fontFamily: settings.dinSchriftFont
    },
  });

  var totalLabel = Ti.UI.createLabel({
    top: 56,
    text : "TOTAL",
    color : "#999",
    font : {
      fontSize : 18,
      fontFamily: settings.dinSchriftFont
    },
  });

  totalsView.add(totalCountLabel);
  totalsView.add(totalLabel);

  this.view.add(totalsView);
  this.totalCountLabel = totalCountLabel;
};

LevelSelectionBottomView.prototype.initializeCurrentPointsItems = function() {
  // point items
  var pointsView = Ti.UI.createView({
    top: 0,
    width : 90,
    height : "100%",
    left : 2,
  });

  var pointCountLabel = Ti.UI.createLabel({
    top: 26,
    text : "0",
    color : "#333",
    font : {
      fontSize : 32,
      fontFamily: settings.dinSchriftFont
    },
  });

  var pointLabel = Ti.UI.createLabel({
    top: 56,
    text : "SCORE",
    color : "#999",
    font : {
      fontSize :  18,
      fontFamily: settings.dinSchriftFont
    },
    height : 24, 
  });

  pointsView.add(pointCountLabel);
  pointsView.add(pointLabel);

  this.view.add(pointsView);
  this.pointCountLabel = pointCountLabel;
};

/**
 *
 */
LevelSelectionBottomView.prototype.initializeStartButton = function() {
  var self = this;

  var startButton = Ti.UI.createButton({
    top: 30,
    backgroundImage : "/images/start_active.png",
    left : 18,
    width : 97,
    height : 41,
  });

  this.startButton = startButton;

  this.view.add(startButton);
};

LevelSelectionBottomView.prototype.updatedContent = function(level) {
  var self = this;
 
};

exports.LevelSelectionBottomView = LevelSelectionBottomView;