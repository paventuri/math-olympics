var styles = require("/styles/LevelSelectionViewStyles").levelSelectionViewStyles;
var LevelSelectionBottomView = require("/views/LevelSelectionBottomView").LevelSelectionBottomView;

LevelSelectionView = function() {
  var self = this;
  self.id = "LEVEL_SELECTION_VIEW"; 
  self.levelItems = {};
  return self;
};

LevelSelectionView.prototype.initialize = function() {
  var self = this;

  self.view = Titanium.UI.createView(styles.levelSelectionView);
  self.initializeHeaderView();
  self.initializeLevelsView();
  self.initializeBottomView();
  self.view.show();
};

LevelSelectionView.prototype.initializeHeaderView = function() {
	var self = this;
	var headerLabel = Titanium.UI.createLabel(styles.headerLabel);
	headerLabel.text = "Select your level".toUpperCase();
	self.headerLabel = headerLabel;
	self.view.add(headerLabel);
};

LevelSelectionView.prototype.initializeLevelsView = function() {
	var self = this;	
	var levelItemsView = Titanium.UI.createScrollView(styles.levelItemsView);
	self.levelItemsView = levelItemsView;
	self.view.add(levelItemsView);
};

LevelSelectionView.prototype.initializeBottomView = function() {
  var self = this;
  var bottomView = new LevelSelectionBottomView();
  bottomView.initialize();
  self.bottomView = bottomView;
  self.view.add(bottomView.view);
};


LevelSelectionView.prototype.updateLevelsView = function(levels) {
  var self = this;

  for ( var i = 0, length = levels.length; i < length; i++ ) {
    var level = levels[i];

    // Item View
    var levelItemView = Ti.UI.createView(styles.levelItemView);
    levelItemView.id = level.id;
    levelItemView.top = styles.levelItemView.top * i;

    var levelLabel = Titanium.UI.createLabel(styles.levelLabel);
    levelLabel.id = level.id; //bug
    levelLabel.color = ( level.isLocked ? "#999" : "#333" );
    levelLabel.text = level.title;
    levelItemView.add(levelLabel);
    
    var pointsLabel = Titanium.UI.createLabel(styles.pointsLabel);
    pointsLabel.text = level.points + " points";
    levelItemView.add(pointsLabel);
    
    var medalImage = Titanium.UI.createImageView(styles.medalImage);
    medalImage.id = level.id;
    if ( level.medal ) {
      medalImage.image = "/images/medal_award_" + level.medal + ".png"; 
    } 
    
    if ( !level.isLocked && !level.medal ) {
      levelLabel.color = "#237adc";
      medalImage.visible = false;   
    }
      
    levelItemView.add(medalImage);  
        
    var dividerCardStatus = Titanium.UI.createImageView(styles.horizontalDividerImage);
    levelItemView.add(dividerCardStatus);

    // Adding Item View    
    self.levelItems[level.id] = {
        level : level,
        levelItemView : levelItemView,
        levelLabel : levelLabel,
        medalImage : medalImage,
        pointsLabel : pointsLabel
    };
    
    self.levelItemsView.add(levelItemView);	
  }
};


exports.LevelSelectionView = LevelSelectionView;