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

  interactionView : {
    top : 0,
    left : 5,
    right : 5,
    // width : "100%",
    height : "100%",
  },

  interactionHeaderView : {
    top : 0,
    left : 0,
    backgroundImage : '/images/game_header_background.png',
    height: 32,     
    width: "100%",
  },
  
  questionLabel : {
    top : 10,
    left : 10,
    color: "#FFF",
    font : {
      fontSize : 18,
      fontFamily : settings.dinSchriftFont
    }
  },
  
  levelLabel : {
    top : 10,
    right : 10,
    color: "#FFF",
    font : {
      fontSize : 18,
      fontFamily : settings.dinSchriftFont
    }
  },
  
  stemView : {
    top : 32,
    left : 0,
    height : "100%",
    width : "100%",
    backgroundImage : "/images/game_view_background.png",
    layout : 'vertical'
  },
  
  webView : {
    top: 0,
    left: 1,
    width: settings.platformWidth - 16,  
    height: 170,
    enableZoomControls: false,
    touchEnabled: false,
    backgroundColor : 'transparent'
  },
  
  answerView : {
    top: 170,
    left: 0,
    width: "100%",
    heigth : "100%",
  }
  
};
