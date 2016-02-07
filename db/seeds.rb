# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'admin'
u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'chef', :kitchen_id => '1'
u3 = User.create :name => 'Linda', :email => 'linda@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'chef', :kitchen_id => '2'
u4 = User.create :name => 'Angie', :email => 'angie@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'customer'


