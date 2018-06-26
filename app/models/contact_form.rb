class ContactForm
  include ActiveModel::Model

  ATTRIBUTES = %i[
    name
    business_name
    telephone_number
    email
    contact_time
    notes
    reference
  ].freeze

  attr_accessor(*ATTRIBUTES)

  validates :name, :business_name, :telephone_number, :email, presence: true

  alias save valid?
end
