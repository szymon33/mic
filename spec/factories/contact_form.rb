# frozen_string_literal: true

FactoryBot.define do
  factory :contact_form do
    name { Faker::Name.name }
    business_name { Faker::Company.name }
    telephone_number { Faker::PhoneNumber.phone_number }
    email { Faker::Internet.email }
  end
end
