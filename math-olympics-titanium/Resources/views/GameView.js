/**
 * Game View
 * @author Daniel Negri
 */

var styles = require("/styles/GameViewStyles").gameViewStyles;
var settings = require('/common/commons').settings;
var commons = require('/common/commons');
var Answer = require("/models/Answer").Answer;
var AnswersRadioGroup = require("/views/components/AnswersRadioGroup").AnswersRadioGroup;


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
  
  for (var i = 0, length = interactions.length; i < length; i++) {
    var interaction = interactions[i];   
    var answers = Answer.findBy(interaction.id);    
    
    var interactionView = Titanium.UI.createView(styles.interactionView);   
    self.scrollView.addView(interactionView);
    
    // Header
    var headerView = Titanium.UI.createView(styles.interactionHeaderView);
    interactionView.add(headerView);
    
    var questionLabel = Titanium.UI.createLabel(styles.questionLabel);
    questionLabel.text = "QUESTION " + (i+1) + " of " + length;
    headerView.add(questionLabel);
    
    var levelLabel = Titanium.UI.createLabel(styles.levelLabel);
    levelLabel.text = "LEVEL " + interaction.level_id;
    headerView.add(levelLabel);
    
    // Question and Answer 
    var stemView = Titanium.UI.createView(styles.stemView);
    interactionView.add(stemView);
    
    var webView = Titanium.UI.createWebView(styles.webView);
    stemView.add(webView);
    self.updateWebContent(webView, interaction);    

    var answerView = Titanium.UI.createView(styles.answerView);
    interactionView.add(answerView);
    
    //create radio buttons
    var answersRadioGroup = new AnswersRadioGroup();
    answersRadioGroup.initialize(answers);
    answerView.add(answersRadioGroup.view);   
  }
};

GameView.prototype.updateWebContent = function(webView, interaction) {
  var self = this;
  
  var cssFromFile = commons.getWebViewCSS();
  
  var htmlShell = "<!DOCTYPE html><html class='container'><head><meta name='HandheldFriendly' content='True'><meta name='MobileOptimized' content='300'/><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + cssFromFile + "</style></head><body class='container'><div class='container card-container'>";
  
  // Front
  var html = htmlShell + "<div class='card-front'>" + interaction.stem + "</div></div></body></html>";
  webView.html = html;
  webView.repaint();
};

exports.GameView = GameView;
