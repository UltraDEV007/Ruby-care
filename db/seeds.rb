# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

# commented this out because it's going to destory everybodies' accounts and meds,etc if we seed it in production.
# Affirmation.destroy_all
# Insight.destroy_all
# User.destroy_all
# Symptom.destroy_all
# Food.destroy_all
# Medication.destroy_all
# Mood.destroy_all
# Like.destroy_all 

# @admin = User.create!(name: 'admin', email: 'admin@email.com', password: '12345678', gender: "Male", birthday: DateTime.strptime("10/20/1999 17:00", "%m/%d/%Y %H:%M"))
# @daniel = User.create!(name: 'daniel', email: 'daniel@email.com', password: '12345678', gender: "Male", birthday: DateTime.strptime("10/20/1999 17:00", "%m/%d/%Y %H:%M"), image: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/76997955_1489435331210059_7578690168563957760_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZbXWEQKhCgMAX8Lr6le&_nc_ht=scontent-lga3-1.xx&oh=e2a9637defb5457915c642acc00e3902&oe=60063C21")
# @no_insights = User.create!(name: "Ms.No-Insights", email: 'nope@email.com', password: '12345678', gender: "Female", birthday: DateTime.strptime("10/20/1999 17:00", "%m/%d/%Y %H:%M"))
# @bob = User.create!(name: "bob", email: 'bob@email.com', password: '12345678', gender: "Other", birthday: DateTime.strptime("10/20/1999 17:00", "%m/%d/%Y %H:%M"))

# puts "#{User.count} users created"

# @mood1 = Mood.create!(status: 'Good', time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @admin)
# @mood2 = Mood.create!(status: 'Poor',time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @admin)
# @mood3 = Mood.create!(status: 'Great', time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @admin)
# @mood4 = Mood.create!(status: 'Okay', time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @admin)
# @mood5 = Mood.create!(status: 'Great', time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @daniel)

# puts "#{Mood.count} moods created"

# @affirmation1 = Affirmation.create!(content: "Today, I am brimming with energy and overflowing with joy.", user: @admin)
# @affirmation2 = Affirmation.create!(content: "Today, I am brimming with energy and overflowing with joy.", user: @daniel)

# puts "#{Affirmation.count} affirmations created"

# # learned how to use Faker this way from Amber Moore
# @insight1 = Insight.create!(title: "Hello", description: "I dont know this is a description", body: Faker::Lorem.sentence(word_count: 350), user: @daniel)
# @insight2 = Insight.create!(title: "Hello", description: "Saying hi again", body: Faker::Lorem.sentence(word_count: 100), user: @admin)
# @insight3 = Insight.create!(title: "Bye", description: "Goodbye", body: Faker::Lorem.sentence(word_count: 100), user: @admin)
# @insight4 = Insight.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(word_count: 10), body: Faker::Lorem.sentence(word_count: 128), user: @admin)
# @insight5 = Insight.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(word_count: 10), body: Faker::Lorem.sentence(word_count: 320), user: @daniel)
# @insight6 = Insight.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(word_count: 10), body: Faker::Lorem.sentence(word_count: 320), user: @bob)

# # puts "#{Insight.count} insights created"

# # learned strptime from stack overflow : https://stackoverflow.com/questions/5474164/rails-seeding-database-data-and-date-formats
# @symptom1 = Symptom.create!(name: "Chills", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @daniel)
# @symptom2 = Symptom.create!(name: "Fever", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @admin)
# @symptom3 = Symptom.create!(name: "Chills", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @daniel)
# @symptom4 = Symptom.create!(name: "Fever", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"),  user: @admin)

# puts "#{Symptom.count} symptoms created"

# @food1 = Food.create!(name: "Avocado", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), rating: 5, factors: 'tasted good', user: @daniel)
# @food2 = Food.create!(name: "Avocado", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), rating: 5, factors: 'tasted good', user: @admin)

# puts "#{Food.count} foods created"

# @medication1 = Medication.create!(name: "Humira", medication_class: "Immunosuppresant", reason: "It's an immunosuppresant for Crohn's & Arthirits", image: "https://www.humira.com/content/humira/en-us/psoriasis/humira-dosing-psoriasis/_jcr_content/leftpar/columnlayout_c0ed/col-2-1/image_f9b3/large.img.png", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @admin)
# @medication2 = Medication.create!(name: "Humira", medication_class: "Immunosuppresant", reason: "It's an Immunosuppresant for Crohn's & Arthirits", image: "https://www.humira.com/content/humira/en-us/psoriasis/humira-dosing-psoriasis/_jcr_content/leftpar/columnlayout_c0ed/col-2-1/image_f9b3/large.img.png", time: DateTime.strptime("09/01/2009 17:00", "%m/%d/%Y %H:%M"), user: @daniel)

# puts "#{Medication.count} medications created"

# @like1 = Like.create!(user: @daniel, insight: @insight1)
# @like2 = Like.create!(user: @admin, insight: @insight1)
# @like3 = Like.create!(user: @bob, insight: @insight2)

# puts "#{Like.count} likes created!"