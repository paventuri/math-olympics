/**
* Settings - Card Sequence Checkbox Group
* @author Daniel Negri
*/

var settings = require('/common/commons').settings;

AnswersRadioGroup = function() {
	var self = this;
	self.id = "ANSWER_SELECTION_CHECKBOX_GROUP";
//	self.cardSequence = {}
	self.radioItems = [];

	return self;
};

AnswersRadioGroup.prototype.initialize = function(answers) {
	var self = this;
	
	var view = Titanium.UI.createView({			
		layout: "vertical",
		top: 230,
		left: 0,		
	});
	self.view = view;
	self.initializeCardSequence(answers);
	self.view.show(); 
};

AnswersRadioGroup.prototype.initializeCardSequence = function(answers) {
	var self = this;

	var cardSequence = answers;
  for (var i = 0, length = answers.length; i < length; i++) {
    var radioItem = self.createRadioItem(answers[i],cardSequence);
    self.radioItems.push(radioItem);
    self.view.add(radioItem.view);
  }

};

AnswersRadioGroup.prototype.createRadioItem = function(answer, cardSequence) {
	var self = this;
	// var params = self.cardSequence[answer];
	
	var radioItem = { id: answer.id,
	                   index: answer.index,
	                    title: answer.title,
	                    interaction_id: answer.interaction_id,
	                    is_correct: answer.is_correct,
	                    content: answer.content,
	                    selected: answer.selected};

	var radioView = Titanium.UI.createView({				
		top: 0,
    left: 0,
		height: 30,
		layout: "horizontal"
	});
	radioItem.view = radioView;

	var image = Titanium.UI.createImageView({
		image: self.getRadioImagePath(false),
		left: 64,
		touchEnabled: true
 	});
 	radioItem.image = image;
	radioView.add(image);

	var label = Titanium.UI.createLabel({
		left: 8,
		font : {
			fontSize : 18,
			fontFamily : settings.metaOTFont
		},
		text: answer.content,
		color: self.getRadioColor(false)
	});
	radioItem.label = label;
	radioView.add(label);	
	
	radioView.addEventListener("click", function(e) {
		self.handleRadioClick(radioItem, cardSequence); 
	});

	return radioItem;
};

AnswersRadioGroup.prototype.getRadioImagePath = function(selected) {
	return (selected ? "/images/radio_button_selected.png" : "/images/radio_button_notselected.png");
};

AnswersRadioGroup.prototype.getRadioColor = function(selected) {
	return ( selected ? "#237adc" : "#959aa0");
};


AnswersRadioGroup.prototype.handleRadioClick = function(radioItem, cardSequence) {

  var self = this;

  for (var i in self.radioItems ) {
    var item = self.radioItems[i];
    var cardSequenceItem = cardSequence[i];
    cardSequenceItem.selected = (radioItem.id == item.id );

    var imageView = item.image;
    imageView.image = self.getRadioImagePath(cardSequenceItem.selected);
    imageView.show();

    var label = item.label;

    if (cardSequenceItem.selected) {
      if (radioItem.is_correct == "t") {
        label.text = label.text + "    CORRECT";
      } else {
        label.text = label.text + "    INCORRECT";
      }
    }

    label.color = self.getRadioColor(cardSequenceItem.selected);
  }

  var selectedStatus = cardSequence[radioItem.index];
  radioItem.view.fireEvent('changed', {
    selected : selectedStatus.selected,
    option : radioItem.id
  });

}; 



exports.AnswersRadioGroup = AnswersRadioGroup;