/**
 * Styles
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;

exports.leftMenuViewStyles = {
  // Left Menu
  leftMenuView : {
    layout : 'vertical',
  width : settings.leftMenuWidth,
  height : "100%",
  top : 48,
  left : 0,
  backgroundImage: "/images/left_menu_background.png"
  },

  leftMenuItemView : {
    top : 38,
    left: 0,
    layout: "vertical",
    width: "100%",
    heigth: "100%"    
  },
  
  leftMenuItemLabel : {
    color : '#333',
    font : {
      fontSize : 23,
      fontFamily : settings.dinSchriftFont
    },
    textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
    height : 38,
    top : 0,
    left : 15
  }
};