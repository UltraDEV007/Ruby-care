# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_14_040752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "affirmations", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_affirmations_on_user_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name", limit: 20
    t.datetime "time"
    t.integer "rating"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "factors"
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "insights", force: :cascade do |t|
    t.string "title", limit: 50
    t.string "description"
    t.text "body"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_insights_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "insight_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["insight_id", "user_id"], name: "index_likes_on_insight_id_and_user_id", unique: true
    t.index ["insight_id"], name: "index_likes_on_insight_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "medications", force: :cascade do |t|
    t.string "name"
    t.datetime "time"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "medication_class"
    t.string "reason"
    t.string "image"
    t.index ["user_id"], name: "index_medications_on_user_id"
  end

  create_table "moods", force: :cascade do |t|
    t.string "status"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "time"
    t.string "reason"
    t.index ["user_id"], name: "index_moods_on_user_id"
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "name", limit: 20
    t.datetime "time"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_symptoms_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", limit: 30
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "gender"
    t.date "birthday"
    t.string "image"
  end

  add_foreign_key "affirmations", "users"
  add_foreign_key "foods", "users"
  add_foreign_key "insights", "users"
  add_foreign_key "likes", "insights"
  add_foreign_key "likes", "users"
  add_foreign_key "medications", "users"
  add_foreign_key "moods", "users"
  add_foreign_key "symptoms", "users"
end
