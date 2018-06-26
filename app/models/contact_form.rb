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
  attr_reader :message

  validates :name, :business_name, :telephone_number, :email, presence: true

  def save
    if valid?
      @message = 'Enqueue success'
      true
    else
      @message = 'Format errors on validation'
      false
    end
  end
end
