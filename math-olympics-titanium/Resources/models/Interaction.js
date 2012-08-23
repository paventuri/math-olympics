var commons = require('/common/commons');

Interaction = function() {  
  var self = this;
  
  self.id = 0;
  self.title = "";
  self.level_id=0;
  self.topic = undefined; 
  self.stem = undefined;
  self.stimulus = undefined;
  self.points = 0;
};

Interaction.findBy = function (level_id) {
   var database = commons.getDatabase();
   var sql = "SELECT id, level_id, topic, stem, stimulus, points FROM interactions where level_id= "+level_id +" ORDER by id ASC";
   var result = database.execute(sql);
   
   var list = commons.convertResultSet(result);
   result.close();
   database.close();
   
   // Convert Map<Object> to list<Level>
   var interactions = [];
   for ( var item in list ) {
     var interaction = new Interaction();     
     interaction.id = list[item].id;
     interaction.level_id = list[item].level_id;
     interaction.topic = list[item].topic;
     interaction.stem = list[item].stem;
     interaction.stimulus = list[item].stimulus;
     interaction.points = list[item].points;
     interactions.push(interaction);
   }
   
   
   return interactions;
};

exports.Interaction = Interaction;