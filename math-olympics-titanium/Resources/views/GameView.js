/**
 * Game View
 * @author Daniel Negri
 */

var styles = require("/styles/GameViewStyles").gameViewStyles;
var settings = require('/common/commons').settings;
var commons = require('/common/commons');

GameView = function() {
  var self = this;
  self.id = "GAME_VIEW";
  self.interactions = [];
  self.currentInteraction = undefined;
  self.nextInteraction = undefined;
  self.interactionViews = [];
  self.isFlipped = false;

  return self;
};

GameView.prototype.initialize = function() {
  var self = this;

  var view = Titanium.UI.createView(styles.gameView);
  self.view = view;

  self.initializeAnimations();
  self.initializeScrollableView();
  self.initializeInteractionAreaView();
  // self.addEventListeners();
  self.view.show();
};

GameView.prototype.initializeAnimations = function() {
  var self = this;

  var animationFlip = Titanium.UI.createAnimation({
    duration : 300
  });
  animationFlip.transition = Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
  self.animationFlip = animationFlip;

  var animationFlipForNextInteraction = Titanium.UI.createAnimation({
    duration : 300
  });
  animationFlipForNextInteraction.transition = Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
  self.animationFlipForNextInteraction = animationFlipForNextInteraction;
};

GameView.prototype.initializeScrollableView = function() {
  var self = this;

  var scrollView = Titanium.UI.createScrollableView(styles.gameScrollableView);
  self.scrollView = scrollView;

  self.view.add(scrollView);
};

GameView.prototype.initializeInteractionAreaView = function() {
  var self = this;

  // Scrollable Views
  var interactionAreaView = Titanium.UI.createView(styles.interactionAreaView);
  self.interactionAreaView = interactionAreaView;
  self.scrollView.addView(interactionAreaView);
  /*Removed so that the views will be created as part of the update content function
   var fakeInteractionView = Titanium.UI.createView(styles.fakeInteractionView);
   self.fakeInteractionView = fakeInteractionView;
   self.scrollView.addView(fakeInteractionView);

   // Front
   var frontInteractionView = Titanium.UI.createView(styles.frontInteractionView);
   self.frontInteractionView = frontInteractionView;
   self.interactionAreaView.add(frontInteractionView);

   var frontInteractionTitleLabel = Titanium.UI.createLabel(styles.titleLabel);
   self.frontInteractionTitleLabel = frontInteractionTitleLabel;
   self.frontInteractionView.add(frontInteractionTitleLabel);
   */
};

GameView.prototype.addEventListeners = function() {
  var self = this;

  self.scrollView.addEventListener('scrollEnd', function(e) {
    if (self.scrollView.currentPage != 0) {
      // self.nextCard();
    }
  });

  self.animationFlip.addEventListener('complete', function() {
    // self.handleCompleteFlip();
  });

  self.animationFlipForNextInteraction.addEventListener('complete', function() {
    // self.handleCompleteFlipForNextCard();
  });

  self.interactionAreaView.addEventListener("singletap", function() {
    // self.flipCards();
  });
};

GameView.prototype.updateInterationsView = function(interactions) {
  var self = this;
  
  var backgrounds = ["navy", "red", "orange"];

  for (var i = 0, length = interactions.length; i < length; i++) {
    var interaction = interactions[i];
    var interactionViews = Titanium.UI.createView(styles.interactionView);
    interactionViews.backgroundColor = backgrounds[i];
    
    self.interactionViews[interaction.id]= interactionViews;
    self.scrollView.addView(interactionViews);

  }

}

exports.GameView = GameView;
