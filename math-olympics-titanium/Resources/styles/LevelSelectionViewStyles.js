/**
 * Level Selection View Styles
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;

exports.levelSelectionViewStyles = {
  // Level Selection View
  levelSelectionView : {
    top : 0,
    left : 0,
    width : 320,
    height : "100%",
  },

  levelItemsView : {
    contentWidth : 'auto',
    contentHeight : 'auto',
    top : 0,
    left: 2,
    right: 2,    
    height : 382
    // height: "100%"
  },

  levelItemView : {    
    top : 0,
    height : 80,
    width : "100%",
  },

  levelLabel : {
    left : 16,
    top : 24,
    color : '#FFF',
    font : {
      fontSize : 36,
      fontFamily : settings.dinSchriftFont
    },
    
  }

};
