var styles = require("/styles/LevelSelectionViewStyles").levelSelectionViewStyles;

LevelSelectionView = function() {
	var self = this;
	self.id = "FLASHCARD_SELECTION_VIEW";	
	self.categoryItems = [];
	return self;
};

LevelSelectionView.prototype.initialize = function() {
	var self = this;

	self.view = Titanium.UI.createView(styles.levelSelectionView);

	// TODO: Remove fixed backgrounds reference
	self.fixedBackgrounds = ["/images/category_background_01.png", 
							"/images/category_background_02.png",
							"/images/category_background_03.png", 
							"/images/category_background_04.png"  ]; 

	self.view.show();
};

LevelSelectionView.prototype.initializeHeaderView = function() {
	var self = this;
	
};

exports.LevelSelectionView = LevelSelectionView;