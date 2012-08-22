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
	self.initializeStartButton();
	self.view.show();
};

LevelSelectionBottomView.prototype.initializeCardItems = function() {
	// card items
	var cardsView = Ti.UI.createView({
		top: 0,
		width : 90,
		height : "100%",
		left : 2,
	});

	var cardCountLabel = Ti.UI.createLabel({
		top: 26,
		text : "0",
		color : "#333",
		font : {
			fontSize : 32,
			fontFamily: settings.dinSchriftFont
		},
	});

	var cardLabel = Ti.UI.createLabel({
		top: 56,
		text : "CARDS",
		color : "#999",
		font : {
			fontSize :  18,
			fontFamily: settings.dinSchriftFont
		},
		height : 24, 
	});

};


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

exports.LevelSelectionBottomView = LevelSelectionBottomView;