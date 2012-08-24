var styles = require("/styles/LevelSelectionViewStyles").levelSelectionViewStyles;

LevelSelectionView = function() {
  var self = this;
  self.id = "LEVEL_SELECTION_VIEW"; 
  self.levelItems = {};
  
  self.enabledBackgrounds = [
    '/images/level_enabled_background_1.png',
    '/images/level_enabled_background_2.png',
    '/images/level_enabled_background_3.png',
    '/images/level_enabled_background_4.png',
    '/images/level_enabled_background_5.png',    
  ];
  
  self.disabledBackgrounds = [
    '/images/level_disabled_background_1.png',
    '/images/level_disabled_background_2.png',
    '/images/level_disabled_background_3.png',
    '/images/level_disabled_background_4.png',
    '/images/level_disabled_background_5.png',    
  ];
  
  return self;
};

LevelSelectionView.prototype.initialize = function() {
  var self = this;

  self.view = Titanium.UI.createView(styles.levelSelectionView);
  self.initializeLevelsView();
  
  self.view.show();
};

LevelSelectionView.prototype.initializeLevelsView = function() {
	var self = this;	
	var levelItemsView = Titanium.UI.createScrollView(styles.levelItemsView);
	self.levelItemsView = levelItemsView;
	self.view.add(levelItemsView);
};

LevelSelectionView.prototype.updateLevelsView = function(levels) {
  var self = this;

  for ( var i = 0, length = levels.length; i < length; i++ ) {
    var level = levels[i];

    // Item View
    var levelItemView = Ti.UI.createView(styles.levelItemView);
    levelItemView.id = level.id;
    levelItemView.top = styles.levelItemView.height * i;
    var backgroundImage = ( level.isLocked == true ? self.disabledBackgrounds[i] : self.enabledBackgrounds[i] );
    Titanium.API.info(backgroundImage);
    levelItemView.backgroundImage = backgroundImage;

    var levelLabel = Titanium.UI.createLabel(styles.levelLabel);
    levelLabel.id = level.id; //bug        
    levelLabel.opacity = ( level.isLocked == true ? 0.35 : 1 );
    levelLabel.text = level.title;
    levelItemView.add(levelLabel);   
   
    // Adding Item View    
    self.levelItems[level.id] = {
        level : level,
        levelItemView : levelItemView,
        levelLabel : levelLabel,
    };
    
    self.levelItemsView.add(levelItemView);	
  }
};


exports.LevelSelectionView = LevelSelectionView;