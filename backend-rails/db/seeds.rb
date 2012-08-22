# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   Mayor.create(name: 'Emanuel', city: cities.first)
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
puts 'SETTING UP DEFAULT USER LOGIN'
admin = User.create!(:email => 'administrator@kaplan.com', :password => 'administrator', :password_confirmation => 'administrator')
admin.add_role :admin
puts 'New admin user created: ' << admin.email
