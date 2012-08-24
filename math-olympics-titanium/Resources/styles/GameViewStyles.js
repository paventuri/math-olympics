/**
 * Game View Styles
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;

exports.gameViewStyles = {
  gameView : {
    top : 0,
    left : 10 + settings.platformWidth,
    height : "100%",
    width : 320,
  },
  
  gameScrollableView : {
    top : 0,
    left : 0,
    height : "100%",
    width : "100%",
    touchEnabled : true,
    horizontalBounce : true,
    clipViews : false,
    showHorizontalScrollIndicator: true
  },
  
  
  interactionAreaView : {
    top : 0,
    left : 0,
    width : "100%",
    height : "100%",
  },
  
  headerLabel : {
    top : 20,
    left : 16,
    // color : '#333',
    font : {
      fontSize : 23,
      fontFamily : settings.metaOTFont
    },
  },

  
  interactionView : {
    top : 0,
    left : 0,
    width : "100%",
    height : "100%",
    // backgroundColor : 'yellow'
    backgroundImage : "/images/KO_background.jpg"
    
  },
  
  fakeInteractionView : {
    top : 0,
    left : 10 + settings.platformWidth,
    width : "100%",
    height : "100%",
  },
  
  nextInteractionView : {
    top : 0,
    left : 0,
    width : "100%",
    height : "100%",
    // backgroundColor : 'navy'
    // backgroundImage : "/images/card_background_general.png"
  },
  
  titleLabel : {
    left: 16,
    top: 12,
    font : {
      fontSize : 18,
      fontFamily : settings.metaOTFont
    },
  },
  
  webView : {
    top: 55,
    left: 1,
    width: settings.platformWidth - 2,  
    height: 170,
    enableZoomControls: false,
    touchEnabled: false,
     // opacity: 0.0,
    // backgroundColor : 'navy'
      // backgroundImage : "/images/KO_background.jpg",
      backgroundColor : 'transparent'
  },
  
   answerView : {
    top: 260,
    left: 1,
    width: settings.platformWidth - 2,  
    height: 160,
    enableZoomControls: false,
    touchEnabled: false
  }
  
};
