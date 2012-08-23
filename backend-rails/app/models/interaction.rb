class Interaction < ActiveRecord::Base
  belongs_to :level
  has_many :answers, :dependent => :destroy  

  accepts_nested_attributes_for :answers

  attr_accessible :topic, :stem, :stimulus, :level, :points
end
