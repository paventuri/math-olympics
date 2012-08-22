var styles = require("/styles/LevelSelectionViewStyles").levelSelectionViewStyles;
var LevelSelectionBottomView = require("/views/LevelSelectionBottomView").LevelSelectionBottomView;

LevelSelectionView = function() {
	var self = this;
	self.id = "LEVEL_SELECTION_VIEW";	
	self.levelItems = [];
	return self;
};

LevelSelectionView.prototype.initialize = function() {
	var self = this;

	self.view = Titanium.UI.createView(styles.levelSelectionView);
	self.initializeHeaderView();
	self.initializeBottomView();
	// TODO: Remove fixed backgrounds reference
	self.fixedBackgrounds = ["/images/category_background_01.png", 
							"/images/category_background_02.png",
							"/images/category_background_03.png", 
							"/images/category_background_04.png"  ]; 

	self.view.show();
};

LevelSelectionView.prototype.initializeHeaderView = function() {
	var self = this;
	var levelHeaderView = Titanium.UI.createImageView(styles.levelcardSelectionHeaderView);
	self.levelHeaderView = levelHeaderView;
	self.view.add(levelHeaderView);	
};

LevelSelectionView.prototype.initializeBottomView = function() {
	var self = this;
	var bottomView = new LevelSelectionBottomView();
	bottomView.initialize();
	self.bottomView = bottomView;
	self.view.add(bottomView.view);
};

exports.LevelSelectionView = LevelSelectionView;