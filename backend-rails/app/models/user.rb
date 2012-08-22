class User < ActiveRecord::Base
  rolify
  
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  
  has_one :profile, :dependent => :destroy
  
  after_create :create_default_profile

private
  def create_default_profile    
    self.profile = Profile.new
    self.profile.name = /(.+)@/.match(email)[1]
    self.profile.save
  end
end
