var commons = require('/common/commons');

Answer = function() {  
  var self = this;
  
  self.id = 0;
  self.index = 0;
  self.title = "";
  self.interaction_id = 0;
  self.is_correct = false; 
  self.content = undefined;
  self.selected = false;
};

Answer.findBy = function (interaction_id) {
   var database = commons.getDatabase();
   var sql = "SELECT id, interaction_id, is_correct, content FROM answers where interaction_id = "+interaction_id+ " ORDER by id ASC";
   var result = database.execute(sql);
   
   var list = commons.convertResultSet(result);
   result.close();
   database.close();
   
   // Convert Map<Object> to list<Level>
   var answers = [];
   for ( var item in list ) {
     var answer = new Answer();     
     answer.id = list[item].id;
     answer.index = item;
     answer.interaction_id = list[item].interaction_id;
     answer.is_correct = list[item].is_correct;
     answer.content = list[item].content;
     answers.push(answer);
   }
   
   
   return answers;
};

exports.Answer = Answer;
