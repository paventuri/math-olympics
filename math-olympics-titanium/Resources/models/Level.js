var commons = require('/common/commons');

Level = function() {  
  var self = this;
  
  self.id = 0;
  self.title = "";
  self.requiredPoints = 0; 
  self.medal = undefined;
  self.points = 0;
};

Level.prototype.getLockedStatus = function() {
  var self = this;
  
  // TODO: Remove this trick (used just for the presentation)
  return ( self.id > 3 ? true : false );
};

Level.prototype.getMedal = function() {
  var self = this;
  
  // TODO: Remove this trick (used just for the presentation)
  var medals = ["gold", "silver", "bronze"];  
  return medals[self.id];
}

Level.findAll = function() {
   var database = commons.getDatabase();
   var sql = "SELECT id, title, required_points FROM levels ORDER by title ASC";
   var result = database.execute(sql);
   
   var list = commons.convertResultSet(result);
   result.close();
   database.close();
   
   // Convert Map<Object> to list<Level>
   var levels = [];
   for ( var item in list ) {
     var level = new Level();     
     level.id = list[item].id;
     level.title = list[item].title;
     level.requiredPoints = list[item].required_points;
     level.medal = level.getMedal();
     level.isLocked = level.getLockedStatus();
     levels.push(level);
   }
   
   
   return levels;
};

exports.Level = Level;
