/**
* Bottom View
* @author Daniel Negri
*/

var styles = require("/styles/BottomViewStyles").bottomViewStyles;
var settings = require('/common/commons').settings;

BottomView = function() {
    var self = this;
    self.id = "BOTTOM_VIEW";
    return self;
};

BottomView.prototype.initialize = function() {
    var self = this;

    self.view = Titanium.UI.createView(styles.bottomView);
    self.initializeLogo();
    self.view.show();
};

BottomView.prototype.initializeLogo = function() {
  var self = this;
  
  self.logoImage = Titanium.UI.createImageView(styles.olympicsLogo);
  self.view.add(self.logoImage);  
};



BottomView.prototype.updatedContent = function() {
  var self = this;
 
};

exports.BottomView = BottomView;