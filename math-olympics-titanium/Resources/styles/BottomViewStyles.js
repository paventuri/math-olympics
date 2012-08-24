/**
 * Flashcard Selection Bottom View Styles
 * @author Daniel Negri
 */

var settings = require('/common/commons').settings;

exports.bottomViewStyles = {
    // Bottom View
    bottomView : {
      bottom : 20,
      height : 77,
      width : "100%",
      backgroundImage : '/images/bottom_view_background.png',
    },
    
    olympicsLogo : {
      bottom : 6,
      left: 283,
      image : '/images/olympics_logo.png'
    },
    
    baseLevelBar : {
      top : 16,
      left : settings.leftMenuWidth + 2,
      right : 2,
      height : 8,
      borderColor : "c3c3c3",
      backgroundColor : "#FFF"
    },
    
    currentLevelBar : {
      top : 16,
      left : settings.leftMenuWidth + 2,
      width : 265,
      height : 8,
      backgroundColor : "#f27b07"
    },    
    
    milestoneLevelBar : {
      top : 16,
      left : settings.leftMenuWidth + 2,
      width : 220,
      height : 8,
      backgroundColor : "#237adc"
    }
};
