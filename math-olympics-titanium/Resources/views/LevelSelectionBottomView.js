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


};

LevelSelectionBottomView.prototype.initializeCurrentPointsItems = function() {
  // point items
  var pointsView = Ti.UI.createView({
    top: 0,
    width : 90,
    height : "100%",
    left : 2,
  });


};

/**
 *
 */
LevelSelectionBottomView.prototype.initializeStartButton = function() {
  var self = this;

};

LevelSelectionBottomView.prototype.updatedContent = function(level) {
  var self = this;
 
};

exports.LevelSelectionBottomView = LevelSelectionBottomView;