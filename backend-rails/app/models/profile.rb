class Profile < ActiveRecord::Base
  belongs_to :user
  
  attr_accessible :name, :location, :biography, :total_points
end
