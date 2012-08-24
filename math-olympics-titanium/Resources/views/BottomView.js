var app = require("/common/globals");

BottomView = function(options) {
	var self = this;
	self.initialized = false;
	self.view = Ti.UI.createView({
		layout : 'horizontal',
		// bottom : 21 * app.globals.dpiConversionRatio,		
		bottom: -42 * app.globals.dpiConversionRatio,
		height : 77 * app.globals.dpiConversionRatio,
		width : "100%",
		backgroundImage: '/images/start_module_bg.png'
	});

	self.controller = options.controller;
	self.initialize();
	self.view.show();

	return self;
};

/**
 * called to update the information when the user selects items
 *
 * @param {Object} _values
 */
BottomView.prototype.updateViewContents = function(_values) {
	var self = this;
	var selected = _values.selected;
	var selectedCategories = this.controller.selectedCategories;
	
	// handle total cards
	with ( self ) {	
		var cardCount = Number(cardCountLabel.text);
		var totalCards = _values.data.totalCards;
		var categoryCount = Number(categoryCountLabel.text);		

		cardCountLabel.text = ( selected ? cardCount + totalCards : cardCount - totalCards );	
		categoryCountLabel.text = ( selected ? categoryCount + 1 : categoryCount - 1 );
	}	
}

BottomView.prototype.initialize = function() {
	var self = this;

	if (!self.initialized) {
		self.initializeCategoryItems();
		self.initializeCardItems();
		self.initializeStartButton();

		self.initialized = true;
	}
};

BottomView.prototype.initializeCategoryItems = function() {
	// category items
	var categoriesView = Ti.UI.createView({
		top: 0,
		width : 90 * app.globals.dpiConversionRatio,
		left : 4 * app.globals.dpiConversionRatio,
	});

	var categoryCountLabel = Ti.UI.createLabel({
		top: (app.globals.isAndroid ? 20 : 26) * app.globals.dpiConversionRatio,
		text : "0",
		color : "#333",
		font : {
			fontSize : 32 * app.globals.dpiConversionRatio,
			fontFamily: app.globals.dinSchriftFont
		},
	});

	var categoryLabel = Ti.UI.createLabel({
		top: (app.globals.isAndroid ? 50 : 56) * app.globals.dpiConversionRatio,
		text : "CATEGORY",
		color : "#999",
		font : {
			fontSize : 18 * app.globals.dpiConversionRatio,
			fontFamily: app.globals.dinSchriftFont
		},
	});

	categoriesView.add(categoryCountLabel);
	categoriesView.add(categoryLabel);

	this.view.add(categoriesView);
	this.categoryCountLabel = categoryCountLabel;
};

BottomView.prototype.initializeCardItems = function() {
	// card items
	var cardsView = Ti.UI.createView({
		top: 0,
		width : 90 * app.globals.dpiConversionRatio,
		height : "100%",
		left : 2 * app.globals.dpiConversionRatio,
	});

	var cardCountLabel = Ti.UI.createLabel({
		top: (app.globals.isAndroid ? 20 : 26) * app.globals.dpiConversionRatio,
		text : "0",
		color : "#333",
		font : {
			fontSize : 32 * app.globals.dpiConversionRatio,
			fontFamily: app.globals.dinSchriftFont
		},
	});

	var cardLabel = Ti.UI.createLabel({
		top: (app.globals.isAndroid ? 50 : 56) * app.globals.dpiConversionRatio,
		text : "CARDS",
		color : "#999",
		font : {
			fontSize :  18 * app.globals.dpiConversionRatio,
			fontFamily: app.globals.dinSchriftFont
		},
		height : 24, 
	});

	cardsView.add(cardCountLabel);
	cardsView.add(cardLabel);

	this.view.add(cardsView);
	this.cardCountLabel = cardCountLabel;
};

/**
 *
 */
BottomView.prototype.initializeStartButton = function() {
	var self = this;

	var startButton = Ti.UI.createButton({
		top: 30 * app.globals.dpiConversionRatio,
		backgroundImage : "/images/start_active.png",
		left : 18 * app.globals.dpiConversionRatio,
		width : 97 * app.globals.dpiConversionRatio,
		height : 41 * app.globals.dpiConversionRatio,
	});

	startButton.addEventListener("click", function(e) {
		self.controller.startCardView(e);
	});

	this.view.add(startButton);
};

exports.BottomView = BottomView;
