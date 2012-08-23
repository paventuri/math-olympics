class Answer < ActiveRecord::Base
	belongs_to :interaction

  attr_accessible :interaction, :content, :is_correct
end
