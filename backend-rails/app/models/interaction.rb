class Interaction < ActiveRecord::Base
  attr_accessible :topic, :stem, :stimulus, :correct_answer_id
end
