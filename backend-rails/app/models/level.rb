class Level < ActiveRecord::Base
  has_many :interactions, :dependent => :destroy

  attr_accessible :required_points, :title  
end