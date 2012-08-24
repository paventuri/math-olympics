/**
 * Game View
 * @author Daniel Negri
 */

var styles = require("/styles/GameViewStyles").gameViewStyles;
var settings = require('/common/commons').settings;
var commons = require('/common/commons');
var Answer = require("/models/Answer").Answer;
var AnswersRadioGroup = require("/views/components/AnswersRadioGroup").AnswersRadioGroup;
var LevelSelectionBottomView = require("/views/LevelSelectionBottomView").LevelSelectionBottomView;
var LevelSelectionBottomView = require("/views/LevelSelectionBottomView").LevelSelectionBottomView;


GameView = function() {
  var self = this;
  self.id = "GAME_VIEW";
  self.interactions = [];
  self.answers = [];
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
  self.initializeHeaderView();
  self.initializeBottomView();
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

GameView.prototype.initializeBottomView = function() {
  var self = this;
  var bottomView = new LevelSelectionBottomView();
  bottomView.initialize();
  self.bottomView = bottomView;
  self.view.add(bottomView.view);
};

GameView.prototype.initializeHeaderView = function() {
  var self = this;
  var headerLabel = Titanium.UI.createLabel(styles.headerLabel);
  headerLabel.text = "Select your level".toUpperCase();
  self.headerLabel = headerLabel;
  self.view.add(headerLabel);
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
  
  var headerGameViews = ["#CCC", "navy", "red", "orange", "#CCC", "navy", "red", "orange"];

  for (var i = 0, length = interactions.length; i < length; i++) {
    var interaction = interactions[i];
    var interactionViews = Titanium.UI.createView(styles.interactionView);
    interactionViews.headerGameViewImage = "/images/KO_background.jpg"
    // interactionViews.headerGameViewColor = headerGameViews[i];
    var interactionWebView = Titanium.UI.createWebView(styles.webView); 
    
    // interactionWebView.headerGameViewImage = "/images/KO_background.jpg";
    
    var answerView = Titanium.UI.createWebView(styles.answerView);
    interactionViews.add(interactionWebView);
    
    self.updateInteractionContent(interactionWebView, interaction);
    
    var answers = Answer.findBy(interaction.id);
    // self.updateInteractionContentWithAnswers(answerView, answers);
    
    //create radio buttons
    var answersRadioGroup = new AnswersRadioGroup();
    answersRadioGroup.initialize(answers);
    
    interactionViews.add(answersRadioGroup.view);
    self.interactionViews[interaction.id]= interactionViews;
    self.scrollView.addView(interactionViews);
    
    
  }
};

GameView.prototype.updateInteractionContent = function(interactionWebView, interaction) {
  var self = this;
  
  var cssFromFile = commons.getWebViewCSS();
  
  var cardHtmlShell = "<!DOCTYPE html><html class='container'><head><meta name='HandheldFriendly' content='True'><meta name='MobileOptimized' content='320'/><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + cssFromFile + "</style></head><body class='container'><div class='container card-container'>";
  
  // Front
  var frontHtml = cardHtmlShell + "<div class='card-front'>" + interaction.stem + "</div></div></body></html>";
  interactionWebView.html = frontHtml;
  interactionWebView.repaint();
  // self.frontCardTitleLabel.text = self.currentFlashcard.category_title;
  // self.frontCardView.headerGameViewImage = self.getheaderGameViewPath(self.currentFlashcard.category_uid);
};

exports.GameView = GameView;
