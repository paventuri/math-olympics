/**
 * Left Menu View
 * @author Daniel Negri
 */

var styles = require("/styles/LeftMenuViewStyles").leftMenuViewStyles;

LeftMenuView = function() {
  var self = this;
  self.id = "LEFT_MENU_VIEW";

  self.menuItems = {
    homeItem:     "Home",
    socialItem:   "Social",   
    medalsItem:   "Medals",
    storeItem:    "Store",
    rulesItem:    "Rules",
    gameItem:     "Back to Game"
  };

  return self;
};

LeftMenuView.prototype.initialize = function() {
  var self = this;
  
  self.view = Titanium.UI.createView(styles.leftMenuView);  
  self.initializeItemView();
  self.initializeItems();
  self.view.show();
};

LeftMenuView.prototype.initializeItemView = function() {
  var self = this;
  
  var itemView = Titanium.UI.createView(styles.leftMenuItemView);
  itemView.id = "ITEM_VIEW";
  
  self.itemView = itemView;
  self.view.add(itemView);  
};

LeftMenuView.prototype.initializeItems = function() {
  var self = this;  

  for ( var item in self.menuItems ) {    
    var itemLabel = self.createItemLabel(item, self.menuItems[item]);
    self.itemView.add(itemLabel);
    self[item] = itemLabel;
  } 
};

LeftMenuView.prototype.createItemLabel = function(id, text) {
  var params = styles.leftMenuItemLabel;
  params.text = text.toUpperCase();
  params.touchEnabled = true;
  var menuLabelItem = Titanium.UI.createLabel(params);
  menuLabelItem.id = id;  
  return menuLabelItem;
};

exports.LeftMenuView = LeftMenuView;
