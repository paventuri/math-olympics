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
    backgroundImage : '/images/level_selection_view_background.png'
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

  levelItemsView : {
    contentWidth : 'auto',
    contentHeight : 'auto',
    top : 64,
    // left: 2,
    // right: 2,
    width : "100%",
    height : 382
    // height: "100%"
  },

  levelItemView : {    
    top : 84,
    height : 84,
    width : "100%",
  },

  levelLabel : {
    left : 24,
    top : 22,
    color : '#FFF',
    font : {
      fontSize : 42,
      fontFamily : settings.dinSchriftFont
    },
    
  },

  pointsLabel : {
    right : 24,
    top : 28,
    font : {
      fontSize : 14,
      // fontFamily : settings.dinSchriftFont
    },
    color : '#FFF',
    visible: false
  },
  
  horizontalDividerImage : {
    image: '/images/dashed_hr.png',
    left: 10,
    top : 76,
  },
  
  medalImage : {
    // image : '/images/icon_lock.png',
    right : 24,
    top : 26,
    width: 24,
    height: 24,
  }

};
