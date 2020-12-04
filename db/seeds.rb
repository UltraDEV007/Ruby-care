# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mood.destroy_all
Affirmation.destroy_all
Insight.destroy_all
User.destroy_all
Symptom.destroy_all

require 'faker'

@admin = User.create!(name: 'admin', email: 'admin@email.com', password: '12345678')
@daniel = User.create!(name: 'daniel', email: 'daniel@email.com', password: '12345678')

puts "#{User.count} users created"

@mood1 = Mood.create!(status: 'Good', user: @admin)
@mood2 = Mood.create!(status: 'Poor', user: @admin)
@mood3 = Mood.create!(status: 'Great', user: @admin)
@mood4 = Mood.create!(status: 'Okay', user: @admin)
@mood5 = Mood.create!(status: 'Great', user: @daniel)

puts "#{Mood.count} moods created"

@affirmation1 = Affirmation.create!(content: "Today, I am brimming with energy and overflowing with joy.", user: @admin)
@affirmation2 = Affirmation.create!(content: "Today, I am brimming with energy and overflowing with joy.", user: @daniel)

puts "#{Affirmation.count} affirmations created"

@insight1 = Insight.create!(title: "Hello", description: "I dont know this is a description", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user: @daniel)
@insight2 = Insight.create!(title: "Hello", description: "I dont know this is a description", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user: @admin)
@insight3 = Insight.create!(title: "Hello", description: "I dont know this is a description", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user: @admin)
# learned how to use Faker this way from Amber Moore
@insight4 = Insight.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(word_count: 20), body: Faker::Lorem.sentence(word_count: 128), user: @admin)
@insight5 = Insight.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(word_count: 20), body: Faker::Lorem.sentence(word_count: 200), user: @daniel)

puts "#{Insight.count} insights created"

# learned strptime from stack overflow : https://stackoverflow.com/questions/5474164/rails-seeding-database-data-and-date-formats
@symptom1 = Symptom.create!(name: "Chills", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @daniel)
@symptom2 = Symptom.create!(name: "Fever", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @admin)
@symptom3 = Symptom.create!(name: "Chills", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @daniel)
@symptom4 = Symptom.create!(name: "Fever", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @admin)

puts "#{Symptom.count} symptoms created"
